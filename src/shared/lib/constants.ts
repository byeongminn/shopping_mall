const JWT_SECRET: string | undefined = process.env.JWT_SECRET!;

export const getJwtSecret = () => {
  if (!JWT_SECRET || JWT_SECRET.length === 0) {
    throw new Error("JWT_SECRET 환경변수가 설정되지 않았습니다.");
  }

  return JWT_SECRET;
};

export const SECRET = new TextEncoder().encode(getJwtSecret());

export const ACCESS_TOKEN = "accessToken";

export const REFRESH_TOKEN = "refreshToken";
