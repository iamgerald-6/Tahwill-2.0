import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/app/utils/jwt";
import { db } from "@/app/utils/db"; 
import { RowDataPacket } from "mysql2/promise";
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
    const [rows] = await db.execute<SuperAdmin[] & RowDataPacket[]>(
      "SELECT id, email, password, role FROM super_admins WHERE email = ? LIMIT 1",
      [email]
    );
    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const admin: SuperAdmin = rows[0];
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const token: string = generateToken(admin.id);
    return NextResponse.json(
      {
        token,
        admin: { id: admin.id, email: admin.email, role: admin.role },
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
