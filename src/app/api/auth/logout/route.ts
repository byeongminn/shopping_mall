import { NextResponse } from "next/server";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/shared/constants/client";

export const POST = async () => {
  const response = NextResponse.json({ success: true });

  response.cookies.set(ACCESS_TOKEN, "", { path: "/", maxAge: 0 });
  response.cookies.set(REFRESH_TOKEN, "", { path: "/", maxAge: 0 });

  return response;
};
