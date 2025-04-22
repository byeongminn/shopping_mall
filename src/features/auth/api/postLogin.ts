import { api } from "@/shared/lib/axios";
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
  const { data } = await api.post(postLoginURL, payload);

  return data;
};
