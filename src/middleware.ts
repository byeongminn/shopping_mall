import { NextResponse, type NextRequest } from "next/server";
import { verifyAuth } from "@/shared/lib/auth";
import { ACCESS_TOKEN } from "@/shared/lib/constants";

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    await verifyAuth(request);
    return NextResponse.next();
  } catch (error) {
    console.error(error);

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
};

export const config = {
  matcher: ["/cart"],
};
