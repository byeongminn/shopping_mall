"use client";

import { useGetSearchGoods } from "@/features/search/hooks/useGetSearchGoods";
import { GetSearchGoodsRequestParams } from "@/features/search/api/getSearchGoods";
import Empty from "@/features/search/components/SearchGoods/empty.svg";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { GoodList } from "@/features/goods/ui/GoodList";
import * as s from "@/features/search/components/SearchGoods/style.css";

type Props = Pick<GetSearchGoodsRequestParams, "q" | "order">;

export const SearchGoods = ({ q, order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchGoods({ q, order });

  const flatData = data?.pages.map((page) => page.goods ?? []).flat();

  return (
    <>
      <div className={s.totalWrapper}>
        <h6 className={s.total}>
          전체{" "}
          {formatNumberWithCommas(data ? data?.pages?.[0]?.totalResults : 0)}
        </h6>
      </div>
      <GoodList
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
