import { RawGoodDTO } from "@/shared/api/house/types/item";

export const goods: RawGoodDTO[] = [
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
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
  },
  {
    id: "2",
    name: "스파이럴 책장",
    brand: {
      id: "2",
      name: "트위스티코",
    },
    price: {
      originalPrice: "174100",
      sellingPrice: "155000",
      discountRate: "11",
    },
    imageUrl: "bookshelf.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
  },
  {
    id: "3",
    name: "별빛 펜던트 조명",
    brand: {
      id: "3",
      name: "글리머라이트",
    },
    price: {
      originalPrice: "81200",
      sellingPrice: "40600",
      discountRate: "50",
    },
    imageUrl: "pendant-lights.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
      reviewAverage: 4.78,
    },
  },
  {
    id: "4",
    name: "재생 우드 테이블",
    brand: {
      id: "4",
      name: "에코플럭스",
    },
    price: {
      originalPrice: "270800",
      sellingPrice: "146200",
      discountRate: "46",
    },
    imageUrl: "wood-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 8% 쿠폰",
        discountRatio: "8.0",
        couponAppliedPrice: "23736",
      },
    },
    reviewStatistic: {
      reviewCount: 20126,
      reviewAverage: 4.71,
    },
  },
  {
    id: "5",
    name: "명상 의자",
    brand: {
      id: "5",
      name: "젠플로우",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
  },
  {
    id: "6",
    name: "달빛 무드등",
    brand: {
      id: "6",
      name: "루나틱스",
    },
    price: {
      originalPrice: "362000",
      sellingPrice: "202700",
      discountRate: "44",
    },
    imageUrl: "mood-light.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "35910",
      },
    },
    reviewStatistic: {
      reviewCount: 23967,
      reviewAverage: 4.63,
    },
  },
  {
    id: "7",
    name: "모자이크 커피 테이블",
    brand: {
      id: "7",
      name: "픽셀퍼니",
    },
    price: {
      originalPrice: "150600",
      sellingPrice: "81300",
      discountRate: "46",
    },
    imageUrl: "coffee-table.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "8455",
      },
    },
    reviewStatistic: {
      reviewCount: 9393,
      reviewAverage: 4.76,
    },
  },
  {
    id: "8",
    name: "부유 선반",
    brand: {
      id: "8",
      name: "스페이스하모니",
    },
    price: {
      originalPrice: "140400",
      sellingPrice: "106700",
      discountRate: "24",
    },
    imageUrl: "shelf.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "42210",
      },
    },
    reviewStatistic: {
      reviewCount: 16552,
      reviewAverage: 4.64,
    },
  },
  {
    id: "9",
    name: "천연 소재 러그",
    brand: {
      id: "9",
      name: "오가닉스피릿",
    },
    price: {
      originalPrice: "204700",
      sellingPrice: "174000",
      discountRate: "15",
    },
    imageUrl: "rug.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
  },
  {
    id: "10",
    name: "산업풍 침대 프레임",
    brand: {
      id: "10",
      name: "메탈릭드림",
    },
    price: {
      originalPrice: "428000",
      sellingPrice: "273900",
      discountRate: "36",
    },
    imageUrl: "bed-frame.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "3600",
      },
    },
    reviewStatistic: {
      reviewCount: 6937,
      reviewAverage: 4.76,
    },
  },
  {
    id: "11",
    name: "팝아트 벽 장식",
    brand: {
      id: "11",
      name: "컬러버스트",
    },
    price: {
      originalPrice: "331700",
      sellingPrice: "218900",
      discountRate: "34",
    },
    imageUrl: "pop-art.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
  },
  {
    id: "12",
    name: "공중 해먹",
    brand: {
      id: "12",
      name: "에어리무브",
    },
    price: {
      originalPrice: "200400",
      sellingPrice: "134300",
      discountRate: "33",
    },
    imageUrl: "hammock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "11610",
      },
    },
    reviewStatistic: {
      reviewCount: 12887,
      reviewAverage: 4.76,
    },
  },
  {
    id: "13",
    name: "접이식 다이닝 테이블",
    brand: {
      id: "13",
      name: "트랜스폼스페이스",
    },
    price: {
      originalPrice: "230900",
      sellingPrice: "184700",
      discountRate: "20",
    },
    imageUrl: "dining-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
  },
  {
    id: "14",
    name: "우드 스톤 램프",
    brand: {
      id: "14",
      name: "네이처블렌드",
    },
    price: {
      originalPrice: "264600",
      sellingPrice: "238200",
      discountRate: "10",
    },
    imageUrl: "wood-lamp.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
  },
  {
    id: "15",
    name: "무소음 벽시계",
    brand: {
      id: "15",
      name: "사일런트글로우",
    },
    price: {
      originalPrice: "309300",
      sellingPrice: "185600",
      discountRate: "40",
    },
    imageUrl: "wall-clock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
    },
    reviewStatistic: {
      reviewCount: 9898,
      reviewAverage: 4.66,
    },
  },
  {
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
  },
  {
    id: "17",
    name: "거울 벽 장식",
    brand: {
      id: "17",
      name: "리플렉트아트",
    },
    price: {
      originalPrice: "286900",
      sellingPrice: "200800",
      discountRate: "30",
    },
    imageUrl: "mirror.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
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
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
  },
  {
    id: "19",
    name: "수저 세트",
    brand: {
      id: "19",
      name: "아르코스",
    },
    price: {
      originalPrice: "26500",
      sellingPrice: "9900",
      discountRate: "62",
    },
    imageUrl: "cutlery-set.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "7505",
      },
    },
    reviewStatistic: {
      reviewCount: 7189,
      reviewAverage: 4.77,
    },
  },
  {
    id: "20",
    name: "폭신 폭신 베개",
    brand: {
      id: "20",
      name: "아티젠",
    },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
  },
  {
    id: "21",
    name: "구름 소파 2",
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
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
  },
  {
    id: "22",
    name: "스파이럴 책장 2",
    brand: {
      id: "2",
      name: "트위스티코",
    },
    price: {
      originalPrice: "174100",
      sellingPrice: "155000",
      discountRate: "11",
    },
    imageUrl: "bookshelf.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
  },
  {
    id: "23",
    name: "별빛 펜던트 조명 2",
    brand: {
      id: "3",
      name: "글리머라이트",
    },
    price: {
      originalPrice: "81200",
      sellingPrice: "40600",
      discountRate: "50",
    },
    imageUrl: "pendant-lights.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
      reviewAverage: 4.78,
    },
  },
  {
    id: "24",
    name: "재생 우드 테이블 2",
    brand: {
      id: "4",
      name: "에코플럭스",
    },
    price: {
      originalPrice: "270800",
      sellingPrice: "146200",
      discountRate: "46",
    },
    imageUrl: "wood-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 8% 쿠폰",
        discountRatio: "8.0",
        couponAppliedPrice: "23736",
      },
    },
    reviewStatistic: {
      reviewCount: 20126,
      reviewAverage: 4.71,
    },
  },
  {
    id: "25",
    name: "명상 의자 2",
    brand: {
      id: "5",
      name: "젠플로우",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
  },
  {
    id: "26",
    name: "달빛 무드등 2",
    brand: {
      id: "6",
      name: "루나틱스",
    },
    price: {
      originalPrice: "362000",
      sellingPrice: "202700",
      discountRate: "44",
    },
    imageUrl: "mood-light.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "35910",
      },
    },
    reviewStatistic: {
      reviewCount: 23967,
      reviewAverage: 4.63,
    },
  },
  {
    id: "27",
    name: "모자이크 커피 테이블 2",
    brand: {
      id: "7",
      name: "픽셀퍼니",
    },
    price: {
      originalPrice: "150600",
      sellingPrice: "81300",
      discountRate: "46",
    },
    imageUrl: "coffee-table.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "8455",
      },
    },
    reviewStatistic: {
      reviewCount: 9393,
      reviewAverage: 4.76,
    },
  },
  {
    id: "28",
    name: "부유 선반 2",
    brand: {
      id: "8",
      name: "스페이스하모니",
    },
    price: {
      originalPrice: "140400",
      sellingPrice: "106700",
      discountRate: "24",
    },
    imageUrl: "shelf.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "42210",
      },
    },
    reviewStatistic: {
      reviewCount: 16552,
      reviewAverage: 4.64,
    },
  },
  {
    id: "29",
    name: "천연 소재 러그 2",
    brand: {
      id: "9",
      name: "오가닉스피릿",
    },
    price: {
      originalPrice: "204700",
      sellingPrice: "174000",
      discountRate: "15",
    },
    imageUrl: "rug.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
  },
  {
    id: "30",
    name: "산업풍 침대 프레임 2",
    brand: {
      id: "10",
      name: "메탈릭드림",
    },
    price: {
      originalPrice: "428000",
      sellingPrice: "273900",
      discountRate: "36",
    },
    imageUrl: "bed-frame.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "3600",
      },
    },
    reviewStatistic: {
      reviewCount: 6937,
      reviewAverage: 4.76,
    },
  },
  {
    id: "31",
    name: "팝아트 벽 장식 2",
    brand: {
      id: "11",
      name: "컬러버스트",
    },
    price: {
      originalPrice: "331700",
      sellingPrice: "218900",
      discountRate: "34",
    },
    imageUrl: "pop-art.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
  },
  {
    id: "32",
    name: "공중 해먹 2",
    brand: {
      id: "12",
      name: "에어리무브",
    },
    price: {
      originalPrice: "200400",
      sellingPrice: "134300",
      discountRate: "33",
    },
    imageUrl: "hammock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "11610",
      },
    },
    reviewStatistic: {
      reviewCount: 12887,
      reviewAverage: 4.76,
    },
  },
  {
    id: "33",
    name: "접이식 다이닝 테이블 2",
    brand: {
      id: "13",
      name: "트랜스폼스페이스",
    },
    price: {
      originalPrice: "230900",
      sellingPrice: "184700",
      discountRate: "20",
    },
    imageUrl: "dining-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
  },
  {
    id: "34",
    name: "우드 스톤 램프 2",
    brand: {
      id: "14",
      name: "네이처블렌드",
    },
    price: {
      originalPrice: "264600",
      sellingPrice: "238200",
      discountRate: "10",
    },
    imageUrl: "wood-lamp.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
  },
  {
    id: "35",
    name: "무소음 벽시계 2",
    brand: {
      id: "15",
      name: "사일런트글로우",
    },
    price: {
      originalPrice: "309300",
      sellingPrice: "185600",
      discountRate: "40",
    },
    imageUrl: "wall-clock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
    },
    reviewStatistic: {
      reviewCount: 9898,
      reviewAverage: 4.66,
    },
  },
  {
    id: "36",
    name: "부유형 침대 2",
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
  },
  {
    id: "37",
    name: "거울 벽 장식 2",
    brand: {
      id: "17",
      name: "리플렉트아트",
    },
    price: {
      originalPrice: "286900",
      sellingPrice: "200800",
      discountRate: "30",
    },
    imageUrl: "mirror.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
  },
  {
    id: "38",
    name: "안락 1인용 소파 2",
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
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
  },
  {
    id: "39",
    name: "수저 세트 2",
    brand: {
      id: "19",
      name: "아르코스",
    },
    price: {
      originalPrice: "26500",
      sellingPrice: "9900",
      discountRate: "62",
    },
    imageUrl: "cutlery-set.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "7505",
      },
    },
    reviewStatistic: {
      reviewCount: 7189,
      reviewAverage: 4.77,
    },
  },
  {
    id: "40",
    name: "폭신 폭신 베개 2",
    brand: {
      id: "20",
      name: "아티젠",
    },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
  },
  {
    id: "41",
    name: "구름 소파 3",
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
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
  },
  {
    id: "42",
    name: "스파이럴 책장 3",
    brand: {
      id: "2",
      name: "트위스티코",
    },
    price: {
      originalPrice: "174100",
      sellingPrice: "155000",
      discountRate: "11",
    },
    imageUrl: "bookshelf.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
  },
  {
    id: "43",
    name: "별빛 펜던트 조명 3",
    brand: {
      id: "3",
      name: "글리머라이트",
    },
    price: {
      originalPrice: "81200",
      sellingPrice: "40600",
      discountRate: "50",
    },
    imageUrl: "pendant-lights.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
      reviewAverage: 4.78,
    },
  },
  {
    id: "44",
    name: "재생 우드 테이블 3",
    brand: {
      id: "4",
      name: "에코플럭스",
    },
    price: {
      originalPrice: "270800",
      sellingPrice: "146200",
      discountRate: "46",
    },
    imageUrl: "wood-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 8% 쿠폰",
        discountRatio: "8.0",
        couponAppliedPrice: "23736",
      },
    },
    reviewStatistic: {
      reviewCount: 20126,
      reviewAverage: 4.71,
    },
  },
  {
    id: "45",
    name: "명상 의자 3",
    brand: {
      id: "5",
      name: "젠플로우",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
  },
  {
    id: "46",
    name: "달빛 무드등 3",
    brand: {
      id: "6",
      name: "루나틱스",
    },
    price: {
      originalPrice: "362000",
      sellingPrice: "202700",
      discountRate: "44",
    },
    imageUrl: "mood-light.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "35910",
      },
    },
    reviewStatistic: {
      reviewCount: 23967,
      reviewAverage: 4.63,
    },
  },
  {
    id: "47",
    name: "모자이크 커피 테이블 3",
    brand: {
      id: "7",
      name: "픽셀퍼니",
    },
    price: {
      originalPrice: "150600",
      sellingPrice: "81300",
      discountRate: "46",
    },
    imageUrl: "coffee-table.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "8455",
      },
    },
    reviewStatistic: {
      reviewCount: 9393,
      reviewAverage: 4.76,
    },
  },
  {
    id: "48",
    name: "부유 선반 3",
    brand: {
      id: "8",
      name: "스페이스하모니",
    },
    price: {
      originalPrice: "140400",
      sellingPrice: "106700",
      discountRate: "24",
    },
    imageUrl: "shelf.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "42210",
      },
    },
    reviewStatistic: {
      reviewCount: 16552,
      reviewAverage: 4.64,
    },
  },
  {
    id: "49",
    name: "천연 소재 러그 3",
    brand: {
      id: "9",
      name: "오가닉스피릿",
    },
    price: {
      originalPrice: "204700",
      sellingPrice: "174000",
      discountRate: "15",
    },
    imageUrl: "rug.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
  },
  {
    id: "50",
    name: "산업풍 침대 프레임 3",
    brand: {
      id: "10",
      name: "메탈릭드림",
    },
    price: {
      originalPrice: "428000",
      sellingPrice: "273900",
      discountRate: "36",
    },
    imageUrl: "bed-frame.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "3600",
      },
    },
    reviewStatistic: {
      reviewCount: 6937,
      reviewAverage: 4.76,
    },
  },
  {
    id: "51",
    name: "팝아트 벽 장식 3",
    brand: {
      id: "11",
      name: "컬러버스트",
    },
    price: {
      originalPrice: "331700",
      sellingPrice: "218900",
      discountRate: "34",
    },
    imageUrl: "pop-art.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
  },
  {
    id: "52",
    name: "공중 해먹 3",
    brand: {
      id: "12",
      name: "에어리무브",
    },
    price: {
      originalPrice: "200400",
      sellingPrice: "134300",
      discountRate: "33",
    },
    imageUrl: "hammock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "11610",
      },
    },
    reviewStatistic: {
      reviewCount: 12887,
      reviewAverage: 4.76,
    },
  },
  {
    id: "53",
    name: "접이식 다이닝 테이블 3",
    brand: {
      id: "13",
      name: "트랜스폼스페이스",
    },
    price: {
      originalPrice: "230900",
      sellingPrice: "184700",
      discountRate: "20",
    },
    imageUrl: "dining-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
  },
  {
    id: "54",
    name: "우드 스톤 램프 3",
    brand: {
      id: "14",
      name: "네이처블렌드",
    },
    price: {
      originalPrice: "264600",
      sellingPrice: "238200",
      discountRate: "10",
    },
    imageUrl: "wood-lamp.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
  },
  {
    id: "55",
    name: "무소음 벽시계 3",
    brand: {
      id: "15",
      name: "사일런트글로우",
    },
    price: {
      originalPrice: "309300",
      sellingPrice: "185600",
      discountRate: "40",
    },
    imageUrl: "wall-clock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
    },
    reviewStatistic: {
      reviewCount: 9898,
      reviewAverage: 4.66,
    },
  },
  {
    id: "56",
    name: "부유형 침대 3",
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
  },
  {
    id: "57",
    name: "거울 벽 장식 3",
    brand: {
      id: "17",
      name: "리플렉트아트",
    },
    price: {
      originalPrice: "286900",
      sellingPrice: "200800",
      discountRate: "30",
    },
    imageUrl: "mirror.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
  },
  {
    id: "58",
    name: "안락 1인용 소파 3",
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
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
  },
  {
    id: "59",
    name: "수저 세트 3",
    brand: {
      id: "19",
      name: "아르코스",
    },
    price: {
      originalPrice: "26500",
      sellingPrice: "9900",
      discountRate: "62",
    },
    imageUrl: "cutlery-set.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "7505",
      },
    },
    reviewStatistic: {
      reviewCount: 7189,
      reviewAverage: 4.77,
    },
  },
  {
    id: "60",
    name: "폭신 폭신 베개 3",
    brand: {
      id: "20",
      name: "아티젠",
    },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
  },
  {
    id: "61",
    name: "구름 소파 4",
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
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
  },
  {
    id: "62",
    name: "스파이럴 책장 4",
    brand: {
      id: "2",
      name: "트위스티코",
    },
    price: {
      originalPrice: "174100",
      sellingPrice: "155000",
      discountRate: "11",
    },
    imageUrl: "bookshelf.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
  },
  {
    id: "63",
    name: "별빛 펜던트 조명 4",
    brand: {
      id: "3",
      name: "글리머라이트",
    },
    price: {
      originalPrice: "81200",
      sellingPrice: "40600",
      discountRate: "50",
    },
    imageUrl: "pendant-lights.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
      reviewAverage: 4.78,
    },
  },
  {
    id: "64",
    name: "재생 우드 테이블 4",
    brand: {
      id: "4",
      name: "에코플럭스",
    },
    price: {
      originalPrice: "270800",
      sellingPrice: "146200",
      discountRate: "46",
    },
    imageUrl: "wood-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 8% 쿠폰",
        discountRatio: "8.0",
        couponAppliedPrice: "23736",
      },
    },
    reviewStatistic: {
      reviewCount: 20126,
      reviewAverage: 4.71,
    },
  },
  {
    id: "65",
    name: "명상 의자 4",
    brand: {
      id: "5",
      name: "젠플로우",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
  },
  {
    id: "66",
    name: "달빛 무드등 4",
    brand: {
      id: "6",
      name: "루나틱스",
    },
    price: {
      originalPrice: "362000",
      sellingPrice: "202700",
      discountRate: "44",
    },
    imageUrl: "mood-light.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "35910",
      },
    },
    reviewStatistic: {
      reviewCount: 23967,
      reviewAverage: 4.63,
    },
  },
  {
    id: "67",
    name: "모자이크 커피 테이블 4",
    brand: {
      id: "7",
      name: "픽셀퍼니",
    },
    price: {
      originalPrice: "150600",
      sellingPrice: "81300",
      discountRate: "46",
    },
    imageUrl: "coffee-table.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "8455",
      },
    },
    reviewStatistic: {
      reviewCount: 9393,
      reviewAverage: 4.76,
    },
  },
  {
    id: "68",
    name: "부유 선반 4",
    brand: {
      id: "8",
      name: "스페이스하모니",
    },
    price: {
      originalPrice: "140400",
      sellingPrice: "106700",
      discountRate: "24",
    },
    imageUrl: "shelf.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "42210",
      },
    },
    reviewStatistic: {
      reviewCount: 16552,
      reviewAverage: 4.64,
    },
  },
  {
    id: "69",
    name: "천연 소재 러그 4",
    brand: {
      id: "9",
      name: "오가닉스피릿",
    },
    price: {
      originalPrice: "204700",
      sellingPrice: "174000",
      discountRate: "15",
    },
    imageUrl: "rug.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
  },
  {
    id: "70",
    name: "산업풍 침대 프레임 4",
    brand: {
      id: "10",
      name: "메탈릭드림",
    },
    price: {
      originalPrice: "428000",
      sellingPrice: "273900",
      discountRate: "36",
    },
    imageUrl: "bed-frame.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "3600",
      },
    },
    reviewStatistic: {
      reviewCount: 6937,
      reviewAverage: 4.76,
    },
  },
  {
    id: "71",
    name: "팝아트 벽 장식 4",
    brand: {
      id: "11",
      name: "컬러버스트",
    },
    price: {
      originalPrice: "331700",
      sellingPrice: "218900",
      discountRate: "34",
    },
    imageUrl: "pop-art.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
  },
  {
    id: "72",
    name: "공중 해먹 4",
    brand: {
      id: "12",
      name: "에어리무브",
    },
    price: {
      originalPrice: "200400",
      sellingPrice: "134300",
      discountRate: "33",
    },
    imageUrl: "hammock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "11610",
      },
    },
    reviewStatistic: {
      reviewCount: 12887,
      reviewAverage: 4.76,
    },
  },
  {
    id: "73",
    name: "접이식 다이닝 테이블 4",
    brand: {
      id: "13",
      name: "트랜스폼스페이스",
    },
    price: {
      originalPrice: "230900",
      sellingPrice: "184700",
      discountRate: "20",
    },
    imageUrl: "dining-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
  },
  {
    id: "74",
    name: "우드 스톤 램프 4",
    brand: {
      id: "14",
      name: "네이처블렌드",
    },
    price: {
      originalPrice: "264600",
      sellingPrice: "238200",
      discountRate: "10",
    },
    imageUrl: "wood-lamp.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
  },
  {
    id: "75",
    name: "무소음 벽시계 4",
    brand: {
      id: "15",
      name: "사일런트글로우",
    },
    price: {
      originalPrice: "309300",
      sellingPrice: "185600",
      discountRate: "40",
    },
    imageUrl: "wall-clock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
    },
    reviewStatistic: {
      reviewCount: 9898,
      reviewAverage: 4.66,
    },
  },
  {
    id: "76",
    name: "부유형 침대 4",
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
  },
  {
    id: "77",
    name: "거울 벽 장식 4",
    brand: {
      id: "17",
      name: "리플렉트아트",
    },
    price: {
      originalPrice: "286900",
      sellingPrice: "200800",
      discountRate: "30",
    },
    imageUrl: "mirror.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
  },
  {
    id: "78",
    name: "안락 1인용 소파 4",
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
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
  },
  {
    id: "79",
    name: "수저 세트 4",
    brand: {
      id: "19",
      name: "아르코스",
    },
    price: {
      originalPrice: "26500",
      sellingPrice: "9900",
      discountRate: "62",
    },
    imageUrl: "cutlery-set.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "7505",
      },
    },
    reviewStatistic: {
      reviewCount: 7189,
      reviewAverage: 4.77,
    },
  },
  {
    id: "80",
    name: "폭신 폭신 베개 4",
    brand: {
      id: "20",
      name: "아티젠",
    },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
  },
  {
    id: "81",
    name: "구름 소파 5",
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
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
  },
  {
    id: "82",
    name: "스파이럴 책장 5",
    brand: {
      id: "2",
      name: "트위스티코",
    },
    price: {
      originalPrice: "174100",
      sellingPrice: "155000",
      discountRate: "11",
    },
    imageUrl: "bookshelf.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
  },
  {
    id: "83",
    name: "별빛 펜던트 조명 5",
    brand: {
      id: "3",
      name: "글리머라이트",
    },
    price: {
      originalPrice: "81200",
      sellingPrice: "40600",
      discountRate: "50",
    },
    imageUrl: "pendant-lights.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
      reviewAverage: 4.78,
    },
  },
  {
    id: "84",
    name: "재생 우드 테이블 5",
    brand: {
      id: "4",
      name: "에코플럭스",
    },
    price: {
      originalPrice: "270800",
      sellingPrice: "146200",
      discountRate: "46",
    },
    imageUrl: "wood-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 8% 쿠폰",
        discountRatio: "8.0",
        couponAppliedPrice: "23736",
      },
    },
    reviewStatistic: {
      reviewCount: 20126,
      reviewAverage: 4.71,
    },
  },
  {
    id: "85",
    name: "명상 의자 5",
    brand: {
      id: "5",
      name: "젠플로우",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
  },
  {
    id: "86",
    name: "달빛 무드등 5",
    brand: {
      id: "6",
      name: "루나틱스",
    },
    price: {
      originalPrice: "362000",
      sellingPrice: "202700",
      discountRate: "44",
    },
    imageUrl: "mood-light.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "35910",
      },
    },
    reviewStatistic: {
      reviewCount: 23967,
      reviewAverage: 4.63,
    },
  },
  {
    id: "87",
    name: "모자이크 커피 테이블 5",
    brand: {
      id: "7",
      name: "픽셀퍼니",
    },
    price: {
      originalPrice: "150600",
      sellingPrice: "81300",
      discountRate: "46",
    },
    imageUrl: "coffee-table.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "8455",
      },
    },
    reviewStatistic: {
      reviewCount: 9393,
      reviewAverage: 4.76,
    },
  },
  {
    id: "88",
    name: "부유 선반 5",
    brand: {
      id: "8",
      name: "스페이스하모니",
    },
    price: {
      originalPrice: "140400",
      sellingPrice: "106700",
      discountRate: "24",
    },
    imageUrl: "shelf.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "42210",
      },
    },
    reviewStatistic: {
      reviewCount: 16552,
      reviewAverage: 4.64,
    },
  },
  {
    id: "89",
    name: "천연 소재 러그 5",
    brand: {
      id: "9",
      name: "오가닉스피릿",
    },
    price: {
      originalPrice: "204700",
      sellingPrice: "174000",
      discountRate: "15",
    },
    imageUrl: "rug.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
  },
  {
    id: "90",
    name: "산업풍 침대 프레임 5",
    brand: {
      id: "10",
      name: "메탈릭드림",
    },
    price: {
      originalPrice: "428000",
      sellingPrice: "273900",
      discountRate: "36",
    },
    imageUrl: "bed-frame.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "12:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "3600",
      },
    },
    reviewStatistic: {
      reviewCount: 6937,
      reviewAverage: 4.76,
    },
  },
  {
    id: "91",
    name: "팝아트 벽 장식 5",
    brand: {
      id: "11",
      name: "컬러버스트",
    },
    price: {
      originalPrice: "331700",
      sellingPrice: "218900",
      discountRate: "34",
    },
    imageUrl: "pop-art.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
  },
  {
    id: "92",
    name: "공중 해먹 5",
    brand: {
      id: "12",
      name: "에어리무브",
    },
    price: {
      originalPrice: "200400",
      sellingPrice: "134300",
      discountRate: "33",
    },
    imageUrl: "hammock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 10% 쿠폰",
        discountRatio: "10.0",
        couponAppliedPrice: "11610",
      },
    },
    reviewStatistic: {
      reviewCount: 12887,
      reviewAverage: 4.76,
    },
  },
  {
    id: "93",
    name: "접이식 다이닝 테이블 5",
    brand: {
      id: "13",
      name: "트랜스폼스페이스",
    },
    price: {
      originalPrice: "230900",
      sellingPrice: "184700",
      discountRate: "20",
    },
    imageUrl: "dining-table.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
  },
  {
    id: "94",
    name: "우드 스톤 램프 5",
    brand: {
      id: "14",
      name: "네이처블렌드",
    },
    price: {
      originalPrice: "264600",
      sellingPrice: "238200",
      discountRate: "10",
    },
    imageUrl: "wood-lamp.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
  },
  {
    id: "95",
    name: "무소음 벽시계 5",
    brand: {
      id: "15",
      name: "사일런트글로우",
    },
    price: {
      originalPrice: "309300",
      sellingPrice: "185600",
      discountRate: "40",
    },
    imageUrl: "wall-clock.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
    },
    reviewStatistic: {
      reviewCount: 9898,
      reviewAverage: 4.66,
    },
  },
  {
    id: "96",
    name: "부유형 침대 5",
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
  },
  {
    id: "97",
    name: "거울 벽 장식 5",
    brand: {
      id: "17",
      name: "리플렉트아트",
    },
    price: {
      originalPrice: "286900",
      sellingPrice: "200800",
      discountRate: "30",
    },
    imageUrl: "mirror.png",
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
  },
  {
    id: "98",
    name: "안락 1인용 소파 5",
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
    badgeProperties: {
      isFreeDelivery: true,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "14:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
  },
  {
    id: "99",
    name: "수저 세트 5",
    brand: {
      id: "19",
      name: "아르코스",
    },
    price: {
      originalPrice: "26500",
      sellingPrice: "9900",
      discountRate: "62",
    },
    imageUrl: "cutlery-set.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
      couponBadge: {
        displayText: "최대 5% 쿠폰",
        discountRatio: "5.0",
        couponAppliedPrice: "7505",
      },
    },
    reviewStatistic: {
      reviewCount: 7189,
      reviewAverage: 4.77,
    },
  },
  {
    id: "100",
    name: "폭신 폭신 베개 5",
    brand: {
      id: "20",
      name: "아티젠",
    },
    price: {
      originalPrice: "89400",
      sellingPrice: "62600",
      discountRate: "30",
    },
    imageUrl: "pillow.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "15:00",
        description: "평일 %s까지 결제시",
        departureTodayExp: "B",
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
  },
];
