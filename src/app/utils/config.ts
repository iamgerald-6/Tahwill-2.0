import dotenv from "dotenv";
dotenv.config();

console.log("JWT_SECRET:", process.env.JWT_SECRET); 
console.log("MailerLite API Key:", process.env.MAILERLITE_API_KEY);
if (!process.env.JWT_SECRET) throw new Error("Missing JWT_SECRET in .env");
if (!process.env.DB_HOST) throw new Error("Missing DB_HOST in .env");
if (!process.env.DB_USER) throw new Error("Missing DB_USER in .env");
if (!process.env.DB_NAME) throw new Error("Missing DB_NAME in .env");

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export const DB_HOST = process.env.DB_HOST as string;
export const DB_USER = process.env.DB_USER as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;
export const DB_NAME = process.env.DB_NAME as string;
export const UPLOAD_DIR = process.env.UPLOAD_DIR as string;
export const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY as string;
export const PUBLIC_PAYSTACK_KEY = process.env.PUBLIC_PAYSTACK_KEY as string;
export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY as string;
export const EMAIL_USER = process.env.EMAIL_USER as string;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;
export const EMAIL_FROM = process.env.EMAIL_FROM as string;