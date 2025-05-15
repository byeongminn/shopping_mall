import { queryOptions } from "@tanstack/react-query";
import {
  GetGoodsDetailRequestParams,
  getGoodsDetail,
} from "@/features/goods/detail/api/getGoodsDetail";

export const goodDetailQueryOptions = (
  goodId: GetGoodsDetailRequestParams["goodId"]
) =>
  queryOptions({
    queryKey: ["goodDetail", goodId],
    queryFn: async () => await getGoodsDetail(goodId),
  });
