import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodDetail } from "@/features/goods/detail/components/GoodDetail";
import { Suspense } from "react";

export type GoodDetailPageParams = {
  params: Promise<GetGoodsDetailRequestParams>;
};

export default async function GoodDetailPage({ params }: GoodDetailPageParams) {
  const goodId = (await params).goodId;

  return (
    <main>
      <Suspense fallback={<></>}>
        <GoodDetail goodId={goodId} />
      </Suspense>
    </main>
  );
}
