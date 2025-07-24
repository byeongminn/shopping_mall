import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { handleError } from "./errorHandler";
import { ENV } from "@/shared/config/env";

export const api: AxiosInstance = axios.create({
  baseURL: `${ENV.BASE_URL}/api`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => handleError(error)
);
