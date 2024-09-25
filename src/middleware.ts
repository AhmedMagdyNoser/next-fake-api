import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set the Access-Control-Allow-Origin header to '*'
  response.headers.set("Access-Control-Allow-Origin", "*");

  return response;
}
