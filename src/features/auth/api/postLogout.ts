import { API_BASE_URL } from "@/shared/api/constants";
import { api } from "@/shared/lib/axios";

export type PostLogoutResponse = {
  success: boolean;
};

const postLogoutURL = `${API_BASE_URL}/api/auth/logout`;

export const postLogout = async (): Promise<PostLogoutResponse> => {
  const { data } = await api.post(postLogoutURL);

  return data;
};
