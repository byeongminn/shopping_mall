import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { GetMeResponseDto } from "@/entities/auth/auth.types";
import { getMe } from "@/entities/auth/auth.api";

export const useGetMe = (): UseSuspenseQueryResult<GetMeResponseDto, Error> => {
  return useSuspenseQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
  });
};
