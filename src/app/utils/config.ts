import dotenv from "dotenv";
dotenv.config();


if (!process.env.JWT_SECRET) throw new Error("Missing JWT_SECRET in .env");
if (!process.env.DATABASE_URL) throw new Error("Missing DB_HOST in .env");

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export const DATABASE_URL = process.env.DATABASE_URL as string;
export const UPLOAD_DIR = process.env.UPLOAD_DIR as string;
export const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY as string;
export const PUBLIC_PAYSTACK_KEY = process.env.PUBLIC_PAYSTACK_KEY as string;
export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY as string;
export const EMAIL_USER = process.env.EMAIL_USER as string;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;
export const EMAIL_FROM = process.env.EMAIL_FROM as string;
export const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL as string;