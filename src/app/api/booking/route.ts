import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";

interface Booking {
  transaction_id: string;
  amount: number;
  tier_name: string;
  reference: string;
  email: string;
  created_at: Date;
}

interface MonthlyBooking {
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

    // Fetch all bookings (you can filter by successful status if needed)
    const bookingsResult = await sql`
      SELECT * FROM dashboard_tw.bookings 
      ORDER BY created_at DESC
    `;

    const bookings = bookingsResult as Booking[];

    // Group bookings by month
    const monthlySummary = bookings.reduce((acc, booking) => {
      const date = new Date(booking.created_at);
      const monthYear = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }

      acc[monthYear] += booking.amount;
      return acc;
    }, {} as Record<string, number>);

    const monthlyData: MonthlyBooking[] = Object.entries(monthlySummary).map(
      ([month, amount]) => ({
        month,
        amount,
      })
    );

    return NextResponse.json(
      {
        bookings,
        monthlyBooking: monthlyData,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(
      "Failed to fetch bookings:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Failed to fetch booking data" },
      { status: 500 }
    );
  }
}
