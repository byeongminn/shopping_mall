import { cookies } from "next/headers";
import { verifyJwt } from "@/shared/server/auth";
import { ACCESS_TOKEN } from "@/shared/constants/client";

export const getSession = async () => {
  const accessToken = (await cookies()).get(ACCESS_TOKEN)?.value;

  if (!accessToken) return null;

  try {
    const payload = await verifyJwt(ACCESS_TOKEN, accessToken);
    return payload ? { user: payload } : null;
  } catch {
    return null;
  }
};
