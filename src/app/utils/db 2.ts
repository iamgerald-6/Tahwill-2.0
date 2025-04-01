import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "./config";

console.log("DB_HOST:", DB_HOST);
console.log("DB_USER:", DB_USER);
console.log("DB_PASSWORD:", DB_PASSWORD ? "*" : "Not Set");
console.log("DB_NAME:", DB_NAME);

export const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD || "",
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
