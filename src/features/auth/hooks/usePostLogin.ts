"use client";

import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  PostLoginRequest,
  PostLoginResponse,
  postLogin,
} from "@/features/auth/api/postLogin";
import { useLoginStore } from "@/shared/store/login";

export const usePostLogin = () => {
  const searchParams = useSearchParams();

  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLoginResponse, Error, PostLoginRequest, unknown>({
    mutationFn: postLogin,
    onSuccess: () => {
      setIsLoggedIn(true);
      window.location.assign(searchParams.get("redirect") || "/");
    },
  });
};
