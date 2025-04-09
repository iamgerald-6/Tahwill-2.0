import { NextRequest, NextResponse } from "next/server";
import sql from "@/app/utils/db";

interface Blog {
  id: number;
  title: string;
  cover_image: string;
  content: string;
  category: string;
  author: string;
  created_at: Date;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    // Validate ID parameter
    if (isNaN(Number(id))) {
      return NextResponse.json(
        { message: "Invalid blog ID format" },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT 
        id, 
        title, 
        cover_image, 
        content, 
        category, 
        author, 
        created_at
      FROM dashboard_tw.blogs
      WHERE id = ${Number(id)} 
      AND status = 'published'
      LIMIT 1
    `;

    // Type assertion for the first row
    const blog = result[0] as Blog | undefined;

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // Format the response
    return NextResponse.json(
      {
        status: "success",
        data: {
          id: blog.id,
          title: blog.title,
          coverImage: blog.cover_image,
          content: blog.content,
          category: blog.category,
          author: blog.author,
          createdAt: blog.created_at.toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
