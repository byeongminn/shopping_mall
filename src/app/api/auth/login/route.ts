import { NextResponse, type NextRequest } from "next/server";
import { signToken } from "@/shared/lib/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/shared/lib/constants";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();

    if (email === "test@example.com" && password === "1234") {
      const response = NextResponse.json({ success: true });

      const accessToken = await signToken({ email }, "15m");

      const refreshToken = await signToken({ email }, "1h");

      response.cookies.set(ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        path: "/",
      });

      response.cookies.set(REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        path: "/",
      });

      return response;
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 401 }
    );
  }
};
