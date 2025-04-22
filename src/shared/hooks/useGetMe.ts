import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { GetMeResponse, getMe, getMeURL } from "@/shared/api/getMe";

export const useGetMe = (): UseSuspenseQueryResult<GetMeResponse, Error> => {
  return useSuspenseQuery({
    queryKey: ["getMe", getMeURL],
    queryFn: async () => getMe(),
  });
};
