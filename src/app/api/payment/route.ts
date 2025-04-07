import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, amount } = await req.json();

  // Validate inputs more thoroughly
  if (!email || !amount) {
    return NextResponse.json(
      { message: "Email and amount are required" },
      { status: 400 }
    );
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  // Validate amount is a positive number
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

    
    if (!response.data.status || response.data.status !== true) {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
