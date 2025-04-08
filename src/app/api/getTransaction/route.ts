/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/app/utils/db";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/jwt";

interface Payment extends RowDataPacket {
  transaction_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at: Date;
}

export async function GET(req: Request) {
  try {
    // Verify super admin role
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token);

    if (
      !user ||
      typeof user !== "object" ||
      !("role" in user) ||
      user.role !== "super_admin"
    ) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // Fetch all successful payments
    const [payments] = await db.query<Payment[]>(
      "SELECT * FROM payments WHERE status = 'success' ORDER BY paid_at DESC"
    );

    // Group by month for analytics
    const monthlyPayment = payments.reduce((acc, payment) => {
      const date = new Date(payment.paid_at);
      const monthYear = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += payment.amount;

      return acc;
    }, {} as Record<string, number>);

    const monthlyData = Object.entries(monthlyPayment).map(
      ([month, amount]) => ({
        month,
        amount,
      })
    );

    return NextResponse.json(
      {
        transactions: payments,
        monthlyPayment: monthlyData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to fetch payments:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch payment data" },
      { status: 500 }
    );
  }
}
