"use client";

import { useState } from "react";
import { usePostLogin } from "@/features/auth/model/usePostLogin";
import { LoginForm } from "@/features/auth/components/Login/LoginForm";
import { PostLoginRequestDto } from "@/entities/auth/auth.types";

export const Login = () => {
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
    <LoginForm
      email={email}
      password={password}
      onChangeEmail={handleChangeEmail}
      onChangePassword={handleChangePassword}
      onLogin={handleSubmit}
    />
  );
};
