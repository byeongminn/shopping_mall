import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetGoodListRequestDto,
  GetGoodListResponseDto,
} from "@/entities/goods/goods.types";
import { goodListInfiniteQueryOptions } from "@/features/goods/lib/goodListInfiniteQueryOptions";

type Params = Pick<GetGoodListRequestDto, "order">;

export const useGetGoodList = ({
  order,
}: Params): UseInfiniteQueryResult<
  InfiniteData<GetGoodListResponseDto>,
  Error
> => useInfiniteQuery(goodListInfiniteQueryOptions({ order }));
