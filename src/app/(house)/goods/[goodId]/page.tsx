import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodDetailContainer } from "@/features/goods/detail/components/GoodDetail/GoodDetailContainer";
import { goodDetailQueryOptions } from "@/features/goods/detail/queries/goodDetail";
import { getQueryClient } from "@/shared/lib/react-query";

type Props = {
  params: Promise<Pick<GetGoodsDetailRequestParams, "goodId">>;
};

export default async function GoodDetailPage({ params }: Props) {
  const { goodId } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(goodDetailQueryOptions({ goodId }));

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GoodDetailContainer goodId={goodId} />
      </HydrationBoundary>
    </main>
  );
}
