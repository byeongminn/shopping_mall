import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetGoodsDetailRequestParams,
  GetGoodsDetailResponse,
  GetGoodsDetailURL,
  getGoodsDetail,
} from "../api/getGoodsDetail";

type Params = GetGoodsDetailRequestParams;

export const useGetGoodsDetail = (
  params: Params
): UseSuspenseQueryResult<GetGoodsDetailResponse, Error> => {
  return useSuspenseQuery({
    queryKey: ["goodsDetail", GetGoodsDetailURL, params.goodId],
    queryFn: async () => await getGoodsDetail(params),
  });
};
