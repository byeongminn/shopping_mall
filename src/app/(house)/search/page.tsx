import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { searchGoodsInfiniteQueryOptions } from "@/features/search/queries/searchGoods";
import { Order } from "@/features/main/api/getGoods";
import { Filters } from "@/features/main/components/Filters";
import { SearchGoods } from "@/features/search/components/SearchGoods";
import { getQueryClient } from "@/shared/lib/react-query";
import * as s from "@/app/(house)/search/style.css";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; order?: Order }>;
}) {
  const { q, order } = await searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    searchGoodsInfiniteQueryOptions(q, order)
  );

  return (
    <main>
      <div
        style={{
          position: "fixed",
          top: 81,
          left: 0,
          zIndex: 8000,
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <Filters />
      </div>
      <section className={s.searchGoodsSection}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <SearchGoods />
        </HydrationBoundary>
      </section>
    </main>
  );
}
