import { infiniteQueryOptions } from "@tanstack/react-query";
import { GetSearchGoodListRequestDto } from "@/entities/goods/goods.types";
import { getSearchGoodList } from "@/entities/goods/goods.api";

type Params = Pick<GetSearchGoodListRequestDto, "q" | "order">;

export const searchGoodListInfiniteQueryOptions = ({ q, order }: Params) =>
  infiniteQueryOptions({
    queryKey: ["search", q, order],
    queryFn: async ({ pageParam }) =>
      await getSearchGoodList({ q, order, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const loadedCount = pages.flatMap((page) => page.goods).length;
      const totalResults = lastPage.totalResults;

      return loadedCount < totalResults ? pages.length + 1 : undefined;
    },
  });
