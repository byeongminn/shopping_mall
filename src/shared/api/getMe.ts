import { type JWTPayload } from "jose";
import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";

export type GetMeResponse = {
  isLoggedIn: boolean;
  user?: JWTPayload;
};

export const getMeURL = `${API_BASE_URL}/api/auth/me`;

export const getMe = async (): Promise<GetMeResponse> => {
  const { data } = await api.get(getMeURL);

  return data;
};
