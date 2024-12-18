import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodDetail } from "@/features/goods/detail/components/GoodDetail";
import { Suspense } from "react";

export type GoodDetailPageParams = {
  params: GetGoodsDetailRequestParams;
};

export default function GoodDetailPage({ params }: GoodDetailPageParams) {
  return (
    <main>
      <Suspense fallback={<></>}>
        <GoodDetail goodId={params.goodId} />
      </Suspense>
    </main>
  );
}
