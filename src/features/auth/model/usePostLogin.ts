"use client";

import { useSearchParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  PostLoginRequestDto,
  PostLoginResponseDto,
} from "@/entities/auth/auth.types";
import { postLogin } from "@/entities/auth/auth.api";
import { useLoginStore } from "@/features/auth/model/useLoginStore";
import { getMeURL } from "@/shared/api/getMe";

export const usePostLogin = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const { setIsLoggedIn } = useLoginStore();

  return useMutation<PostLoginResponseDto, Error, PostLoginRequestDto, unknown>(
    {
      mutationFn: postLogin,
      onSuccess: async () => {
        setIsLoggedIn(true);
        await queryClient.refetchQueries({ queryKey: ["getMe", getMeURL] });
        window.location.assign(searchParams.get("redirect") || "/");
      },
    }
  );
};
