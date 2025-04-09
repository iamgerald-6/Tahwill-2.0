import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/app/utils/jwt";
import sql from "@/app/utils/db";

interface LoginRequest {
  email: string;
  password: string;
}

interface SuperAdmin {
  id: number;
  email: string;
  password: string;
  role: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password }: LoginRequest = await req.json();

    // Properly typed PostgreSQL query
    const result = await sql`
      SELECT id, email, password, role 
      FROM dashboard_tw.super_admins 
      WHERE email = ${email} 
      LIMIT 1
    `;

    // Type assertion or proper type handling
    const admin = result[0] as SuperAdmin | undefined;

    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token: string = generateToken(admin.id, admin.role);

    return NextResponse.json(
      {
        token,
        admin: { id: admin.id, email: admin.email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/admin/login:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
