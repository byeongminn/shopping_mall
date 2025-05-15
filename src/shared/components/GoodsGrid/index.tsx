import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { GetGoodsResponse } from "@/features/main/api/getGoods";
import { GoodItem } from "@/shared/components/GoodItem";
import { Good } from "@/shared/api/house/types/item";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import * as s from "@/shared/components/GoodsGrid/style.css";

type Props = {
  goods: Good[] | undefined;
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
  goods = [],
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  emptyContent = null,
}: Props) => (
  <>
    <div className={s.wrapper({ isEmpty: !(goods.length > 0) })}>
      {goods.length > 0
        ? // key는 고유해야 함을 인지하고 있으나, 무한 스크롤 구현을 위해 동일한 값을 반복하도록 구성했기 때문에 현재는 index를 임시로 사용 중
          goods.map((good, idx) => <GoodItem key={idx} good={good} />)
        : emptyContent}
    </div>
    {hasNextPage && !isFetchingNextPage && (
      <VisibilityLoader
        callback={() => !isFetchingNextPage && fetchNextPage()}
      />
    )}
  </>
);
