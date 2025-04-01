import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/utils/db";
import { RowDataPacket } from "mysql2/promise";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    if (isNaN(Number(id))) {
      return NextResponse.json(
        { message: "Invalid blog ID format" },
        { status: 400 }
      );
    }

    const [blog] = await db.execute<RowDataPacket[]>(
      `SELECT id, title, cover_image, content, category, author, created_at 
       FROM blogs WHERE id = ? AND status = 'published' LIMIT 1`,
      [id]
    );

    if (!blog.length) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { status: "success", blog: blog[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
