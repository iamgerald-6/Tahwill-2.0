import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";

interface Payment {
  transaction_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at: Date;
}

interface MonthlyData {
  month: string;
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

    // Fetch all successful payments with type assertion
    const paymentsResult = await sql`
      SELECT * FROM dashboard_tw.payments 
      WHERE status = 'success' 
      ORDER BY paid_at DESC
    `;
    const payments = paymentsResult as Payment[];

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

    const monthlyData: MonthlyData[] = Object.entries(monthlyPayment).map(
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
