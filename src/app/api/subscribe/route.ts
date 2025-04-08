// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import type { Subscriber } from "../types";

export async function POST(req: Request) {
  try {
    const { email } = await req.json(); 
    const response = await axios.post(
      "https://connect.mailerlite.com/api/subscribers",
      {
        email,
        fields: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error adding subscriber" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const response = await axios.get(
      "https://connect.mailerlite.com/api/subscribers",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
      }
    );
    const subscribers = response.data.data;
    const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
    const monthCounts: Record<string, number> = {};
    subscribers.forEach((s:Subscriber) => {
      const month = monthFormatter.format(new Date(s.created_at));
      monthCounts[month] = (monthCounts[month] || 0) + 1;
    });

    const monthlyData = Object.entries(monthCounts).map(([month, count]) => ({
      month,
      count,
    }));
    return NextResponse.json({subscribers, monthlyData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}