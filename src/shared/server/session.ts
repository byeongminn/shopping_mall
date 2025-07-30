import { cookies } from "next/headers";
import { reissueAccessToken, verifyJwt } from "@/shared/server/auth";
import { ACCESS_TOKEN } from "@/shared/constants/client";

export const getSession = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  if (!accessToken) return null;

  try {
    const payload = await verifyJwt(ACCESS_TOKEN, accessToken);

    return payload ? { user: payload } : null;
  } catch {
    try {
      const newAccessToken = await reissueAccessToken();

      const payload = await verifyJwt(ACCESS_TOKEN, newAccessToken);

      return payload ? { user: payload, newAccessToken } : null;
    } catch (error) {
      // refreshToken 값이 존재하지 않습니다.
      // refreshToken 값이 만료되었습니다.
      console.warn((error as Error).message);

      return null;
    }
  }
};
