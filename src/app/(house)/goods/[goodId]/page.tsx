import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodDetailRequestDto } from "@/entities/goods/goods.types";
import { goodDetailQueryOptions } from "@/features/goods/lib/goodDetailQueryOptions";
import { GoodDetailPage } from "@/views/goods/ui/GoodDetailPage";
import { getQueryClient } from "@/shared/lib/react-query";

type Props = {
  params: Promise<Pick<GetGoodDetailRequestDto, "goodId">>;
};

export default async function Page({ params }: Props) {
  const { goodId } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(goodDetailQueryOptions({ goodId }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GoodDetailPage goodId={goodId} />
    </HydrationBoundary>
  );
}
