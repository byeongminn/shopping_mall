import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import {
  GetMeResponseDto,
  PostLoginRequestDto,
  PostLoginResponseDto,
  PostLogoutResponseDto,
} from "./auth.types";

const AUTH_API_URL = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  ME: `${API_BASE_URL}/api/auth/me`,
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

export const getMe = async (): Promise<GetMeResponseDto> => {
  const { data } = await api.get(AUTH_API_URL.ME);
  return data;
};
