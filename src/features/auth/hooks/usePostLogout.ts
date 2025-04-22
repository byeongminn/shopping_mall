"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostLogoutResponse, postLogout } from "@/features/auth/api/postLogout";
import { useLoginStore } from "@/shared/store/login";
import { getMeURL } from "@/shared/api/getMe";

export const usePostLogout = () => {
  const queryClient = useQueryClient();
  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLogoutResponse, Error, void>({
    mutationFn: postLogout,
    onSuccess: async () => {
      setIsLoggedIn(false);
      await queryClient.invalidateQueries({ queryKey: ["getMe", getMeURL] });
      window.location.assign("/login");
    },
  });
};
