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
