import { HttpHandler, HttpResponse, http } from "msw";
import { GetGoodsDetailURL } from "@/features/goods/detail/api/getGoodsDetail";

export const getMockGoodsDetail: HttpHandler = http.get(
  GetGoodsDetailURL,
  () => {
    return HttpResponse.json(GET_MOCK_GOODS_DETAIL.success);
  }
);

const GET_MOCK_GOODS_DETAIL = {
  success: {
    id: "20",
    name: "폭신 폭신 베개",
    brand: { id: "20", name: "아티젠" },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
      originalPriceDisplayText: "89,400",
      sellingPriceDisplayText: "62,600",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
      reviewCountDisplayText: "8,289",
      reviewAverageDisplayText: 4.8,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow-1.png" alt="pillow-1" /><img src="https://shopping-mall-murex.vercel.app/images/pillow-2.png" alt="pillow-2" /><img src="https://shopping-mall-murex.vercel.app/images/pillow-3.png" alt="pillow-3" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">고급 호텔 스타일 구스다운 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">최상의 숙면을 위한 <strong style="color: #000;">프리미엄 구스다운 베개</strong>입니다.</p><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">✨ 제품 특징</h3><ul style="list-style: none; padding-left: 0;"><li style="padding: 5px 0;">✔ 부드럽고 탄력 있는 <strong>100% 고급 구스다운 충전재</strong></li><li style="padding: 5px 0;">✔ 뛰어난 통기성으로 사계절 내내 쾌적한 사용</li><li style="padding: 5px 0;">✔ 호텔에서 느낄 수 있는 <strong>최상의 편안함</strong></li><li style="padding: 5px 0;">✔ 고급스러운 테두리 파이핑 마감으로 내구성 강화</li><li style="padding: 5px 0;">✔ 알러지 방지 원단 사용으로 더욱 위생적인 수면 환경</li></ul><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">📏 제품 사양</h3><table style="width: 100%; border-collapse: collapse; margin-top: 10px;"><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">사이즈</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">50cm x 70cm</td></tr><tr><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">충전재</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">구스다운 90%, 깃털 10%</td></tr><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">커버 소재</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">100% 면 (고급 다운프루프 가공)</td></tr><tr><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">색상</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">화이트 (블랙 파이핑)</td></tr><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">세탁 방법</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">드라이클리닝 권장, 약한 세탁 가능</td></tr></table><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">💡 사용 시 유의사항</h3><p style="background-color: #fffbcc; padding: 15px; border-radius: 5px;">구스다운 제품 특성상, 처음 개봉 시 가벼운 털 빠짐이 있을 수 있습니다. 개봉 후 <strong style="color: #d9534f;">햇볕에 2~3시간 정도 건조</strong>하면 더욱 폭신한 느낌을 즐길 수 있습니다.</p><h3 style="text-align: center; font-size: 22px; color: #0073e6; margin-top: 40px;">🛍 지금 구매하고 호텔 같은 편안함을 경험해 보세요!</h3></div>',
    extraOptions: [
      { id: 3, explain: "폭신폭신 이불(화이트)", price: 139000 },
      { id: 4, explain: "폭신폭신 이불(그레이)", price: 139000 },
      { id: 5, explain: "폭신폭신 이불(블랙)", price: 139000 },
    ],
    firstDepthName: "타입선택",
    options: [
      { id: 1, explain: "폭신폭신 베개(일반형)", price: 62600 },
      { id: 2, explain: "폭신폭신 베개(경추형)", price: 72500 },
    ],
    subImages: [
      { imageUrl: "pillow-1.png" },
      { imageUrl: "pillow-2.png" },
      { imageUrl: "pillow-3.png" },
    ],
  },
};
