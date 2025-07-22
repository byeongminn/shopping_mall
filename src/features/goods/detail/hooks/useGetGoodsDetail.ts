import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  GetGoodDetailRequestDto,
  GetGoodDetailResponseDto,
} from "@/entities/goods/goods.types";
import { goodDetailQueryOptions } from "@/features/goods/detail/queries/goodDetail";

type Params = Pick<GetGoodDetailRequestDto, "goodId">;

export const useGetGoodsDetail = ({
  goodId,
}: Params): UseQueryResult<GetGoodDetailResponseDto, Error> =>
  useQuery(goodDetailQueryOptions({ goodId }));
