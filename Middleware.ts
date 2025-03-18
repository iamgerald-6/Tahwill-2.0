import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./src/app/utils/jwt";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

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

// ✅ Protect API & Client-Side Routes
export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
  exclude: ["/api/admin/login"],
};
