import { type JWTPayload } from "jose";

export type PostLoginRequestDto = {
  email: string;
  password: string;
};

export type PostLoginResponseDto = {
  success: boolean;
};

export type PostLogoutResponseDto = {
  success: boolean;
};

export type GetMeResponseDto = {
  isLoggedIn: boolean;
  user?: JWTPayload;
};
