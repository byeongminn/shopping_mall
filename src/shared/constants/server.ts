const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length === 0) {
  throw new Error("JWT_SECRET 환경변수가 설정되지 않았습니다.");
}

export const SECRET = new TextEncoder().encode(JWT_SECRET);
