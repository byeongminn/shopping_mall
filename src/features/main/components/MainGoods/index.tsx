"use client";

import { useGetGoods } from "@/features/main/hooks/useGetGoods";
import { Order } from "@/features/main/api/getGoods";
import { GoodsGrid } from "@/shared/components/GoodsGrid";

type MainGoodsProps = {
  order: Order;
};

export const MainGoods = ({ order }: MainGoodsProps) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoods(order);

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
