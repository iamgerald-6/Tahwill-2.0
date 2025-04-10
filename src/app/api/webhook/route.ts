import { NextResponse } from "next/server";
import axios from "axios";
import { neon } from "@neondatabase/serverless";
import nodemailer from "nodemailer";


const sql = neon(process.env.DATABASE_URL!);

interface Payment {
  transaction_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at: Date;
}

interface Booking {
  transaction_id: string;
  amount: number;
  tier_name: string;
  reference: string;
  email: string;
}


const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function createBookingEmail(customerName: string, calendlyLink: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Booking Confirmation</h2>
      <p>Hello ${customerName},</p>
      <p>Thank you for your payment! Please schedule your appointment using the link below:</p>
      <a href="${calendlyLink}" 
         style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">
         Schedule Your Session
      </a>
      <p>If you have any questions, please reply to this email.</p>
      <p>Best regards,<br/>Tahwil Solutions Team</p>
    </div>
  `;
}

export async function POST(req: Request) {
  console.log("=== PAYSTACK WEBHOOK RECEIVED ===");

  try {
    // Log headers for debugging
    const headers = Object.fromEntries(req.headers.entries());
    console.log("Headers:", JSON.stringify(headers, null, 2));

    const rawBody = await req.text();
    console.log("Raw request body:", rawBody);
    const webhookData = JSON.parse(rawBody);
    console.log("Parsed webhook data:", JSON.stringify(webhookData, null, 2));

    if (!webhookData?.data?.reference) {
      console.error("❌ Missing reference in webhook data");
      return NextResponse.json(
        { error: "Missing reference in webhook data" },
        { status: 400 }
      );
    }

    const reference = webhookData.data.reference;
    console.log(`🔹 Processing payment with reference: ${reference}`);

    // Verify payment with Paystack
    console.log(
      `🔍 Verifying payment with Paystack for reference: ${reference}`
    );
    const paystackResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        timeout: 5000,
      }
    );

    console.log(
      "🔹 Paystack verification response:",
      JSON.stringify(paystackResponse.data, null, 2)
    );

    if (paystackResponse.data.data?.status !== "success") {
      console.error(
        `❌ Payment status is not success: ${paystackResponse.data.data?.status}`
      );
      return NextResponse.json(
        {
          error: "Payment verification failed",
          status: paystackResponse.data.data?.status,
        },
        { status: 400 }
      );
    }

    const data = paystackResponse.data.data;
    console.log("✅ Payment verified successfully");

    // Prepare payment data
    const paymentData: Payment = {
      transaction_id: data.id.toString(),
      email:
        data.customer?.email || webhookData.data.customer?.email || "unknown",
      amount: data.amount / 100,
      currency: data.currency,
      status: data.status,
      reference: data.reference,
      paid_at: data.paid_at ? new Date(data.paid_at) : new Date(),
    };

    console.log("🔹 Processed payment data:", paymentData);

    // Check for existing payment
    console.log(
      `🔍 Checking database for existing payment with reference: ${paymentData.reference}`
    );
    const existingPayments = await sql`
      SELECT * FROM dashboard_tw.payments WHERE reference = ${paymentData.reference}
    `;
    const existingPayment = existingPayments[0] as Payment | undefined;

    if (existingPayment) {
      console.log("⚠️ Payment already exists in database:", existingPayment);
      return NextResponse.json(
        { message: "Payment already processed" },
        { status: 200 }
      );
    }

    // Prepare booking data
    const tier_name =
      data.metadata?.tier_name ||
      webhookData.data?.metadata?.tier_name ||
      "Unknown Tier";
    const bookingData: Booking = {
      transaction_id: paymentData.transaction_id,
      amount: paymentData.amount,
      tier_name,
      reference: paymentData.reference,
      email: paymentData.email,
    };

    // Process transaction
    try {
      console.log("🏁 Starting database operations...");

      console.log("💾 Saving payment to database...");
      const paymentResult = await sql`
        INSERT INTO dashboard_tw.payments 
          (transaction_id, email, amount, currency, status, reference, paid_at) 
        VALUES 
          (${paymentData.transaction_id}, 
           ${paymentData.email}, 
           ${paymentData.amount}, 
           ${paymentData.currency}, 
           ${paymentData.status}, 
           ${paymentData.reference}, 
           ${paymentData.paid_at})
        RETURNING *
      `;
      const savedPayment = paymentResult[0] as Payment;
      console.log("✅ Payment saved:", savedPayment);

      // Phase 2: Insert booking
      console.log("💾 Saving booking to database...");
      const bookingResult = await sql`
        INSERT INTO dashboard_tw.bookings 
          (transaction_id, amount, tier_name, reference, email)
        VALUES 
          (${bookingData.transaction_id}, 
           ${bookingData.amount}, 
           ${bookingData.tier_name}, 
           ${bookingData.reference}, 
           ${bookingData.email})
        RETURNING *
      `;
      const savedBooking = bookingResult[0] as Booking;
      console.log("✅ Booking saved:", savedBooking);

      // Send confirmation email
      const calendlyLink = "https://calendly.com/tahwilsolutions/30min";
      const customerEmail = paymentData.email;
      const customerName = data.customer?.first_name || "Valued Customer";

      console.log(
        `✉️ Preparing to send confirmation email to ${customerEmail}`
      );

      const mailOptions = {
        from: `"Tahwil Solutions" <${process.env.EMAIL_USER}>`,
        to: customerEmail,
        subject: "Your Booking Confirmation",
        html: createBookingEmail(customerName, calendlyLink),
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Booking confirmation sent to ${customerEmail}`);

      return NextResponse.json(
        {
          status: "success",
          message: "Payment processed, booking saved, and confirmation sent",
          data: {
            payment: savedPayment,
            booking: savedBooking,
          },
        },
        { status: 200 }
      );
    } catch (dbError) {
      console.error(
        "💥 Database operation failed:",
        dbError instanceof Error ? dbError.message : "Unknown error"
      );


      return NextResponse.json(
        {
          error: "Failed to process transaction",
          details: dbError instanceof Error ? dbError.message : "Unknown error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(
      "💥 Webhook processing error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
