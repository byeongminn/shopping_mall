"use client";

import { useState } from "react";
import { PostLoginRequestDto } from "@/entities/auth/auth.types";
import { usePostLogin } from "@/features/auth/model/usePostLogin";
import { withAuth } from "@/features/auth/lib/withAuth";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import * as s from "./style.css";

const LoginPage = () => {
  const { mutate: login } = usePostLogin();

  const [email, setEmail] = useState<PostLoginRequestDto["email"]>("");
  const [password, setPassword] = useState<PostLoginRequestDto["password"]>("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <main>
      <section className={s.loginSection}>
        <LoginForm
          email={email}
          password={password}
          onChangeEmail={handleChangeEmail}
          onChangePassword={handleChangePassword}
          onLogin={handleSubmit}
        />
      </section>
    </main>
  );
};

export default withAuth(LoginPage, "guest-only");
