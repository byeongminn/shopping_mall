"use client";

import { useSearchParams } from "next/navigation";
import { useGetSearchGoods } from "../../hooks/useGetSearchGoods";
import { Order } from "@/features/main/api/getGoods";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import { GoodItem } from "@/features/main/components/MainGoods/GoodItem";
import Empty from "./empty.svg";
import * as s from "./style.css";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

export const SearchGoods = () => {
  const searchParams = useSearchParams();
  const searchQuery = {
    q: searchParams?.get("q") ?? "",
    order: (searchParams?.get("order") ?? "recommended") as Order,
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchGoods(searchQuery);

  const flatData = data.pages.map((page) => page.goods ?? []).flat();

  return (
    <>
      <div className={s.totalWrapper}>
        <h6 className={s.total}>
          전체 {formatNumberWithCommas(data?.pages?.[0]?.totalResults)}
        </h6>
      </div>
      <div className={s.dataWrapper({ isEmpty: !(flatData.length > 0) })}>
        {flatData.length > 0 ? (
          flatData.map((data) => <GoodItem key={data?.id} good={data} />)
        ) : (
          <div className={s.emptyWrapper}>
            <Empty />
            <p>앗! 찾으시는 결과가 없네요.</p>
          </div>
        )}
      </div>
      {hasNextPage && !isFetchingNextPage && (
        <VisibilityLoader
          callback={() => !isFetchingNextPage && fetchNextPage()}
        />
      )}
    </>
  );
};
