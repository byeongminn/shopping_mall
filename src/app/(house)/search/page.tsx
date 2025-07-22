import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetSearchGoodListRequestDto } from "@/entities/goods/goods.types";
import { searchGoodListInfiniteQueryOptions } from "@/features/goods/lib/searchGoodListInfiniteQueryOptions";
import { FilterSection } from "@/widgets/goods/FilterSection";
import { SearchGoodListSection } from "@/widgets/goods/SearchGoodListSection";
import { getQueryClient } from "@/shared/lib/react-query";
import * as s from "@/app/(house)/search/style.css";

type Props = {
  searchParams: Promise<
    Partial<Pick<GetSearchGoodListRequestDto, "q" | "order">>
  >;
};

export default async function Search({ searchParams }: Props) {
  const { q = "", order = "recommended" } = await searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    searchGoodListInfiniteQueryOptions({ q, order })
  );

  return (
    <main>
      <div className={s.filterSection}>
        <FilterSection />
      </div>
      <section className={s.searchGoodsSection}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <SearchGoodListSection q={q} order={order} />
        </HydrationBoundary>
      </section>
    </main>
  );
}
