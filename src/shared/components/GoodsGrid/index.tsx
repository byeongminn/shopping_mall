import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { GetGoodsResponse } from "@/features/main/api/getGoods";
import { GoodItem } from "@/features/main/components/MainGoods/GoodItem";
import { Good } from "@/shared/api/house/types/item";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import * as s from "@/shared/components/GoodsGrid/style.css";

type Props = {
  goods: Good[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<GetGoodsResponse, unknown>, Error>
  >;
  emptyContent?: React.ReactNode;
};

export const GoodsGrid = ({
  goods,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  emptyContent = null,
}: Props) => (
  <>
    <div className={s.wrapper({ isEmpty: !(goods.length > 0) })}>
      {goods.length > 0
        ? goods.map((good) => <GoodItem key={good?.id} good={good} />)
        : emptyContent}
    </div>
    {hasNextPage && !isFetchingNextPage && (
      <VisibilityLoader
        callback={() => !isFetchingNextPage && fetchNextPage()}
      />
    )}
  </>
);
