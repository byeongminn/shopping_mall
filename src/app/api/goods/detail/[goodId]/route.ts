import { GoodsDetail, RawGoodDTO } from "@/shared/api/house/types/item";
import { numberRounded } from "@/shared/utils/data";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

export const GET = async () => {
  try {
    const data = {
      id: "16",
      name: "부유형 침대",
      brand: {
        id: "16",
        name: "플로팅드림",
      },
      price: {
        originalPrice: "52000",
        sellingPrice: "44700",
        discountRate: "14",
      },
      imageUrl: "bed.png",
      badgeProperties: {
        isFreeDelivery: true,
        isSpecialPrice: true,
      },
      reviewStatistic: {
        reviewCount: 14995,
        reviewAverage: 4.78,
      },
      delivery: {
        fee: 0,
        backwoodsFee: 0,
        freeThreshold: 0,
        isRegionalDeliveryFee: false,
        type: 1,
      },
      description:
        '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
        '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
        '<img src="https://shopping-mall-murex.vercel.app/images/bed.png" alt="부유형 침대" style="max-width: 100%; height: auto;" />' +
        "</div>" +
        '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 떠 있는 듯한 느낌</h2>' +
        '<p style="text-align: center; font-size: 18px; color: #444;">심플하면서도 현대적인 <strong style="color: #000;">부유형 침대</strong>로 침실을 한층 세련되게 꾸며보세요.</p>' +
        "</div>",
      extraOptions: [{ id: 31, explain: "LED 조명 추가", price: 25000 }],
      firstDepthName: "사이즈 선택",
      options: [
        { id: 31, explain: "부유형 침대 (싱글)", price: 44700 },
        { id: 32, explain: "부유형 침대 (퀸)", price: 64700 },
      ],
      subImages: [],
    };

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
