import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodDetail } from "@/features/goods/detail/components/GoodDetail";

export type GoodDetailPageParams = {
  params: GetGoodsDetailRequestParams;
};

export default function GoodDetailPage({ params }: GoodDetailPageParams) {
  return (
    <main>
      <GoodDetail goodId={params.goodId} />
    </main>
  );
}
