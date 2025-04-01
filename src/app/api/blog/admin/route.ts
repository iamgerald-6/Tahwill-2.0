import { NextResponse } from "next/server";
import { db } from "@/app/utils/db";
import { RowDataPacket } from "mysql2/promise";
import { verifyToken } from "@/app/utils/jwt"; // Assuming you have this utility function

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    // Verify the token using the utility function
    const user = verifyToken(token);

    // Check if the user is not valid or if they are not a super_admin
    if (
      !user ||
      typeof user !== "object" ||
      !("role" in user) ||
      user.role !== "super_admin"
    ) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // If valid, fetch the blogs from the database
    const [blogs] = await db.execute<RowDataPacket[]>(`
      SELECT id, title, cover_image, content, category, author, status, created_at
      FROM blogs
      ORDER BY created_at DESC
    `);

    // Return the blogs as the response
    return NextResponse.json({ status: "success", blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
