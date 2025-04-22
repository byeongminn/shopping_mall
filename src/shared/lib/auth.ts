import { cookies } from "next/headers";
import { type JWTPayload, SignJWT, jwtVerify } from "jose";
import { REFRESH_TOKEN, SECRET } from "@/shared/lib/constants";

export const signToken = async (payload: JWTPayload, expiresIn: string) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(SECRET);
};

export const verifyJwt = async (name: string, token: string) => {
  try {
    const { payload } = await jwtVerify(token, SECRET);

    return payload;
  } catch {
    throw new Error(`${name} 값이 만료되었습니다.`);
  }
};

export const reissueAccessToken = async () => {
  const refreshToken = (await cookies()).get(REFRESH_TOKEN)?.value;

  if (!refreshToken)
    throw new Error(`${REFRESH_TOKEN} 값이 존재하지 않습니다.`);

  const payload = await verifyJwt(REFRESH_TOKEN, refreshToken);

  return await signToken({ email: payload.email }, "15m");
};
