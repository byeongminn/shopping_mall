import { cookies } from "next/headers";
import { ACCESS_TOKEN } from "@/shared/lib/constants";
import { reissueAccessToken, verifyJwt } from "@/shared/lib/auth";

export const getSession = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  if (!accessToken) throw new Error(`${ACCESS_TOKEN} 값이 존재하지 않습니다.`);

  try {
    const payload = await verifyJwt(ACCESS_TOKEN, accessToken);

    return payload ? { user: payload } : null;
  } catch (error) {
    // accessToken 값이 만료되었습니다.
    console.error((error as Error).message);

    try {
      const newAccessToken = await reissueAccessToken();

      const payload = await verifyJwt(ACCESS_TOKEN, newAccessToken);

      return payload ? { user: payload, newAccessToken } : null;
    } catch (error) {
      // refreshToken 값이 존재하지 않습니다.
      // refreshToken 값이 만료되었습니다.
      console.error((error as Error).message);

      return null;
    }
  }
};
