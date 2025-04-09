"use client";

import { postLogin } from "@/features/auth/api/postLogin";

export const Login = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postLogin({ email: "test@example.com", password: "1234" });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </section>
  );
};
