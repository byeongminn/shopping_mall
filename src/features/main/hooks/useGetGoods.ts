import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetGoodsRequestParams,
  GetGoodsResponse,
  getGoods,
  getGoodsURL,
} from "../api/getGoods";

type Params = GetGoodsRequestParams;

export const useGetGoods = ({
  order,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetGoodsResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["goods", getGoodsURL, order],
    queryFn: async () => {
      return await getGoods({ order });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const loadedCount = pages.flatMap((page) => page.goods).length; // 지금까지 로드된 총 데이터 개수
      const totalResults = lastPage.totalResults; // 서버에서 반환한 전체 데이터 개수

      // 아직 더 가져올 데이터가 있다면 다음 페이지 번호 반환
      return loadedCount < totalResults ? pages.length + 1 : undefined;
    },
  });
};
