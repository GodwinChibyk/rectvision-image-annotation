import { DASHBOARD_BASE } from "./../../components/Global/Reuseable/constants";
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { makeRequest, USER_ROUTES } from "../../base";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const authToken = request.cookies["authToken"];
  if (!authToken) {
    if (request.url.includes(DASHBOARD_BASE)) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }
  return NextResponse.next();
}

function basename(path: string) {
  return path.split("/").reverse()[0];
}
