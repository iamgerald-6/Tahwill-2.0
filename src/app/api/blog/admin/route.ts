import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
import { verifyToken } from "@/app/utils/jwt";

interface Blog {
  id: number;
  title: string;
  cover_image: string;
  content: string;
  category: string;
  author: string;
  status: string;
  created_at: Date;
}

export async function GET(req: Request) {
  try {
    // Authentication check
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token) as { role?: string } | null;

    if (!user || typeof user !== "object" || user.role !== "super_admin") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const result = await sql`
      SELECT 
        id, 
        title, 
        cover_image, 
        content, 
        category, 
        author, 
        status, 
        created_at
      FROM dashboard_tw.blogs
      ORDER BY created_at DESC
    `;

    // Type assertion for the blogs array
    const blogs = result as Blog[];

    // Format dates to ISO strings for the response
    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      created_at: blog.created_at.toISOString(),
    }));

    return NextResponse.json(
      {
        status: "success",
        blogs: formattedBlogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
