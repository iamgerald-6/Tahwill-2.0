import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./src/app/utils/jwt";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const response = NextResponse.next();
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://tahwill-2-0-eight.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const token = authHeader?.split(" ")[1];
  const user = token ? verifyToken(token) : null;

  if (!user) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { error: "Forbidden: Invalid token" },
        { status: 403 }
      );
    }
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*", "/api/admin/login"],
  exclude: ["/api/admin/login"],
};
