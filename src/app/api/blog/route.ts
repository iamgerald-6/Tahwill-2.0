import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import sql from "@/app/utils/db";
import validator from "validator";
import { verifyToken } from "@/app/utils/jwt";
import sanitizeHtml from "sanitize-html";

const uploadDir = path.join(
  process.cwd(),
  process.env.UPLOAD_DIR || "public/uploads"
);

interface Blog {
  id: number;
  title: string;
  cover_image: string | null;
  content: string;
  category: string;
  author: string;
  created_at: Date;
  status: string;
}

interface SuperAdmin {
  id: number;
  role: string;
}

interface BlogInsertResult {
  id: number;
}

export async function GET() {
  try {
    // Fetch published blogs
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
      WHERE status = 'published' 
      ORDER BY created_at DESC
    `;

    const blogs = result as Blog[];

    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      created_at: blog.created_at.toISOString(),
    }));

    return NextResponse.json(
      { status: "success", blogs: formattedBlogs },
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

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Authentication
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token) as { id?: number } | null;

    // Authorization
    if (!user?.id) {
      return NextResponse.json(
        { message: "Forbidden: Invalid token" },
        { status: 403 }
      );
    }

    //  super admin role with type assertion
    const adminResult = await sql`
      SELECT role FROM dashboard_tw.super_admins WHERE id = ${user.id}
    `;
    const admin = adminResult[0] as SuperAdmin | undefined;

    if (!admin || admin.role !== "super_admin") {
      return NextResponse.json(
        { message: "Forbidden: Requires super_admin role" },
        { status: 403 }
      );
    }

    // Form data processing
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const status = (formData.get("status") as string) || "draft";
    const coverImage = formData.get("cover_image") as string | null;

    // Validation
    if (!title || !content || !author) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // File validation
    // if (coverImage) {
    //   const allowedMimeTypes = ["image/jpeg", "image/png"];
    //   if (!allowedMimeTypes.includes(coverImage.type)) {
    //     return NextResponse.json(
    //       { message: "Invalid file type. Only JPEG/PNG allowed" },
    //       { status: 400 }
    //     );
    //   }
    //   if (coverImage.size > 5 * 1024 * 1024) {
    //     return NextResponse.json(
    //       { message: "File size exceeds 5MB limit" },
    //       { status: 400 }
    //     );
    //   }
    // }

    // Sanitization
    const sanitizedTitle = validator.escape(title);
    const sanitizedContent = sanitizeHtml(content, {
      allowedTags: [
        "p",
        "strong",
        "em",
        "h1",
        "h2",
        "h3",
        "ul",
        "ol",
        "li",
        "a",
        "img",
      ],
      allowedAttributes: {
        a: ["href", "target"],
        img: ["src", "alt", "width", "height", "style"],
      },
    });

    // File upload
    // let imageUrl = null;
    // if (coverImage) {
    //   const buffer = Buffer.from(await coverImage.arrayBuffer());
    //   const fileName = `${Date.now()}-${coverImage.name.replace(/\s/g, "_")}`;
    //   const filePath = path.join(uploadDir, fileName);
    //   await fs.writeFile(filePath, buffer);
    //   imageUrl = `/uploads/${fileName}`;
    // }
    const imageUrl = coverImage;

    // Database insert with type assertion
    const insertResult = await sql`
      INSERT INTO dashboard_tw.blogs 
        (title, cover_image, content, category, author, status)
      VALUES 
        (${sanitizedTitle}, ${imageUrl}, ${sanitizedContent}, ${category}, ${author}, ${status})
      RETURNING id
    `;
    const newBlog = insertResult[0] as BlogInsertResult;

    return NextResponse.json(
      {
        status: "success",
        message: "Blog created!",
        data: { blogId: newBlog.id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
