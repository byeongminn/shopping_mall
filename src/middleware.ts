import { NextResponse, type NextRequest } from "next/server";
import { reissueAccessToken, verifyAuth } from "@/shared/lib/auth";
import {
  ACCESS_TOKEN,
  GUEST_PATHS,
  MATCHER_PATHS,
  PROTECTED_PATHS,
  REFRESH_TOKEN,
} from "@/shared/lib/constants";

const redirectToLogin = (request: NextRequest) => {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
};

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

  const isGuestPath = GUEST_PATHS.includes(request.nextUrl.pathname);
  const isProtectedPath = PROTECTED_PATHS.includes(request.nextUrl.pathname);

  if (isGuestPath) {
    if (accessToken) {
      try {
        await verifyAuth(request);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
        // accessToken 만료
        console.error(error);

        if (refreshToken) {
          try {
            const newAccessToken = await reissueAccessToken(request);

            const response = NextResponse.redirect(new URL("/", request.url));

            response.cookies.set(ACCESS_TOKEN, newAccessToken, {
              httpOnly: true,
              path: "/",
            });

            return response;
          } catch (error) {
            // refreshToken 만료
            console.error(error);

            // 그대로 진행
            return NextResponse.next();
          }
        }
      }
    }
  }

  if (isProtectedPath) {
    if (!accessToken) {
      return redirectToLogin(request);
    }

    try {
      await verifyAuth(request);
      return NextResponse.next();
    } catch (error) {
      // accessToken 만료
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
        // refreshToken 만료
        console.error(error);

        return redirectToLogin(request);
      }
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: MATCHER_PATHS,
};
