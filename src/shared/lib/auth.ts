import { JWTPayload, SignJWT } from "jose";
import { SECRET } from "@/shared/lib/constants";

export const signToken = async (payload: JWTPayload, expiresIn: string) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(SECRET);
};
