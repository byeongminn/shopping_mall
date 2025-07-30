"use client";

import { useMutation } from "@tanstack/react-query";
import { PostLogoutResponseDto } from "@/entities/auth/auth.types";
import { postLogout } from "@/entities/auth/auth.api";
import { useLoginStore } from "@/features/auth/model/useLoginStore";

export const usePostLogout = () => {
  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLogoutResponseDto, Error, void>({
    mutationFn: postLogout,
    onSuccess: async () => {
      setIsLoggedIn(false);
      window.location.assign("/login");
    },
  });
};
