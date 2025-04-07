/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { db } from "@/app/utils/db";
import { NextResponse } from "next/server";
// import type { RowDataPacket } from "mysql2";

console.log("Paystack webhook handler initialized");

// interface Payment {
//   transaction_id: string;
//   email: string;
//   amount: number;
//   currency: string;
//   status: string;
//   reference: string;
//   paid_at?: Date;
// }


// app/api/webhook/route.ts


export async function POST(req: Request) {
  console.log('=== PAYSTACK WEBHOOK RECEIVEDDD ===');
  
  try {
    
    const webhookData = await req.json();
    console.log('🔹 Raw webhook data:', JSON.stringify(webhookData, null, 2));

    // 2. Extract reference from webhook (Paystack's format)
    const reference = webhookData?.data?.reference;
    if (!reference) {
      console.error('❌ Mmissing reference in webhook payload');
      return NextResponse.json(
        { error: "Webhook payload missing reference" },
        { status: 400 }
      );
    }

    // 3. Verify with Paystack API
    console.log(`🔍 Verifying reference: ${reference}`);
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        timeout: 5000, 
      }
    );

    // 4. Process verification response
    if (response.data.data?.status === 'success') {
      console.log('✅ Payment verified:', response.data.data.reference);
      return NextResponse.json({ success: true });
    }

    console.warn('⚠️ Unsuccessful payment status:', response.data.data?.status);
    return NextResponse.json(
      { error: "Payment not successful", status: response.data.data?.status },
      { status: 400 }
    );

  } catch (error) {
    console.error('💥 Webhook processing failed:', error);
    return NextResponse.json(
      { error: "Webhook processing error" },
      { status: 500 }
    );
  }
}


// const verifyPayment = async (reference: string) => {
//   console.log(
//     `[verifyPayment] Starting verification for reference: ${reference}`
//   );

//   try {
//     console.log(
//       `[verifyPayment] Calling Paystack API for reference: ${reference}`
//     );
//     const response = await axios.get(
//       `https://api.paystack.co/transaction/verify/${reference}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log(
//       `[verifyPayment] Paystack API response status: ${response.status}`
//     );
//     console.log(
//       "[verifyPayment] Paystack API response data:",
//       JSON.stringify(response.data, null, 2)
//     );

//     if (!response.data || !response.data.data) {
//       console.error("[verifyPayment] Invalid Paystack response format");
//       return null;
//     }

//     return response.data;
//   } catch (error: any) {
//     console.error("[verifyPayment] Error verifying payment:", error.message);
//     if (error.response) {
//       console.error("[verifyPayment] Paystack API error response:", {
//         status: error.response.status,
//         data: error.response.data,
//       });
//     } else if (error.request) {
//       console.error("[verifyPayment] No response received from Paystack API");
//     }
//     return null;
//   }
// };

// export async function POST(req: Request) {
//   console.log("\n=== NEW WEBHOOK RECEIVED ===");
//   console.log("Webhook received at:", new Date().toISOString());

//   // Log all headers
//   const headers = Object.fromEntries(req.headers.entries());
//   console.log("Headers:", JSON.stringify(headers, null, 2));

//   try {
//     // Log raw body before parsing
//     const rawBody = await req.text();
//     console.log("Raw request body:", rawBody);
//     const webhookData = JSON.parse(rawBody);
//     console.log("Parsed webhook data:", JSON.stringify(webhookData, null, 2));

//     // Validate webhook data
//     if (!webhookData?.data?.reference) {
//       console.error("Missing reference in webhook data");
//       return NextResponse.json(
//         { message: "Missing reference in webhook data" },
//         { status: 400 }
//       );
//     }

//     const reference = webhookData.data.reference;
//     console.log(`Processing payment with reference: ${reference}`);

//     // Verify payment with Paystack
//     console.log(`Calling verifyPayment for reference: ${reference}`);
//     const paystackResponse = await verifyPayment(reference);

//     if (!paystackResponse) {
//       console.error("Paystack verification returned null");
//       return NextResponse.json(
//         { message: "Payment verification failed" },
//         { status: 400 }
//       );
//     }

//     console.log(
//       "Paystack verification response:",
//       JSON.stringify(paystackResponse, null, 2)
//     );

//     if (paystackResponse.data.status !== "success") {
//       console.error(
//         `Payment status is not success: ${paystackResponse.data.status}`
//       );
//       return NextResponse.json(
//         {
//           message: "Payment verification failed",
//           status: paystackResponse.data.status,
//         },
//         { status: 400 }
//       );
//     }

//     const data = paystackResponse.data;
//     console.log("Payment data:", JSON.stringify(data, null, 2));

//     // Prepare payment data
//     const paymentData: Payment = {
//       transaction_id: data.id.toString(),
//       email:
//         data.customer?.email || webhookData.data.customer?.email || "unknown",
//       amount: data.amount / 100, 
//       currency: data.currency,
//       status: data.status,
//       reference: data.reference,
//       paid_at: new Date(data.paid_at || new Date()),
//     };

//     console.log("Processed payment data:", paymentData);

//     // Check for existing payment
//     console.log(
//       `Checking database for existing payment with reference: ${paymentData.reference}`
//     );
//     const [rows] = await db.query<RowDataPacket[]>(
//       "SELECT * FROM payments WHERE reference = ?",
//       [paymentData.reference]
//     );

//     console.log(`Found ${rows.length} existing payments with this reference`);
//     if (rows.length > 0) {
//       console.log("Payment already exists in database:", rows[0]);
//       return NextResponse.json(
//         { message: "Payment already processed" },
//         { status: 200 }
//       );
//     }

//     // Save payment
//     console.log("Attempting to save payment to database...");
//     const dbResult = await db.query(
//       `INSERT INTO payments(transaction_id, email, amount, currency, status, reference, paid_at) 
//        VALUES(?, ?, ?, ?, ?, ?, ?)`,
//       [
//         paymentData.transaction_id,
//         paymentData.email,
//         paymentData.amount,
//         paymentData.currency,
//         paymentData.status,
//         paymentData.reference,
//         paymentData.paid_at,
//       ]
//     );

//     console.log("Database save result:", dbResult);
//     console.log(`Payment ${paymentData.reference} saved successfully`);

//     return NextResponse.json(
//       { message: "Payment saved successfully" },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Webhook processing error:", error.message);
//     console.error("Error stack:", error.stack);
//     if (error.code) console.error("Error code:", error.code);
//     if (error.sql) console.error("SQL error:", error.sql);

//     return NextResponse.json(
//       {
//         message: "Internal server error",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }
