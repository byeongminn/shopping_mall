import { queryOptions } from "@tanstack/react-query";
import { GetGoodDetailRequestDto } from "@/entities/goods/goods.types";
import { getGoodDetail } from "@/entities/goods/goods.api";

type Params = Pick<GetGoodDetailRequestDto, "goodId">;

export const goodDetailQueryOptions = ({ goodId }: Params) =>
  queryOptions({
    queryKey: ["goodDetail", goodId],
    queryFn: async () => await getGoodDetail(goodId),
  });
