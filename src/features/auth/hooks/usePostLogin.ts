import { useMutation } from "@tanstack/react-query";
import {
  PostLoginRequest,
  PostLoginResponse,
  postLogin,
} from "@/features/auth/api/postLogin";

export const usePostLogin = () => {
  return useMutation<PostLoginResponse, Error, PostLoginRequest, unknown>({
    mutationFn: postLogin,
  });
};
