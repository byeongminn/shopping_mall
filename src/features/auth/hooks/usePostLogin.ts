import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import {
  PostLoginRequest,
  PostLoginResponse,
  postLogin,
} from "@/features/auth/api/postLogin";

export const usePostLogin = (
  options?: UseMutationOptions<
    PostLoginResponse,
    Error,
    PostLoginRequest,
    unknown
  >
) => {
  return useMutation<PostLoginResponse, Error, PostLoginRequest, unknown>({
    mutationFn: postLogin,
    ...options,
  });
};
