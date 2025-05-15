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

type Params = Pick<GetGoodsRequestParams, "order">;

export const useGetGoods = ({
  order,
}: Params): UseInfiniteQueryResult<InfiniteData<GetGoodsResponse>, Error> =>
  useInfiniteQuery(goodsInfiniteQueryOptions({ order }));
