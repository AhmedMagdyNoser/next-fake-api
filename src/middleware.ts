import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = ["https://www.google.com"];

export function middleware(request: NextRequest) {
  // Check the origin from the incoming request.
  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.includes(origin);

  const response = NextResponse.next();

  if (isAllowedOrigin) response.headers.set("Access-Control-Allow-Origin", origin);

  return response;
}
