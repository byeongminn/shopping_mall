"use client";

import { useSearchParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  PostLoginRequest,
  PostLoginResponse,
  postLogin,
} from "@/features/auth/api/postLogin";
import { useLoginStore } from "@/shared/store/login";
import { getMeURL } from "@/shared/api/getMe";

export const usePostLogin = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLoginResponse, Error, PostLoginRequest, unknown>({
    mutationFn: postLogin,
    onSuccess: async () => {
      setIsLoggedIn(true);
      await queryClient.invalidateQueries({ queryKey: ["getMe", getMeURL] });
      window.location.assign(searchParams.get("redirect") || "/");
    },
  });
};
