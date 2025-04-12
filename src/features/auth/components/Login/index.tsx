"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { usePostLogin } from "@/features/auth/hooks/usePostLogin";
import { LoginForm } from "@/features/auth/components/Login/LoginForm";
import { PostLoginRequest } from "@/features/auth/api/postLogin";
import { useLoginStore } from "@/shared/store/login";

export const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { setIsLoggedIn } = useLoginStore();

  const { mutate: login } = usePostLogin({
    onSuccess: () => {
      setIsLoggedIn(true);
      router.push(searchParams.get("redirect") || "/");
    },
  });

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
