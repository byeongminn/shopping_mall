import { NextResponse } from "next/server";
import { reissueAccessToken } from "@/shared/lib/auth";
import { ACCESS_TOKEN } from "@/shared/lib/constants";

export const POST = async () => {
  try {
    const newAccessToken = await reissueAccessToken();

    const response = NextResponse.json({ success: true });

    response.cookies.set(ACCESS_TOKEN, newAccessToken, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    // refreshToken 값이 존재하지 않습니다.
    // refreshToken 값이 만료되었습니다.
    console.error((error as Error).message);

    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 401 }
    );
  }
};
