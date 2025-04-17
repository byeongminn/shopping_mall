"use client";

import { useMutation } from "@tanstack/react-query";
import { PostLogoutResponse, postLogout } from "@/features/auth/api/postLogout";
import { useLoginStore } from "@/shared/store/login";

export const usePostLogout = () => {
  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLogoutResponse, Error, void>({
    mutationFn: postLogout,
    onSuccess: () => {
      setIsLoggedIn(false);
      window.location.assign("/login");
    },
  });
};
