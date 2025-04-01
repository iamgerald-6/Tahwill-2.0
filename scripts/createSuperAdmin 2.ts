/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import { db } from "../src/app/utils/db";

async function createSuperAdmin(): Promise<void> {
  try {
    const email: string = "admin@admin.com";
    const password: string = "admin12345";
   
    const hashedPassword: string = await bcrypt.hash(password, 10);
   
    const [existingSuperAdmin]: any[] = await db.query(
      "SELECT id FROM super_admins WHERE email = ?",
      [email]
    );
    if (existingSuperAdmin.length > 0) {
      console.log("Super admin already exists.");
      return;
    }
  
    await db.query("INSERT INTO super_admins (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);

    console.log("✅ Super admin created successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating super admin:", error);
    process.exit(1);
  }
}

createSuperAdmin();
