import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchGoodsURL } from "./getSearchGoods";

export const getMockSearchGoods: HttpHandler = http.get(
  getSearchGoodsURL,
  () => {
    return HttpResponse.json(GET_MOCK_SEARCH_GOODS.success);
  }
);

const GET_MOCK_SEARCH_GOODS = {
  success: {
    goods: [
      {
        id: "1",
        name: "구름 소파",
        brand: {
          id: "1",
          name: "플러피누들",
        },
        price: {
          originalPrice: "256700",
          sellingPrice: "154000",
          discountRate: "40",
        },
        imageUrl: "cloud-sofa.png",
        isSoldOut: false,
        badgeProperties: {
          isFreeDelivery: false,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          departureToday: {
            orderDeadline: "12:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 9405,
          reviewAverage: 4.79,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 87547,
        },
      },
      {
        id: "18",
        name: "안락 1인용 소파",
        brand: {
          id: "18",
          name: "코지코브",
        },
        price: {
          originalPrice: "193600",
          sellingPrice: "133600",
          discountRate: "31",
        },
        imageUrl: "single-sofa.png",
        isSoldOut: false,
        badgeProperties: {
          isFreeDelivery: true,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          departureToday: {
            orderDeadline: "14:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 40924,
          reviewAverage: 4.74,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 85350,
        },
      },
    ],
    totalResults: 2,
  },
};
