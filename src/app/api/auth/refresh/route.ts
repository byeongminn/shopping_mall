import { NextResponse } from "next/server";
import { reissueAccessToken } from "@/shared/server/auth";
import { ACCESS_TOKEN } from "@/shared/constants/client";

export const POST = async () => {
  const newAccessToken = await reissueAccessToken();

  if (!newAccessToken) {
    return NextResponse.json(
      { success: false, message: "access token 재발급에 실패했습니다." },
      { status: 200 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set(ACCESS_TOKEN, newAccessToken, {
    httpOnly: true,
    path: "/",
  });

  return response;
};
