import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetSearchGoodsRequestParams,
  GetSearchGoodsResponse,
  getSearchGoods,
  getSearchGoodsURL,
} from "../api/getSearchGoods";

type Params = GetSearchGoodsRequestParams;

export const useGetSearchGoods = ({
  q,
  order,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetSearchGoodsResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["search", getSearchGoodsURL, q, order],
    queryFn: async () => await getSearchGoods({ q, order }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const loadedCount = pages.flatMap((page) => page.goods).length;
      const totalResults = lastPage.totalResults;

      return loadedCount < totalResults ? pages.length + 1 : undefined;
    },
  });
};
