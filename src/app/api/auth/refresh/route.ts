import { type NextRequest, NextResponse } from "next/server";
import { reissueAccessToken } from "@/shared/lib/auth";
import { ACCESS_TOKEN } from "@/shared/lib/constants";

export const POST = async (request: NextRequest) => {
  try {
    const newAccessToken = await reissueAccessToken(request);

    const response = NextResponse.json({ success: true });

    response.cookies.set(ACCESS_TOKEN, newAccessToken, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 401 }
    );
  }
};
