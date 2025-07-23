"use client";

import { GetGoodListRequestDto } from "@/entities/goods/goods.types";
import { useGetGoodList } from "@/features/goods/model/useGetGoodList";
import { GoodList } from "@/features/goods/ui/GoodList";
import { FilterSection } from "@/widgets/goods/FilterSection";
import * as s from "./style.css";

type Props = Pick<GetGoodListRequestDto, "order">;

export const GoodListPage = ({ order }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoodList({
      order,
    });

  const flatData = data?.pages.map((page) => page.goods ?? []).flat();

  return (
    <main>
      <div className={s.filterSection}>
        <FilterSection />
      </div>
      <section className={s.goodListSection}>
        <GoodList
          goods={flatData}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      </section>
    </main>
  );
};
