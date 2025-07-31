import { cookies } from "next/headers";
import { type JWTPayload, SignJWT, jwtVerify } from "jose";
import { REFRESH_TOKEN } from "@/shared/constants/client";
import { SECRET } from "@/shared/constants/server";

export const signToken = async (payload: JWTPayload, expiresIn: string) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(SECRET);
};

export const verifyJwt = async (
  token: string | undefined = "",
  name: string
) => {
  try {
    const { payload } = await jwtVerify(token, SECRET);

    return payload;
  } catch {
    console.log(`${name}이 만료되었거나 유효하지 않는 토큰입니다.`);
  }
};

export const reissueAccessToken = async () => {
  const refreshToken = (await cookies()).get(REFRESH_TOKEN)?.value;

  if (!refreshToken) return null;

  const payload = await verifyJwt(refreshToken, REFRESH_TOKEN);

  if (!payload || !payload.email) return null;

  return await signToken({ email: payload.email }, "15m");
};
