import { HttpHandler, HttpResponse, http } from "msw";
import { getGoodsURL } from "./getGoods";

export const getMockGoods: HttpHandler = http.get(getGoodsURL, () => {
  console.log("여기서 데이터를 가져오고 있어요.");

  return HttpResponse.json(GET_MOCK_GOODS.success);
});

const GET_MOCK_GOODS = {
  success: {
    goods: [
      {
        id: "1026292",
        name: "항균 방수 가죽 식탁보 테이블보 식탁 테이블 매트 커버 4인 6인용 16컬러 16사이즈",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/167205207942204436.jpg",
        isSoldOut: false,
        brand: {
          id: "41755",
          name: "깐깐공주",
        },
        price: {
          originalPrice: "22000",
          sellingPrice: "12900",
          discountRate: "41",
          originalPriceDisplayText: "22,000",
          sellingPriceDisplayText: "12,900",
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
          reviewCountDisplayText: "9,405",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 87547,
        },
      },
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
        id: "1181383",
        name: "누적판매 100만개! 퀴진드마망 커트러리 순수 4인 수저세트 (5color)",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/166200002169429992.jpg",
        isSoldOut: false,
        brand: {
          id: "3524",
          name: "달팽이리빙",
        },
        price: {
          originalPrice: "26500",
          sellingPrice: "9900",
          discountRate: "62",
          originalPriceDisplayText: "26,500",
          sellingPriceDisplayText: "9,900",
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
          reviewCount: 15116,
          reviewAverage: 4.78,
          reviewCountDisplayText: "15,116",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 70485,
        },
      },
      {
        id: "279905",
        name: "이지케어 워셔블 슬러브 러그 카페트",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-224578009448576.jpg",
        isSoldOut: false,
        brand: {
          id: "27431",
          name: "심플먼트",
        },
        price: {
          originalPrice: "25800",
          sellingPrice: "25800",
          discountRate: "0",
          originalPriceDisplayText: "25,800",
          sellingPriceDisplayText: "25,800",
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
          deliveryServiceCode: "NORMAL",
          couponBadge: {
            displayText: "최대 8% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "8.0",
            couponAppliedPrice: "23736",
          },
        },
        reviewStatistic: {
          reviewCount: 20126,
          reviewAverage: 4.71,
          reviewCountDisplayText: "20,126",
          reviewAverageDisplayText: 4.7,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 191348,
        },
      },
      {
        id: "1487254",
        name: "자동물빠짐 연마제없는 304올스텐 2단식기건조대+수저통+접시꽂이+도마걸이",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/165882093087605655.jpg",
        isSoldOut: false,
        brand: {
          id: "51267",
          name: "이브리영",
        },
        price: {
          originalPrice: "65900",
          sellingPrice: "58900",
          discountRate: "10",
          originalPriceDisplayText: "65,900",
          sellingPriceDisplayText: "58,900",
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
            orderDeadline: "13:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 5896,
          reviewAverage: 4.76,
          reviewCountDisplayText: "5,896",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 64555,
        },
      },
      {
        id: "309648",
        name: "[10%쿠폰]NEW복숭아촉감 먼지없는 스테이 차렵이불세트 SS/Q/K 14color",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-259276849631360.jpg",
        isSoldOut: false,
        brand: {
          id: "2442",
          name: "마틸라",
        },
        price: {
          originalPrice: "88200",
          sellingPrice: "39900",
          discountRate: "54",
          originalPriceDisplayText: "88,200",
          sellingPriceDisplayText: "39,900",
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
            couponAppliedPrice: "35910",
          },
        },
        reviewStatistic: {
          reviewCount: 23967,
          reviewAverage: 4.63,
          reviewCountDisplayText: "23,967",
          reviewAverageDisplayText: 4.6,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 167998,
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
      {
        id: "1132309",
        name: "단독 크림컬러 출시! 논슬립 어깨뿔방지 옷걸이 50개 6colors (니트/정장/맨투맨)",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-262734206177280.jpg",
        isSoldOut: false,
        brand: {
          id: "29897",
          name: "진심감성",
        },
        price: {
          originalPrice: "84000",
          sellingPrice: "30900",
          discountRate: "63",
          originalPriceDisplayText: "84,000",
          sellingPriceDisplayText: "30,900",
        },
        badgeProperties: {
          isFreeDelivery: true,
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
            orderDeadline: "14:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 12428,
          reviewAverage: 4.82,
          reviewCountDisplayText: "12,428",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 30320,
        },
      },
      {
        id: "1257028",
        name: "바닐라 출시! 접이식 펠트 수납 바구니 4size 23colors",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/170123628121617915.jpg",
        isSoldOut: false,
        brand: {
          id: "46171",
          name: "마롱즈",
        },
        price: {
          originalPrice: "4800",
          sellingPrice: "4000",
          discountRate: "16",
          originalPriceDisplayText: "4,800",
          sellingPriceDisplayText: "4,000",
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
            displayText: "최대 10% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "10.0",
            couponAppliedPrice: "3600",
          },
        },
        reviewStatistic: {
          reviewCount: 6937,
          reviewAverage: 4.76,
          reviewCountDisplayText: "6,937",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 74006,
        },
      },
      {
        id: "1883098",
        name: "기간한정행사 리얼 감성 빈티지 체크 식탁보 테이블보 크리스마스 홈카페 가리개",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-311337355202624.jpg",
        isSoldOut: false,
        brand: {
          id: "60445",
          name: "꾸밈하우스",
        },
        price: {
          originalPrice: "19900",
          sellingPrice: "5900",
          discountRate: "70",
          originalPriceDisplayText: "19,900",
          sellingPriceDisplayText: "5,900",
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
          departureToday: {
            orderDeadline: "14:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 11643,
          reviewAverage: 4.73,
          reviewCountDisplayText: "11,643",
          reviewAverageDisplayText: 4.7,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 46988,
        },
      },
      {
        id: "1132906",
        name: "[최종11610원] 올스텐304 물빠짐 수세미거치대 (화이트/실버)+칸막이/논슬립패드 증정",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-313330570694656.jpg",
        isSoldOut: false,
        brand: {
          id: "73674",
          name: "마마 무드",
        },
        price: {
          originalPrice: "16200",
          sellingPrice: "12900",
          discountRate: "20",
          originalPriceDisplayText: "16,200",
          sellingPriceDisplayText: "12,900",
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
            orderDeadline: "15:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
          couponBadge: {
            displayText: "최대 10% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "10.0",
            couponAppliedPrice: "11610",
          },
        },
        reviewStatistic: {
          reviewCount: 12887,
          reviewAverage: 4.76,
          reviewCountDisplayText: "12,887",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 80560,
        },
      },
      {
        id: "1017219",
        name: "[1+1] 대용량 500ml  프리미엄 실내 디퓨저 방향제 +선물박스 +리드스틱",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/165352576327228826.gif",
        isSoldOut: false,
        brand: {
          id: "40738",
          name: "헤트라스",
        },
        price: {
          originalPrice: "35000",
          sellingPrice: "18800",
          discountRate: "46",
          originalPriceDisplayText: "35,000",
          sellingPriceDisplayText: "18,800",
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
            orderDeadline: "15:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 10623,
          reviewAverage: 4.76,
          reviewCountDisplayText: "10,623",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 41473,
        },
      },
      {
        id: "1384503",
        name: "국내생산 간편설치 원터치 필터샤워기+PVC 호스(1.5M/2M)",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-283012322254912.jpg",
        isSoldOut: false,
        brand: {
          id: "37426",
          name: "닥터워터",
        },
        price: {
          originalPrice: "38900",
          sellingPrice: "25900",
          discountRate: "33",
          originalPriceDisplayText: "38,900",
          sellingPriceDisplayText: "25,900",
        },
        badgeProperties: {
          isFreeDelivery: true,
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
            orderDeadline: "13:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 8945,
          reviewAverage: 4.82,
          reviewCountDisplayText: "8,945",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 48652,
        },
      },
      {
        id: "33583",
        name: "25mm 알루미늄 블라인드 거실 창문 35colors",
        imageUrl:
          "https://bucketplace-v2-development.s3.ap-northeast-1.amazonaws.com/uploads/openapi/924746/1728965863036.jpg",
        isSoldOut: false,
        brand: {
          id: "345",
          name: "창안애",
        },
        price: {
          originalPrice: "15900",
          sellingPrice: "8800",
          discountRate: "44",
          originalPriceDisplayText: "15,900",
          sellingPriceDisplayText: "8,800",
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
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 9898,
          reviewAverage: 4.66,
          reviewCountDisplayText: "9,898",
          reviewAverageDisplayText: 4.7,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 88306,
        },
      },
      {
        id: "676405",
        name: "NEW컬러출시! 클린코튼 고밀도순면60수 광폭호텔식 옥수수솜 사계절 차렵이불세트 9색상",
        imageUrl:
          "https://prs.ohou.se/apne2/any/uploads/productions/v1-290058886762624.jpg",
        isSoldOut: false,
        brand: {
          id: "4589",
          name: "베이직톤",
        },
        price: {
          originalPrice: "102500",
          sellingPrice: "69800",
          discountRate: "31",
          originalPriceDisplayText: "102,500",
          sellingPriceDisplayText: "69,800",
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
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 14995,
          reviewAverage: 4.78,
          reviewCountDisplayText: "14,995",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 115265,
        },
      },
      {
        id: "2090814",
        name: "1+1 문에 안걸리는 양발 플랫 욕실화 4color",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/168543020780425467.jpg",
        isSoldOut: false,
        brand: {
          id: "7040",
          name: "THE살림",
        },
        price: {
          originalPrice: "23000",
          sellingPrice: "12900",
          discountRate: "43",
          originalPriceDisplayText: "23,000",
          sellingPriceDisplayText: "12,900",
        },
        badgeProperties: {
          isFreeDelivery: true,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          cardPromotion: {
            displayText: "최대 10% 결제할인",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/card-promotion-badge.png?w=40&h=32",
            fixedDiscountAmount: "0",
            promotionPaymentMethod: "KAKAO_PAY",
          },
          thumbnailBadges: [
            {
              position: 3,
              imageUrl:
                "https://bucketplace-v2-development.s3.amazonaws.com/uploads/admins/thumbnail_badges/172162871591158809.png",
            },
          ],
          departureToday: {
            orderDeadline: "14:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
        },
        reviewStatistic: {
          reviewCount: 8456,
          reviewAverage: 4.73,
          reviewCountDisplayText: "8,456",
          reviewAverageDisplayText: 4.7,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 40475,
        },
      },
      {
        id: "316468",
        name: "1+1 NEW컬러입고! 국내산 완벽 물빠짐 EVA 욕실화",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/165768536513237444.jpg",
        isSoldOut: false,
        brand: {
          id: "7040",
          name: "THE살림",
        },
        price: {
          originalPrice: "18900",
          sellingPrice: "12900",
          discountRate: "31",
          originalPriceDisplayText: "18,900",
          sellingPriceDisplayText: "12,900",
        },
        badgeProperties: {
          isFreeDelivery: true,
          isSpecialPrice: true,
          isDiscontinued: false,
          isSelling: true,
          isOverseasPurchase: false,
          isRetailDelivery: false,
          isThirdPartyLogistic: false,
          cardPromotion: {
            displayText: "최대 10% 결제할인",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/card-promotion-badge.png?w=40&h=32",
            fixedDiscountAmount: "0",
            promotionPaymentMethod: "KAKAO_PAY",
          },
          thumbnailBadges: [
            {
              position: 3,
              imageUrl:
                "https://bucketplace-v2-development.s3.amazonaws.com/uploads/admins/thumbnail_badges/172162871591158809.png",
            },
          ],
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
          reviewCountDisplayText: "40,924",
          reviewAverageDisplayText: 4.7,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 85350,
        },
      },
      {
        id: "1471905",
        name: "32mm 강력스프링 압축봉 커튼봉 (70~460cm) 큰사이즈도 배송비 추가X",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/165814303607567750.jpg",
        isSoldOut: false,
        brand: {
          id: "51404",
          name: "타이탄 리빙스토어",
        },
        price: {
          originalPrice: "9900",
          sellingPrice: "7900",
          discountRate: "20",
          originalPriceDisplayText: "9,900",
          sellingPriceDisplayText: "7,900",
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
          departureToday: {
            orderDeadline: "15:00",
            description: "평일 %s까지 결제시",
            departureTodayExp: "B",
          },
          deliveryServiceCode: "NORMAL",
          couponBadge: {
            displayText: "최대 5% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "5.0",
            couponAppliedPrice: "7505",
          },
        },
        reviewStatistic: {
          reviewCount: 7189,
          reviewAverage: 4.77,
          reviewCountDisplayText: "7,189",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 39844,
        },
      },
      {
        id: "1056568",
        name: "쿠폰 / 맞춤 마이크로모달 알러지케어 워싱 고정밴드 광폭 침대패드 6색상",
        imageUrl:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/163479055778367379.jpg",
        isSoldOut: false,
        brand: {
          id: "37942",
          name: "오렌지베딩",
        },
        price: {
          originalPrice: "29900",
          sellingPrice: "18900",
          discountRate: "36",
          originalPriceDisplayText: "29,900",
          sellingPriceDisplayText: "18,900",
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
            displayText: "최대 5% 쿠폰",
            imageUrl:
              "https://image.ohou.se/i/bucketplace-v2-development/static/productions/goods-coupon-badge.png?w=40&h=32",
            discountRatio: "5.0",
            couponAppliedPrice: "17955",
          },
        },
        reviewStatistic: {
          reviewCount: 8289,
          reviewAverage: 4.77,
          reviewCountDisplayText: "8,289",
          reviewAverageDisplayText: 4.8,
        },
        scrapInfo: {
          isScrap: false,
          scrapCount: 42137,
        },
      },
    ],
    totalResults: 200,
  },
};
