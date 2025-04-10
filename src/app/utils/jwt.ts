import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const generateToken = (userId: number, role: string): string => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET as string, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) || "7d",
  });
};

export const verifyToken = (token: string): string | object => {
  return jwt.verify(token, JWT_SECRET);
};
