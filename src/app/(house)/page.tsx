import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodListRequestDto } from "@/entities/goods/goods.types";
import { goodListInfiniteQueryOptions } from "@/features/goods/lib/goodListInfiniteQueryOptions";
import { FilterSection } from "@/widgets/goods/FilterSection";
import { GoodListSection } from "@/widgets/goods/GoodListSection";
import { getQueryClient } from "@/shared/lib/react-query";
import * as s from "./style.css";

type Props = {
  searchParams: Promise<Partial<Pick<GetGoodListRequestDto, "order">>>;
};

export default async function Home({ searchParams }: Props) {
  const { order = "recommended" } = await searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    goodListInfiniteQueryOptions({ order })
  );

  return (
    <main>
      <div className={s.filterSection}>
        <FilterSection />
      </div>
      <section className={s.mainGoodsSection}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GoodListSection order={order} />
        </HydrationBoundary>
      </section>
    </main>
  );
}
