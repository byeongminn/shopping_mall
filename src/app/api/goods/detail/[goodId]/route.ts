import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { GoodsDetail, RawGoodDTO } from "@/shared/api/house/types/item";
import { goods } from "@/shared/mock-data/goods";
import { numberRounded } from "@/shared/utils/data";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

type Params = {
  params: Promise<Pick<GetGoodsDetailRequestParams, "goodId">>;
};

export const GET = async (_: unknown, { params }: Params) => {
  const { goodId } = await params;

  try {
    const data = goods.find((good) => good.id === goodId);

    if (!data) {
      return new Response(
        JSON.stringify({ message: "상품을 찾을 수 없습니다." }),
        { status: 404 }
      );
    }

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const mappingResponse = (data: RawGoodDTO): GoodsDetail => {
  return {
    ...data,
    price: {
      ...data.price,
      originalPriceDisplayText: formatNumberWithCommas(
        Number(data.price.originalPrice) ?? 0
      ),
      sellingPriceDisplayText: formatNumberWithCommas(
        Number(data.price.sellingPrice) ?? 0
      ),
    },
    reviewStatistic: {
      ...data.reviewStatistic,
      reviewCountDisplayText:
        formatNumberWithCommas(data.reviewStatistic.reviewCount) ?? 0,
      reviewAverageDisplayText:
        numberRounded(data.reviewStatistic.reviewAverage) ?? 0,
    },
    subImages: [
      {
        imageUrl: data?.imageUrl,
      },
      ...data?.subImages,
    ],
  };
};
