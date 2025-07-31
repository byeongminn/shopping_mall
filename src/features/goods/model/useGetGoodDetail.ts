import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  GetGoodDetailRequestDto,
  GetGoodDetailResponseDto,
} from "@/entities/goods/goods.types";
import { goodDetailQueryOptions } from "@/features/goods/lib/goodDetailQueryOptions";

type Params = Pick<GetGoodDetailRequestDto, "goodId">;

export const useGetGoodDetail = ({
  goodId,
}: Params): UseQueryResult<GetGoodDetailResponseDto, Error> =>
  useQuery(goodDetailQueryOptions({ goodId }));
