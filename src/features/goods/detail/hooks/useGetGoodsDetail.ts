import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  GetGoodsDetailRequestParams,
  GetGoodsDetailResponse,
} from "@/features/goods/detail/api/getGoodsDetail";
import { goodDetailQueryOptions } from "@/features/goods/detail/queries/goodDetail";

export const useGetGoodsDetail = (
  goodId: GetGoodsDetailRequestParams["goodId"]
): UseQueryResult<GetGoodsDetailResponse, Error> =>
  useQuery(goodDetailQueryOptions(goodId));
