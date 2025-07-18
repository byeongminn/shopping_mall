"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostLogoutResponseDto } from "@/entities/auth/auth.types";
import { postLogout } from "@/entities/auth/auth.api";
import { useLoginStore } from "@/features/auth/model/useLoginStore";

export const usePostLogout = () => {
  const queryClient = useQueryClient();
  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLogoutResponseDto, Error, void>({
    mutationFn: postLogout,
    onSuccess: async () => {
      setIsLoggedIn(false);
      await queryClient.refetchQueries({ queryKey: ["getMe"] });
      window.location.assign("/login");
    },
  });
};
