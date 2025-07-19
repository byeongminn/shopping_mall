"use client";

import { GetGoodListRequestDto } from "@/entities/goods/goods.types";
import { useGetGoodList } from "@/features/goods/model/useGetGoodList";
import { GoodsGrid } from "@/shared/components/GoodsGrid";

type Props = Pick<GetGoodListRequestDto, "order">;

export const MainGoods = ({ order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoodList({
      order,
    });

  const flatData = data?.pages.map((page) => page.goods ?? []).flat();

  return (
    <GoodsGrid
      goods={flatData}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};
