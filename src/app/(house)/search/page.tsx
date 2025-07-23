import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetSearchGoodListRequestDto } from "@/entities/goods/goods.types";
import { searchGoodListInfiniteQueryOptions } from "@/features/goods/lib/searchGoodListInfiniteQueryOptions";
import { SearchGoodListPage } from "@/views/goods/ui/SearchGoodListPage";
import { getQueryClient } from "@/shared/lib/react-query";

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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchGoodListPage q={q} order={order} />
    </HydrationBoundary>
  );
}
