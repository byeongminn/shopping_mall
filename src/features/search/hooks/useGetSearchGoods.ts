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

type Params = Pick<GetSearchGoodsRequestParams, "q" | "order">;

export const useGetSearchGoods = ({
  q,
  order,
}: Params): UseInfiniteQueryResult<
  InfiniteData<GetSearchGoodsResponse>,
  Error
> => useInfiniteQuery(searchGoodsInfiniteQueryOptions({ q, order }));
