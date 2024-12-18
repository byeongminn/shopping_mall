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
        id: "309103",
        name: "1+1/2+2 엠보극세사 경추베개솜 베개커버 미포함 낮은베개 2size",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/166755665891460610.jpg",
        isSoldOut: false,
        brand: {
          id: "12483",
          name: "네모라인",
        },
        price: {
          originalPrice: "11900",
          sellingPrice: "10900",
          discountRate: "8",
          originalPriceDisplayText: "11,900",
          sellingPriceDisplayText: "10,900",
        },
        badgeProperties: {
          isFreeDelivery: true,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          thumbnailBadges: [],
          departureToday: {
            orderDeadline: "12:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 33889,
          reviewAverage: 4.76,
          reviewCountDisplayText: "33,889",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 66832,
        },
      },
      {
        id: "477243",
        name: "담요추가증정 1+1 부드러운 극세사 밍크 담요 11종 택2 3size",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-282238477721600.jpg",
        isSoldOut: false,
        brand: {
          id: "1841",
          name: "아르페지오",
        },
        price: {
          originalPrice: "37800",
          sellingPrice: "8900",
          discountRate: "76",
          originalPriceDisplayText: "37,800",
          sellingPriceDisplayText: "8,900",
        },
        badgeProperties: {
          isFreeDelivery: false,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          thumbnailBadges: [
            {
              position: 3,
              imageUrl:
                "https://bucketplace-v2-development.s3.amazonaws.com/uploads/admins/thumbnail_badges/172162871591158809.png",
            },
          ],
          departureToday: {
            orderDeadline: "12:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
          couponBadge: {
            displayText: "최대 5% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "5.0",
            couponAppliedPrice: "8455",
          },
        },
        reviewStatistic: {
          reviewCount: 9393,
          reviewAverage: 4.76,
          reviewCountDisplayText: "9,393",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 57065,
        },
      },
      {
        id: "65166",
        name: "[10%쿠폰]보송따뜻 무브 먼지없는 세미 극세사 차렵이불세트 SS/Q/K 10color",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-280157191008384.jpg",
        isSoldOut: false,
        brand: {
          id: "2442",
          name: "마틸라",
        },
        price: {
          originalPrice: "98200",
          sellingPrice: "46900",
          discountRate: "52",
          originalPriceDisplayText: "98,200",
          sellingPriceDisplayText: "46,900",
        },
        badgeProperties: {
          isFreeDelivery: false,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          thumbnailBadges: [],
          deliveryServiceCode: "NORMAL",
          couponBadge: {
            displayText: "최대 10% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "10.0",
            couponAppliedPrice: "42210",
          },
        },
        reviewStatistic: {
          reviewCount: 16552,
          reviewAverage: 4.64,
          reviewCountDisplayText: "16,552",
          reviewAverageDisplayText: 4.6,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 109802,
        },
      },
    ],
    totalResults: 3,
  },
};
