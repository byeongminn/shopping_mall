import { NextResponse } from "next/server";
import { getSession } from "@/shared/lib/session";
import { ACCESS_TOKEN } from "@/shared/lib/constants";

export const GET = async () => {
  try {
    const session = await getSession();

    if (!session) return NextResponse.json({ isLoggedIn: false });

    const response = NextResponse.json({
      isLoggedIn: true,
      user: session.user,
    });

    if (session.newAccessToken) {
      response.cookies.set(ACCESS_TOKEN, session.newAccessToken, {
        httpOnly: true,
        path: "/",
      });
    }

    return response;
  } catch (error) {
    // accessToken 값이 존재하지 않습니다.
    console.error((error as Error).message);

    return NextResponse.json({ isLoggedIn: false });
  }
};
