// import { NextRequest, NextResponse } from "next/server";
// import sql from "@/app/utils/db";

// interface Blog {
//   id: number;
//   title: string;
//   cover_image: string;
//   content: string;
//   category: string;
//   author: string;
//   created_at: Date;
// }

// export async function GET(
//   request: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     if (isNaN(Number(id))) {
//       return NextResponse.json(
//         { message: "Invalid blog ID format" },
//         { status: 400 }
//       );
//     }

//     const result = await sql`
//       SELECT
//         id,
//         title,
//         cover_image,
//         content,
//         category,
//         author,
//         created_at
//       FROM dashboard_tw.blogs
//       WHERE id = ${Number(id)}
//       AND status = 'published'
//       LIMIT 1
//     `;

//     // Type assertion for the first row
//     const blog = result[0] as Blog | undefined;

//     if (!blog) {
//       return NextResponse.json({ message: "Blog not found" }, { status: 404 });
//     }

//     // Format the response
//     return NextResponse.json(
//       {
//         status: "success",
//         data: {
//           id: blog.id,
//           title: blog.title,
//           coverImage: blog.cover_image,
//           content: blog.content,
//           category: blog.category,
//           author: blog.author,
//           createdAt: blog.created_at.toISOString(),
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return NextResponse.json(
//       {
//         message: "Internal server error",
//         error: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

// pages/api/blogs/[id].ts
// src/app/api/blog/[id]/route.ts
// src/app/api/blog/[id]/route.ts
// src/app/api/blog/[id]/route.ts
import { NextResponse } from "next/server";
import sql from "@/app/utils/db";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log("--- BLOG POST API REQUEST STARTED ---");
  console.log(
    `[${new Date().toISOString()}] Incoming request for blog ID: ${
      (await params).id
    }`
  );

  try {
    const { id } = await params;
    console.log("Extracted ID from params:", id);

    // Basic ID validation
    const blogId = Number(id);
    console.log("Parsed ID:", blogId);

    if (isNaN(blogId)) {
      console.warn("⚠️ Invalid ID format received:", id);
      return NextResponse.json(
        { error: "ID must be a number" },
        { status: 400 }
      );
    }

    console.log("Executing database query...");
    const startTime = Date.now();

    // Neon query with parameterized input
    const blogPost = await sql`
      SELECT 
        id, 
        title, 
        cover_image, 
        content, 
        category, 
        author, 
        created_at
      FROM dashboard_tw.blogs
      WHERE id = ${blogId}
      AND status = 'published'
      LIMIT 1
    `;

    const queryDuration = Date.now() - startTime;
    console.log(`✅ Database query completed in ${queryDuration}ms`);
    console.log("Query result:", blogPost);

    if (!blogPost || blogPost.length === 0) {
      console.warn(`⚠️ No published blog found for ID: ${blogId}`);
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    console.log("Successfully retrieved blog post:", {
      id: blogPost[0].id,
      title: blogPost[0].title,
    });

    return NextResponse.json(blogPost[0]);
  } catch (error) {
    console.error("❌ DATABASE ERROR:", error);

    // Enhanced error logging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error type:", error);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    console.log("--- REQUEST PROCESSING COMPLETED ---\n");
  }
}

// Other HTTP methods with debugging
