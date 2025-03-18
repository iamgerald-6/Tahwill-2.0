import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { db } from "@/app/utils/db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import validator from "validator";
import { verifyToken } from "@/app/utils/jwt";

const uploadDir = path.join(
  process.cwd(),
  process.env.UPLOAD_DIR || "public/uploads"
);

export async function GET() {
  try {
    const [blogs] = await db.execute<RowDataPacket[]>(
      `SELECT id, title, cover_image, content, category, author, created_at 
       FROM blogs WHERE status = 'published' ORDER BY created_at DESC`
    );

    return NextResponse.json({ status: "success", blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let connection;
  try {
   
    console.log("Request headers:", req.headers);

  
    const formData = await req.formData();
    console.log("Form data received:", formData);

   
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const user = verifyToken(token);

   
    if (!user || typeof user !== "object" || !("id" in user)) {
      return NextResponse.json(
        { message: "Forbidden: Invalid token" },
        { status: 403 }
      );
    }

   
    const [rows] = await db.execute<RowDataPacket[]>(
      `SELECT role FROM super_admins WHERE id = ?`,
      [user.id]
    );

    if (!rows.length || rows[0].role !== "super_admin") {
      return NextResponse.json(
        { message: "Forbidden: You must be a super_admin to create a blog" },
        { status: 403 }
      );
    }

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const status = (formData.get("status") as string) || "draft";
    const coverImage = formData.get("cover_image") as File | null;

    if (!title || !content || !author) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (coverImage) {
      const allowedMimeTypes = ["image/jpeg", "image/png"];
      if (!allowedMimeTypes.includes(coverImage.type)) {
        return NextResponse.json(
          { message: "Invalid file type. Only JPEG and PNG are allowed." },
          { status: 400 }
        );
      }
      if (coverImage.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { message: "File size too large. Maximum size is 5MB." },
          { status: 400 }
        );
      }
    }

    const sanitizedTitle = validator.escape(title);
    const sanitizedContent = validator.escape(content);

    let imageUrl = null;
    if (coverImage) {
      const buffer = Buffer.from(await coverImage.arrayBuffer());
      const fileName = `${Date.now()}-${coverImage.name.replace(/\s/g, "_")}`;
      const filePath = path.join(uploadDir, fileName);
      await fs.writeFile(filePath, buffer);
      imageUrl = `/uploads/${fileName}`;
    }

    connection = await db.getConnection();
    await connection.beginTransaction();

    
    const [result] = await connection.execute<ResultSetHeader>(
      `INSERT INTO blogs (title, cover_image, content, category, author, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [sanitizedTitle, imageUrl, sanitizedContent, category, author, status]
    );

    await connection.commit();

    return NextResponse.json(
      {
        status: "success",
        message: "Blog created!",
        data: { blogId: result.insertId },
      },
      { status: 201 }
    );
  } catch (error) {
    
    if (connection) {
      await connection.rollback();
    }

    const err = error as Error;
    console.error("Error creating blog:", {
      error: err.message,
      stack: err.stack,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  } finally {
    
    if (connection) {
      connection.release();
    }
  }
}
