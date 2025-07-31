import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_TOKEN } from "@/shared/constants/client";

const GUEST_PATHS = ["/login"];
const PROTECTED_PATHS = ["/cart"];

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  const pathname = request.nextUrl.pathname;
  const isGuestPath = GUEST_PATHS.some((path) => pathname.startsWith(path));
  const isProtectedPath = PROTECTED_PATHS.some((path) =>
    pathname.startsWith(path)
  );

  if (isGuestPath && accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isProtectedPath && !accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
