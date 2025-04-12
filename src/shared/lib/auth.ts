import type { NextRequest } from "next/server";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { ACCESS_TOKEN, REFRESH_TOKEN, SECRET } from "@/shared/lib/constants";

export const signToken = async (payload: JWTPayload, expiresIn: string) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(SECRET);
};

export const verifyAuth = async (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  if (!accessToken) throw new Error("accessToken 값이 존재하지 않습니다.");

  try {
    const verified = await jwtVerify(accessToken, SECRET);

    return verified.payload;
  } catch {
    throw new Error("accessToken 값이 만료되었습니다.");
  }
};

export const reissueAccessToken = async (request: NextRequest) => {
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

  if (!refreshToken) throw new Error("refreshToken 값이 존재하지 않습니다.");

  try {
    const { payload } = await jwtVerify(refreshToken, SECRET);

    return await signToken({ email: payload.email }, "15m");
  } catch {
    throw new Error("refreshToken 값이 만료되었습니다.");
  }
};
