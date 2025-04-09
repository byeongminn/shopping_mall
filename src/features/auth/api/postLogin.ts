import { API_BASE_URL } from "@/shared/api/constants";

export type PostLoginRequest = {
  email: string;
  password: string;
};

export type PostLoginResponse = {
  success: boolean;
};

const postLoginURL = `${API_BASE_URL}/api/auth/login`;

export const postLogin = async (
  payload: PostLoginRequest
): Promise<PostLoginResponse> => {
  const response = await fetch(postLoginURL, {
    method: "post",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};
