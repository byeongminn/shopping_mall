import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodDetail } from "@/features/goods/detail/components/GoodDetail";
import { goodDetailQueryOptions } from "@/features/goods/detail/queries/goodDetail";
import { getQueryClient } from "@/shared/lib/react-query";

export type GoodDetailPageParams = {
  params: Promise<GetGoodsDetailRequestParams>;
};

export default async function GoodDetailPage({ params }: GoodDetailPageParams) {
  const goodId = (await params).goodId;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(goodDetailQueryOptions(goodId));

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GoodDetail goodId={goodId} />
      </HydrationBoundary>
    </main>
  );
}
