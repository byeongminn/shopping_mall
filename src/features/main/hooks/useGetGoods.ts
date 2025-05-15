import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetGoodsRequestParams,
  GetGoodsResponse,
} from "@/features/main/api/getGoods";
import { goodsInfiniteQueryOptions } from "@/features/main/queries/goods";

export const useGetGoods = (
  order: GetGoodsRequestParams["order"] = "recommended"
): UseInfiniteQueryResult<InfiniteData<GetGoodsResponse>, Error> =>
  useInfiniteQuery(goodsInfiniteQueryOptions(order));
