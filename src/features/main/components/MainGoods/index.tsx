"use client";

import { useGetGoods } from "@/features/main/hooks/useGetGoods";
import { GetGoodsRequestParams } from "@/features/main/api/getGoods";
import { GoodsGrid } from "@/shared/components/GoodsGrid";

type Props = Pick<GetGoodsRequestParams, "order">;

export const MainGoods = ({ order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetGoods({
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
