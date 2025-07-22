import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetSearchGoodListRequestDto,
  GetSearchGoodListResponseDto,
} from "@/entities/goods/goods.types";
import { searchGoodListInfiniteQueryOptions } from "@/features/goods/lib/searchGoodListInfiniteQueryOptions";

type Params = Pick<GetSearchGoodListRequestDto, "q" | "order">;

export const useGetSearchGoodList = ({
  q,
  order,
}: Params): UseInfiniteQueryResult<
  InfiniteData<GetSearchGoodListResponseDto>,
  Error
> => useInfiniteQuery(searchGoodListInfiniteQueryOptions({ q, order }));
