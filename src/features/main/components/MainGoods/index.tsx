"use client";

import { useSearchParams } from "next/navigation";
import { useGetGoods } from "@/features/main/hooks/useGetGoods";
import { Order } from "@/features/main/api/getGoods";
import { GoodsGrid } from "@/shared/components/GoodsGrid";

export const MainGoods = () => {
  const searchParams = useSearchParams();
  const order = (searchParams?.get("order") ?? "recommended") as Order;
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoods(order);

  const flatData = data.pages.map((page) => page.goods ?? []).flat();

  return (
    <GoodsGrid
      goods={flatData}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};
