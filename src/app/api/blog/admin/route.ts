import { NextResponse } from "next/server";
import { db } from "@/app/utils/db";
import { RowDataPacket } from "mysql2/promise";
import { verifyToken } from "@/app/utils/jwt";

export async function GET(req: Request) {
  try {
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

    const [blogs] = await db.execute<RowDataPacket[]>(`
      SELECT id, title, cover_image, content, category, author, status, created_at
      FROM blogs
      ORDER BY created_at DESC
    `);

    return NextResponse.json({ status: "success", blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
