import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { handleError } from "./errorHandler";
import { API_BASE_URL } from "@/shared/constants/client";

export const api: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => handleError(error)
);
