import { ENV } from "@/shared/config/env";

// endpoint
export const API_BASE_URL = `${ENV.BASE_URL}`;

// token
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";

// mock
export const isMocking = () => ENV.MOCKING === "true";

// path
export const IMAGE_URL = "/images";
