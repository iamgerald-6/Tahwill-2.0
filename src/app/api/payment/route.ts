/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, amount, tier_name } = await req.json();

  if (!email || !amount || !tier_name) {
    return NextResponse.json(
      { message: "Email, amount, and tier name are required" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  if (isNaN(amount) || amount <= 0) {
    return NextResponse.json(
      { message: "Please provide a valid positive amount" },
      { status: 400 }
    );
  }

  try {
    const data = {
      email,
      amount: Math.round(amount * 100),
      currency: "NGN",
      metadata: {
        tier_name,
      },
    };

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data.status) {
      console.error("Paystack API Error:", response.data);
      return NextResponse.json(
        {
          message: "Payment initialization failed",
          paystackError:
            response.data.message || "No error message from Paystack",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Payment initialization successful",
        authorization_url: response.data.data.authorization_url,
        reference: response.data.data.reference,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error initializing payment:", error);

    let errorMessage = "Internal server error";
    if (error.response) {
      console.error("Paystack API response error:", error.response.data);
      errorMessage = error.response.data.message || "Payment processing failed";
    } else if (error.request) {
      console.error("No response received from Paystack API");
      errorMessage = "No response from payment processor";
    }

    return NextResponse.json(
      {
        message: errorMessage,
        details: error.response?.data || null,
      },
      { status: error.response?.status || 500 }
    );
  }
}
