"use client";

import { GetGoodListRequestDto } from "@/entities/goods/goods.types";
import { useGetGoodList } from "@/features/goods/model/useGetGoodList";
import { GoodList } from "@/features/goods/ui/GoodList";

type Props = Pick<GetGoodListRequestDto, "order">;

export const GoodListSection = ({ order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoodList({
      order,
    });

  const flatData = data?.pages.map((page) => page.goods ?? []).flat();

  return (
    <GoodList
      goods={flatData}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};
