"use client";

import { GetSearchGoodListRequestDto } from "@/entities/goods/goods.types";
import { useGetSearchGoodList } from "@/features/goods/model/useGetSearchGoodList";
import { GoodList } from "@/features/goods/ui/GoodList";
import { EmptyIcon } from "@/shared/ui/Icon";
import { FilterSection } from "@/widgets/goods/FilterSection";
import { formatNumberWithCommas } from "@/shared/utils/format";
import * as s from "./style.css";

type Props = Pick<GetSearchGoodListRequestDto, "q" | "order">;

export const SearchGoodListPage = ({ q, order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchGoodList({ q, order });

  const flatData = data?.pages?.map((page) => page.goods ?? []).flat() ?? [];
  const totalResults = data?.pages?.[0]?.totalResults ?? 0;

  return (
    <main>
      <div className={s.filterSection}>
        <FilterSection />
      </div>
      <section className={s.searchGoodListSection}>
        <div className={s.totalWrapper}>
          <h6 className={s.total}>
            전체 {formatNumberWithCommas(totalResults)}
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
      </section>
    </main>
  );
};
