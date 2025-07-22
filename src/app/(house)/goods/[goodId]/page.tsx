import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { GetGoodDetailRequestDto } from "@/entities/goods/goods.types";
import { goodDetailQueryOptions } from "@/features/goods/lib/goodDetailQueryOptions";
import { GoodDetailSection } from "@/widgets/goods/GoodDetailSection";
import { getQueryClient } from "@/shared/lib/react-query";

type Props = {
  params: Promise<Pick<GetGoodDetailRequestDto, "goodId">>;
};

export default async function GoodDetailPage({ params }: Props) {
  const { goodId } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(goodDetailQueryOptions({ goodId }));

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GoodDetailSection goodId={goodId} />
      </HydrationBoundary>
    </main>
  );
}
