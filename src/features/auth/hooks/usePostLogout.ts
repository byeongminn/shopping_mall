"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostLogoutResponseDto } from "@/entities/auth/auth.types";
import { postLogout } from "@/entities/auth/auth.api";
import { useLoginStore } from "@/shared/store/login";
import { getMeURL } from "@/shared/api/getMe";

export const usePostLogout = () => {
  const queryClient = useQueryClient();
  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLogoutResponseDto, Error, void>({
    mutationFn: postLogout,
    onSuccess: async () => {
      setIsLoggedIn(false);
      await queryClient.refetchQueries({ queryKey: ["getMe", getMeURL] });
      window.location.assign("/login");
    },
  });
};
