import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  GetGoodsDetailRequestParams,
  GetGoodsDetailResponse,
} from "@/features/goods/detail/api/getGoodsDetail";
import { goodDetailQueryOptions } from "@/features/goods/detail/queries/goodDetail";

type Params = Pick<GetGoodsDetailRequestParams, "goodId">;

export const useGetGoodsDetail = ({
  goodId,
}: Params): UseQueryResult<GetGoodsDetailResponse, Error> =>
  useQuery(goodDetailQueryOptions({ goodId }));
