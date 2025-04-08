/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/app/utils/db";
import axios from "axios";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface Payment {
  transaction_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at?: Date;
}

interface Booking {
  transaction_id: string;
  amount: number;
  tier_name: string;
  reference: string;
  email: string;
}

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email template function
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
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM payments WHERE reference = ?",
      [paymentData.reference]
    );

    if (rows.length > 0) {
      console.log("⚠️ Payment already exists in database:", rows[0]);
      return NextResponse.json(
        { message: "Payment already processed" },
        { status: 200 }
      );
    }

    // Start database transaction
    await db.query("START TRANSACTION");

    try {
      // Save payment to database
      console.log("💾 Attempting to save payment to payments table...");
      await db.query(
        `INSERT INTO payments (transaction_id, email, amount, currency, status, reference, paid_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          paymentData.transaction_id,
          paymentData.email,
          paymentData.amount,
          paymentData.currency,
          paymentData.status,
          paymentData.reference,
          paymentData.paid_at,
        ]
      );

      // Prepare and save booking data
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

      console.log("🔹 Inserting into bookings with tier:", tier_name);
      await db.query(
        `INSERT INTO bookings (transaction_id, amount, tier_name, reference, email)
         VALUES (?, ?, ?, ?, ?)`,
        [
          bookingData.transaction_id,
          bookingData.amount,
          bookingData.tier_name,
          bookingData.reference,
          bookingData.email,
        ]
      );

      // Commit transaction if both operations succeed
      await db.query("COMMIT");
      console.log(
        `✅ Payment ${paymentData.reference} and booking saved successfully`
      );

      // Send confirmation email with Calendly link
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
          message: "Payment processed, booking saved, and confirmation sent",
          emailSent: true,
        },
        { status: 200 }
      );
    } catch (dbError: any) {
      // Rollback transaction if any error occurs
      await db.query("ROLLBACK");
      console.error("💥 Database operation failed:", dbError.message);
      if (dbError.sql) console.error("SQL error:", dbError.sql);

      return NextResponse.json(
        {
          error: "Failed to save payment data",
          message: dbError.message,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("💥 Webhook processing error:", error.message);
    if (error.response) {
      console.error("Paystack API error:", error.response.data);
    }
    if (error.code) console.error("Error code:", error.code);
    if (error.sql) console.error("SQL error:", error.sql);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
