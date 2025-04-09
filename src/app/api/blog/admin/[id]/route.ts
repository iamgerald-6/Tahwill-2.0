import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";

interface DeletedBlog {
  id: number;
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
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

    const result = await sql`
      DELETE FROM dashboard_tw.blogs 
      WHERE id = ${blogId}
      RETURNING id
    `;

    const deletedBlog = result[0] as DeletedBlog | undefined;

    if (!deletedBlog) {
      return NextResponse.json(
        { message: "Blog not found or already deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
        deletedId: deletedBlog.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
