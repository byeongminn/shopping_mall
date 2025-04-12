import { NextResponse, type NextRequest } from "next/server";
import { verifyAuth } from "@/shared/lib/auth";

export const GET = async (request: NextRequest) => {
  try {
    const { email } = await verifyAuth(request);

    return NextResponse.json({ isLoggedIn: true, email: email });
  } catch (error) {
    // accessToken 값이 존재하지 않습니다.
    // accessToken 값이 만료되었습니다.
    console.error(error);

    return NextResponse.json({ isLoggedIn: false });
  }
};
