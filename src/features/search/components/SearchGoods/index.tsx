"use client";

import { useSearchParams } from "next/navigation";
import { useGetSearchGoods } from "@/features/search/hooks/useGetSearchGoods";
import { Order } from "@/features/main/api/getGoods";
import Empty from "@/features/search/components/SearchGoods/empty.svg";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { GoodsGrid } from "@/shared/components/GoodsGrid";
import * as s from "@/features/search/components/SearchGoods/style.css";

export const SearchGoods = () => {
  const searchParams = useSearchParams();
  const searchQuery = {
    q: searchParams?.get("q") ?? "",
    order: (searchParams?.get("order") ?? "recommended") as Order,
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchGoods(searchQuery.q, searchQuery.order);

  const flatData = data?.pages.map((page) => page.goods ?? []).flat();

  return (
    <>
      <div className={s.totalWrapper}>
        <h6 className={s.total}>
          전체{" "}
          {formatNumberWithCommas(data ? data?.pages?.[0]?.totalResults : 0)}
        </h6>
      </div>
      <GoodsGrid
        goods={flatData}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        emptyContent={
          <div className={s.emptyWrapper}>
            <Empty />
            <p>앗! 찾으시는 결과가 없네요.</p>
          </div>
        }
      />
    </>
  );
};
