import { NextResponse } from "next/server";
import { db } from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";
import {ResultSetHeader } from "mysql2/promise";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  let connection;
  try {
    const blogId = parseInt(params.id);
    if (isNaN(blogId)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token) as { id: number; role: string };

    if (!user || user.role !== "super_admin") {
      return NextResponse.json(
        { message: "Forbidden: Only super_admins can delete blogs" },
        { status: 403 }
      );
    }

    connection = await db.getConnection();
    await connection.beginTransaction();

    const [result] = await connection.execute<ResultSetHeader>(
      "DELETE FROM blogs WHERE id = ?",
      [blogId]
    );

    await connection.commit();

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Blog not found or already deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    const err = error as Error;
    console.error("Error deleting blog:", err.message);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}
