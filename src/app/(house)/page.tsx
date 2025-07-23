import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodListRequestDto } from "@/entities/goods/goods.types";
import { goodListInfiniteQueryOptions } from "@/features/goods/lib/goodListInfiniteQueryOptions";
import { GoodListPage } from "@/pages/goods/ui/GoodListPage";
import { getQueryClient } from "@/shared/lib/react-query";

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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GoodListPage order={order} />
    </HydrationBoundary>
  );
}
