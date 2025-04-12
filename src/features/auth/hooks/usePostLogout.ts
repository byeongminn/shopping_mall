import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { PostLogoutResponse, postLogout } from "@/features/auth/api/postLogout";

export const usePostLogout = (
  options?: UseMutationOptions<PostLogoutResponse, Error, void, unknown>
) => {
  return useMutation<PostLogoutResponse, Error, void>({
    mutationFn: postLogout,
    ...options,
  });
};
