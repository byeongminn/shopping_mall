"use client";

import { useState } from "react";
import { usePostLogin } from "@/features/auth/hooks/usePostLogin";
import { LoginForm } from "@/features/auth/components/Login/LoginForm";
import { PostLoginRequest } from "@/features/auth/api/postLogin";

export const Login = () => {
  const { mutate: login } = usePostLogin();

  const [email, setEmail] = useState<PostLoginRequest["email"]>("");
  const [password, setPassword] = useState<PostLoginRequest["password"]>("");

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
