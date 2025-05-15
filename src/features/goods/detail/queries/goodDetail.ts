import { queryOptions } from "@tanstack/react-query";
import {
  GetGoodsDetailRequestParams,
  getGoodsDetail,
} from "@/features/goods/detail/api/getGoodsDetail";

type Params = Pick<GetGoodsDetailRequestParams, "goodId">;

export const goodDetailQueryOptions = ({ goodId }: Params) =>
  queryOptions({
    queryKey: ["goodDetail", goodId],
    queryFn: async () => await getGoodsDetail(goodId),
  });
