import { AxiosError, AxiosRequestConfig } from "axios";
import { api } from "./instance";

export const handleError = async (error: AxiosError) => {
  const originalRequest = error.config as AxiosRequestConfig & {
    _retry: boolean;
  };

  if (!error.response) {
    alert("네트워크 오류가 발생했습니다.");
    return Promise.reject(error);
  }

  const isUnauthorized = error.response.status === 401;
  const isLoginRequest = originalRequest.url?.endsWith("/auth/login");

  if (isUnauthorized && !originalRequest._retry && !isLoginRequest) {
    originalRequest._retry = true;
    try {
      await api.post("/auth/refresh");
      window.location.reload();
      return api(originalRequest);
    } catch {
      window.location.href = "/login";
    }
  }

  return Promise.reject(error);
};
