"use client";

import { usePostLogin } from "@/features/auth/hooks/usePostLogin";

export const Login = () => {
  const { mutate: login } = usePostLogin();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email: "test@example.com", password: "1234" });
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
