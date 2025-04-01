import dotenv from "dotenv";
dotenv.config();

console.log("JWT_SECRET:", process.env.JWT_SECRET); 

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