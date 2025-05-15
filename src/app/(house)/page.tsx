import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { goodsInfiniteQueryOptions } from "@/features/main/queries/goods";
import { GetGoodsRequestParams } from "@/features/main/api/getGoods";
import { Filters } from "@/features/main/components/Filters";
import { MainGoods } from "@/features/main/components/MainGoods";
import { getQueryClient } from "@/shared/lib/react-query";
import * as s from "@/app/(house)/style.css";

type Props = {
  searchParams: Promise<Partial<Pick<GetGoodsRequestParams, "order">>>;
};

export default async function Home({ searchParams }: Props) {
  const { order = "recommended" } = await searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(goodsInfiniteQueryOptions({ order }));

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
      <section className={s.mainGoodsSection}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MainGoods order={order} />
        </HydrationBoundary>
      </section>
    </main>
  );
}
