import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetSearchGoodsRequestParams,
  GetSearchGoodsResponse,
} from "@/features/search/api/getSearchGoods";
import { searchGoodsInfiniteQueryOptions } from "@/features/search/queries/searchGoods";

export const useGetSearchGoods = (
  q: GetSearchGoodsRequestParams["q"] = "",
  order: GetSearchGoodsRequestParams["order"] = "recommended"
): UseInfiniteQueryResult<InfiniteData<GetSearchGoodsResponse>, Error> =>
  useInfiniteQuery(searchGoodsInfiniteQueryOptions(q, order));
