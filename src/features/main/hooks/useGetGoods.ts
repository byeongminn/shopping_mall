import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetGoodListRequestDto,
  GetGoodListResponseDto,
} from "@/entities/goods/goods.types";
import { goodsInfiniteQueryOptions } from "@/features/main/queries/goods";

type Params = Pick<GetGoodListRequestDto, "order">;

export const useGetGoods = ({
  order,
}: Params): UseInfiniteQueryResult<
  InfiniteData<GetGoodListResponseDto>,
  Error
> => useInfiniteQuery(goodsInfiniteQueryOptions({ order }));
