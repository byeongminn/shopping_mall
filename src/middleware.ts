import { NextResponse, type NextRequest } from "next/server";
import { reissueAccessToken, verifyAuth } from "@/shared/lib/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/shared/lib/constants";

const redirectToLogin = (request: NextRequest) => {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
};

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

  if (!accessToken) {
    return redirectToLogin(request);
  }

  try {
    await verifyAuth(request);
    return NextResponse.next();
  } catch (error) {
    console.error(error);

    if (!refreshToken) {
      return redirectToLogin(request);
    }

    try {
      const newAccessToken = await reissueAccessToken(request);

      const response = NextResponse.next();

      response.cookies.set(ACCESS_TOKEN, newAccessToken, {
        httpOnly: true,
        path: "/",
      });

      return response;
    } catch (error) {
      console.error(error);

      return redirectToLogin(request);
    }
  }
};

export const config = {
  matcher: ["/cart"],
};
