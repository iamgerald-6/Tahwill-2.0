import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";
import moment from "moment";

interface Payment {
  transaction_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at: Date;
}

interface MonthlyPayment {
  month: string; // Format: "YYYY-MM"
  monthName: string; // "January", "February", etc.
  amount: number;
}

export async function GET(req: Request) {
  try {
    // Verify super admin role
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token) as { role?: string } | null;

    if (!user || user.role !== "super_admin") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // Fetch successful payments
    const paymentsResult = await sql`
      SELECT * FROM dashboard_tw.payments 
      WHERE status = 'success' 
      ORDER BY paid_at DESC
    `;
    const payments = paymentsResult as Payment[];

    // Group by month and sum amounts
    const monthlyPaymentMap = payments.reduce((acc, payment) => {
      const date = new Date(payment.paid_at);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`; // "YYYY-MM"
      const monthName = moment(date).format("MMMM"); // "January", "February", etc.

      if (!acc[monthKey]) {
        acc[monthKey] = {
          month: monthKey,
          monthName,
          amount: 0,
        };
      }
      acc[monthKey].amount += payment.amount;

      return acc;
    }, {} as Record<string, MonthlyPayment>);

    // Convert to array and sort by month (newest first)
    const monthlyPayment = Object.values(monthlyPaymentMap).sort(
      (a, b) => new Date(b.month).getTime() - new Date(a.month).getTime()
    );

    // Calculate TOTAL AMOUNT across all months (sum of all payments)
    const totalAmount = payments.reduce(
      (sum, payment) => sum + payment.amount,
      0
    );

    return NextResponse.json(
      {
        transactions: payments,
        monthlyPayment,
        totalAmount,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(
      "Failed to fetch payments:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Failed to fetch payment data" },
      { status: 500 }
    );
  }
}
