import { infiniteQueryOptions } from "@tanstack/react-query";
import {
  GetSearchGoodsRequestParams,
  getSearchGoods,
} from "@/features/search/api/getSearchGoods";

type Params = Pick<GetSearchGoodsRequestParams, "q" | "order">;

export const searchGoodsInfiniteQueryOptions = ({ q, order }: Params) =>
  infiniteQueryOptions({
    queryKey: ["search", q, order],
    queryFn: async ({ pageParam }) =>
      await getSearchGoods({ q, order, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const loadedCount = pages.flatMap((page) => page.goods).length;
      const totalResults = lastPage.totalResults;

      return loadedCount < totalResults ? pages.length + 1 : undefined;
    },
  });
