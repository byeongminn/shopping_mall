import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import {
  PostLoginRequestDto,
  PostLoginResponseDto,
  PostLogoutResponseDto,
} from "./auth.types";

const AUTH_API_URL = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
};

export const postLogin = async (
  payload: PostLoginRequestDto
): Promise<PostLoginResponseDto> => {
  const { data } = await api.post(AUTH_API_URL.LOGIN, payload);
  return data;
};

export const postLogout = async (): Promise<PostLogoutResponseDto> => {
  const { data } = await api.post(AUTH_API_URL.LOGOUT);
  return data;
};
