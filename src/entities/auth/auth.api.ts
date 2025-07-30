import { request } from "@/shared/lib/axios/request";
import {
  PostLoginRequestDto,
  PostLoginResponseDto,
  PostLogoutResponseDto,
} from "./auth.types";

const AUTH_API_URL = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
};

export const postLogin = (
  payload: PostLoginRequestDto
): Promise<PostLoginResponseDto> => {
  return request.post(AUTH_API_URL.LOGIN, payload);
};

export const postLogout = (): Promise<PostLogoutResponseDto> => {
  return request.post(AUTH_API_URL.LOGOUT);
};
