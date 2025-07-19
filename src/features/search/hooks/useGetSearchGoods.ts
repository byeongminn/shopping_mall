import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetSearchGoodListRequestDto,
  GetSearchGoodListResponseDto,
} from "@/entities/goods/goods.types";
import { searchGoodsInfiniteQueryOptions } from "@/features/search/queries/searchGoods";

type Params = Pick<GetSearchGoodListRequestDto, "q" | "order">;

export const useGetSearchGoods = ({
  q,
  order,
}: Params): UseInfiniteQueryResult<
  InfiniteData<GetSearchGoodListResponseDto>,
  Error
> => useInfiniteQuery(searchGoodsInfiniteQueryOptions({ q, order }));
