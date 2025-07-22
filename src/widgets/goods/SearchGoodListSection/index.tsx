"use client";

import { GetSearchGoodListRequestDto } from "@/entities/goods/goods.types";
import { useGetSearchGoodList } from "@/features/goods/model/useGetSearchGoodList";
import { EmptyIcon } from "@/features/goods/ui/Icon";
import { GoodList } from "@/features/goods/ui/GoodList";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "@/widgets/goods/SearchGoodListSection/style.css";

type Props = Pick<GetSearchGoodListRequestDto, "q" | "order">;

export const SearchGoodListSection = ({ q, order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchGoodList({ q, order });

  const flatData = data?.pages?.map((page) => page.goods ?? []).flat() ?? [];

  return (
    <>
      <div className={s.totalWrapper}>
        <h6 className={s.total}>
          전체 {formatNumberWithCommas(data?.pages?.[0]?.totalResults ?? 0)}
        </h6>
      </div>
      <GoodList
        goods={flatData}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        emptyContent={
          <div className={s.emptyWrapper}>
            <EmptyIcon />
            <p>앗! 찾으시는 결과가 없네요.</p>
          </div>
        }
      />
    </>
  );
};
