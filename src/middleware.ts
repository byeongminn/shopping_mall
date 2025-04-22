import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { signToken } from "@/shared/lib/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN, SECRET } from "@/shared/lib/constants";

// 로그인 페이지로 리다이렉트
const redirectToLogin = (request: NextRequest) => {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
};

// 액세스 토큰 검증
const verifyJwt = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  if (!accessToken) throw new Error("accessToken 값이 존재하지 않습니다.");

  try {
    const verified = await jwtVerify(accessToken, SECRET);

    return verified.payload;
  } catch {
    throw new Error("accessToken 값이 만료되었습니다.");
  }
};

// 리프레시 토큰으로 액세스 토큰 재발급
const reissueAccessToken = async (request: NextRequest) => {
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

  if (!refreshToken) throw new Error("refreshToken 값이 존재하지 않습니다.");

  try {
    const { payload } = await jwtVerify(refreshToken, SECRET);

    return await signToken({ email: payload.email }, "15m");
  } catch {
    throw new Error("refreshToken 값이 만료되었습니다.");
  }
};

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

  const isGuestPath = GUEST_PATHS.includes(request.nextUrl.pathname);
  const isProtectedPath = PROTECTED_PATHS.includes(request.nextUrl.pathname);

  if (isGuestPath) {
    if (accessToken) {
      try {
        await verifyJwt(request);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
        // accessToken 만료
        console.error((error as Error).message);

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
            console.error((error as Error).message);

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
      await verifyJwt(request);
      return NextResponse.next();
    } catch (error) {
      // accessToken 만료
      console.error((error as Error).message);

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
        console.error((error as Error).message);

        return redirectToLogin(request);
      }
    }
  }

  return NextResponse.next();
};

const GUEST_PATHS = ["/login"];

const PROTECTED_PATHS = ["/cart"];

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
