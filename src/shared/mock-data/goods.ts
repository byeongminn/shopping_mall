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
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 3, explain: "소파 방석 추가 (화이트)", price: 49000 },
      { id: 4, explain: "소파 방석 추가 (그레이)", price: 49000 },
      { id: 5, explain: "소파 방석 추가 (네이비)", price: 49000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 1, explain: "구름 소파(2인용)", price: 154000 },
      { id: 2, explain: "구름 소파(3인용)", price: 198000 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/bookshelf.png" alt="스파이럴 책장" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 살리는 스파이럴 디자인</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">책장이 곧 인테리어가 되는 <strong style="color: #000;">스파이럴 책장</strong>으로 집안을 한층 세련되게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 6, explain: "책장 확장 선반 추가 (화이트)", price: 27000 },
      { id: 7, explain: "책장 확장 선반 추가 (월넛)", price: 29000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 3, explain: "스파이럴 책장 (화이트)", price: 155000 },
      { id: 4, explain: "스파이럴 책장 (월넛)", price: 165000 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/pendant-lights.png" alt="별빛 펜던트 조명" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">밤하늘처럼 빛나는 공간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">감각적인 인테리어 완성을 위한 <strong style="color: #000;">별빛 펜던트 조명</strong>으로 당신의 집을 한층 밝고 세련되게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 8, explain: "LED 전구 추가 (전구색)", price: 8000 },
      { id: 9, explain: "LED 전구 추가 (주광색)", price: 8000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 5, explain: "별빛 펜던트 조명 (골드)", price: 40600 },
      { id: 6, explain: "별빛 펜던트 조명 (실버)", price: 42600 },
    ],
    subImages: [],
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wood-table.png" alt="재생 우드 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">지속 가능한 공간의 완성</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">친환경 라이프를 위한 <strong style="color: #000;">재생 우드 테이블</strong>로 집안에 자연의 따뜻함을 더해보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 10, explain: "테이블 보호 패드 추가 (투명)", price: 22000 },
      { id: 11, explain: "테이블 보호 패드 추가 (우드그레인)", price: 25000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 7, explain: "재생 우드 테이블 (1200mm)", price: 146200 },
      { id: 8, explain: "재생 우드 테이블 (1500mm)", price: 176200 },
    ],
    subImages: [],
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
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/meditation-chair.png" alt="명상 의자" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">마음을 고요히 하는 공간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">편안한 자세로 집중력을 높여주는 <strong style="color: #000;">명상 의자</strong>로 하루의 스트레스를 날려보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 12, explain: "의자 커버 추가 (화이트)", price: 18000 },
      { id: 13, explain: "의자 커버 추가 (차콜)", price: 18000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 9, explain: "명상 의자 (기본형)", price: 112600 },
      { id: 10, explain: "명상 의자 (쿠션형)", price: 132600 },
    ],
    subImages: [],
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
    delivery: {
      fee: 3500,
      backwoodsFee: 6000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/mood-light.png" alt="달빛 무드등" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">은은하게 빛나는 달빛</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">로맨틱한 분위기를 연출하는 <strong style="color: #000;">달빛 무드등</strong>으로 공간을 특별하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 14, explain: "리모컨 추가", price: 15000 },
      { id: 15, explain: "밝기 조절 키트", price: 20000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 11, explain: "달빛 무드등 (소형)", price: 202700 },
      { id: 12, explain: "달빛 무드등 (대형)", price: 252700 },
    ],
    subImages: [],
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
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 80000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/coffee-table.png" alt="모자이크 커피 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 포인트를 주는 테이블</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">아트적인 감각을 살린 <strong style="color: #000;">모자이크 커피 테이블</strong>로 거실을 스타일리시하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 16, explain: "보호 유리 추가", price: 12000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 13, explain: "모자이크 커피 테이블 (블랙 화이트)", price: 81300 },
      { id: 14, explain: "모자이크 커피 테이블 (그레이 톤)", price: 85300 },
    ],
    subImages: [],
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/shelf.png" alt="부유 선반" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">벽 공간을 효율적으로 활용</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">깔끔하고 모던한 <strong style="color: #000;">부유 선반</strong>으로 인테리어와 수납을 동시에 해결하세요.</p>' +
      "</div>",
    extraOptions: [{ id: 17, explain: "추가 브래킷 세트", price: 7000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 15, explain: "부유 선반 (60cm)", price: 106700 },
      { id: 16, explain: "부유 선반 (80cm)", price: 126700 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/rug.png" alt="천연 소재 러그" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연의 촉감을 담은 러그</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">친환경 공간을 위한 <strong style="color: #000;">천연 소재 러그</strong>로 건강한 집을 만들어보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 18, explain: "미끄럼 방지 매트 추가", price: 10000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 17, explain: "러그 (소형)", price: 174000 },
      { id: 18, explain: "러그 (대형)", price: 214000 },
    ],
    subImages: [],
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
    delivery: {
      fee: 4000,
      backwoodsFee: 7000,
      freeThreshold: 150000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/bed-frame.png" alt="산업풍 침대 프레임" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">트렌디한 인더스트리얼 무드</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">거친 매력의 <strong style="color: #000;">산업풍 침대 프레임</strong>으로 침실을 특별하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 19, explain: "매트리스 추가 (싱글)", price: 120000 },
      { id: 20, explain: "매트리스 추가 (퀸)", price: 180000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 19, explain: "침대 프레임 (싱글)", price: 273900 },
      { id: 20, explain: "침대 프레임 (퀸)", price: 313900 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 120000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/pop-art.png" alt="팝아트 벽 장식" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 생동감을 불어넣다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">강렬한 색채와 디자인의 <strong style="color: #000;">팝아트 벽 장식</strong>으로 집안을 갤러리처럼 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 21, explain: "프레임 변경 (블랙)", price: 15000 },
      { id: 22, explain: "프레임 변경 (골드)", price: 18000 },
    ],
    firstDepthName: "프레임 선택",
    options: [
      { id: 21, explain: "팝아트 벽 장식 (M)", price: 218900 },
      { id: 22, explain: "팝아트 벽 장식 (L)", price: 258900 },
    ],
    subImages: [],
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
      '<img src="https://shopping-mall-murex.vercel.app/images/hammock.png" alt="공중 해먹" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">하늘에 떠 있는 휴식</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">일상의 피로를 풀어주는 <strong style="color: #000;">공중 해먹</strong>으로 여유로운 시간을 즐겨보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 23, explain: "해먹 고정 스트랩 추가", price: 7000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 23, explain: "공중 해먹 (그린)", price: 134300 },
      { id: 24, explain: "공중 해먹 (블루)", price: 139300 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/dining-table.png" alt="접이식 다이닝 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 자유롭게 변형하다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">작은 공간에도 완벽하게 어울리는 <strong style="color: #000;">접이식 다이닝 테이블</strong>로 실용적인 인테리어를 완성하세요.</p>' +
      "</div>",
    extraOptions: [{ id: 25, explain: "보호 패드 추가", price: 10000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 25, explain: "다이닝 테이블 (4인용)", price: 184700 },
      { id: 26, explain: "다이닝 테이블 (6인용)", price: 204700 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wood-lamp.png" alt="우드 스톤 램프" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연에서 온 빛</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">우드와 스톤의 조화를 담은 <strong style="color: #000;">우드 스톤 램프</strong>로 공간을 따뜻하게 밝혀보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 27, explain: "램프 전구 추가", price: 12000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 27, explain: "우드 스톤 램프 (내추럴)", price: 238200 },
      { id: 28, explain: "우드 스톤 램프 (다크 우드)", price: 248200 },
    ],
    subImages: [],
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wall-clock.png" alt="무소음 벽시계" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">조용히 흐르는 시간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">소음 없이 고요한 <strong style="color: #000;">무소음 벽시계</strong>로 공간의 품격을 높여보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 29, explain: "배터리 추가", price: 3000 }],
    firstDepthName: "프레임 선택",
    options: [
      { id: 29, explain: "무소음 벽시계 (블랙)", price: 185600 },
      { id: 30, explain: "무소음 벽시계 (실버)", price: 195600 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/mirror.png" alt="거울 벽 장식" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">빛과 공간을 넓히다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">세련된 <strong style="color: #000;">거울 벽 장식</strong>으로 공간에 깊이와 스타일을 더해보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 33, explain: "프레임 색상 변경 (골드)", price: 12000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 33, explain: "거울 벽 장식 (M)", price: 200800 },
      { id: 34, explain: "거울 벽 장식 (L)", price: 220800 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/single-sofa.png" alt="안락 1인용 소파" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">혼자만의 아늑함</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">편안함과 스타일을 모두 갖춘 <strong style="color: #000;">안락 1인용 소파</strong>로 휴식의 질을 높여보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 35, explain: "소파 커버 추가 (화이트)", price: 18000 },
      { id: 36, explain: "소파 커버 추가 (차콜)", price: 18000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 35, explain: "안락 1인용 소파 (베이지)", price: 133600 },
      { id: 36, explain: "안락 1인용 소파 (그레이)", price: 143600 },
    ],
    subImages: [],
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 30000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/cutlery-set.png" alt="수저 세트" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">식탁의 품격을 높이다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">고급스러운 디자인의 <strong style="color: #000;">수저 세트</strong>로 식사를 더욱 특별하게 즐겨보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 37, explain: "수저 케이스 추가", price: 5000 }],
    firstDepthName: "구성 선택",
    options: [
      { id: 37, explain: "수저 세트 (2인용)", price: 9900 },
      { id: 38, explain: "수저 세트 (4인용)", price: 17900 },
    ],
    subImages: [],
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
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 39, explain: "베개 커버 추가 (화이트)", price: 10000 },
      { id: 40, explain: "베개 커버 추가 (그레이)", price: 10000 },
    ],
    firstDepthName: "타입 선택",
    options: [
      { id: 39, explain: "폭신 폭신 베개 (일반형)", price: 62600 },
      { id: 40, explain: "폭신 폭신 베개 (경추형)", price: 72500 },
    ],
    subImages: [],
  },
  {
    id: "21",
    name: "구름 소파 2",
    brand: {
      id: "21",
      name: "플러피누들 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 3, explain: "소파 방석 추가 (화이트)", price: 49000 },
      { id: 4, explain: "소파 방석 추가 (그레이)", price: 49000 },
      { id: 5, explain: "소파 방석 추가 (네이비)", price: 49000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 1, explain: "구름 소파(2인용)", price: 154000 },
      { id: 2, explain: "구름 소파(3인용)", price: 198000 },
    ],
    subImages: [],
  },
  {
    id: "22",
    name: "스파이럴 책장 2",
    brand: {
      id: "22",
      name: "트위스티코 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/bookshelf.png" alt="스파이럴 책장" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 살리는 스파이럴 디자인</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">책장이 곧 인테리어가 되는 <strong style="color: #000;">스파이럴 책장</strong>으로 집안을 한층 세련되게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 6, explain: "책장 확장 선반 추가 (화이트)", price: 27000 },
      { id: 7, explain: "책장 확장 선반 추가 (월넛)", price: 29000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 3, explain: "스파이럴 책장 (화이트)", price: 155000 },
      { id: 4, explain: "스파이럴 책장 (월넛)", price: 165000 },
    ],
    subImages: [],
  },
  {
    id: "23",
    name: "별빛 펜던트 조명 2",
    brand: {
      id: "23",
      name: "글리머라이트 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/pendant-lights.png" alt="별빛 펜던트 조명" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">밤하늘처럼 빛나는 공간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">감각적인 인테리어 완성을 위한 <strong style="color: #000;">별빛 펜던트 조명</strong>으로 당신의 집을 한층 밝고 세련되게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 8, explain: "LED 전구 추가 (전구색)", price: 8000 },
      { id: 9, explain: "LED 전구 추가 (주광색)", price: 8000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 5, explain: "별빛 펜던트 조명 (골드)", price: 40600 },
      { id: 6, explain: "별빛 펜던트 조명 (실버)", price: 42600 },
    ],
    subImages: [],
  },
  {
    id: "24",
    name: "재생 우드 테이블 2",
    brand: {
      id: "24",
      name: "에코플럭스 2",
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wood-table.png" alt="재생 우드 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">지속 가능한 공간의 완성</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">친환경 라이프를 위한 <strong style="color: #000;">재생 우드 테이블</strong>로 집안에 자연의 따뜻함을 더해보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 10, explain: "테이블 보호 패드 추가 (투명)", price: 22000 },
      { id: 11, explain: "테이블 보호 패드 추가 (우드그레인)", price: 25000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 7, explain: "재생 우드 테이블 (1200mm)", price: 146200 },
      { id: 8, explain: "재생 우드 테이블 (1500mm)", price: 176200 },
    ],
    subImages: [],
  },
  {
    id: "25",
    name: "명상 의자 2",
    brand: {
      id: "25",
      name: "젠플로우 2",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/meditation-chair.png" alt="명상 의자" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">마음을 고요히 하는 공간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">편안한 자세로 집중력을 높여주는 <strong style="color: #000;">명상 의자</strong>로 하루의 스트레스를 날려보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 12, explain: "의자 커버 추가 (화이트)", price: 18000 },
      { id: 13, explain: "의자 커버 추가 (차콜)", price: 18000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 9, explain: "명상 의자 (기본형)", price: 112600 },
      { id: 10, explain: "명상 의자 (쿠션형)", price: 132600 },
    ],
    subImages: [],
  },
  {
    id: "26",
    name: "달빛 무드등 2",
    brand: {
      id: "26",
      name: "루나틱스 2",
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
    delivery: {
      fee: 3500,
      backwoodsFee: 6000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/mood-light.png" alt="달빛 무드등" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">은은하게 빛나는 달빛</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">로맨틱한 분위기를 연출하는 <strong style="color: #000;">달빛 무드등</strong>으로 공간을 특별하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 14, explain: "리모컨 추가", price: 15000 },
      { id: 15, explain: "밝기 조절 키트", price: 20000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 11, explain: "달빛 무드등 (소형)", price: 202700 },
      { id: 12, explain: "달빛 무드등 (대형)", price: 252700 },
    ],
    subImages: [],
  },
  {
    id: "27",
    name: "모자이크 커피 테이블 2",
    brand: {
      id: "27",
      name: "픽셀퍼니 2",
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
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 80000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/coffee-table.png" alt="모자이크 커피 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 포인트를 주는 테이블</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">아트적인 감각을 살린 <strong style="color: #000;">모자이크 커피 테이블</strong>로 거실을 스타일리시하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 16, explain: "보호 유리 추가", price: 12000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 13, explain: "모자이크 커피 테이블 (블랙 화이트)", price: 81300 },
      { id: 14, explain: "모자이크 커피 테이블 (그레이 톤)", price: 85300 },
    ],
    subImages: [],
  },
  {
    id: "28",
    name: "부유 선반 2",
    brand: {
      id: "28",
      name: "스페이스하모니 2",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/shelf.png" alt="부유 선반" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">벽 공간을 효율적으로 활용</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">깔끔하고 모던한 <strong style="color: #000;">부유 선반</strong>으로 인테리어와 수납을 동시에 해결하세요.</p>' +
      "</div>",
    extraOptions: [{ id: 17, explain: "추가 브래킷 세트", price: 7000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 15, explain: "부유 선반 (60cm)", price: 106700 },
      { id: 16, explain: "부유 선반 (80cm)", price: 126700 },
    ],
    subImages: [],
  },
  {
    id: "29",
    name: "천연 소재 러그 2",
    brand: {
      id: "29",
      name: "오가닉스피릿 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/rug.png" alt="천연 소재 러그" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연의 촉감을 담은 러그</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">친환경 공간을 위한 <strong style="color: #000;">천연 소재 러그</strong>로 건강한 집을 만들어보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 18, explain: "미끄럼 방지 매트 추가", price: 10000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 17, explain: "러그 (소형)", price: 174000 },
      { id: 18, explain: "러그 (대형)", price: 214000 },
    ],
    subImages: [],
  },
  {
    id: "30",
    name: "산업풍 침대 프레임 2",
    brand: {
      id: "30",
      name: "메탈릭드림 2",
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
    delivery: {
      fee: 4000,
      backwoodsFee: 7000,
      freeThreshold: 150000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/bed-frame.png" alt="산업풍 침대 프레임" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">트렌디한 인더스트리얼 무드</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">거친 매력의 <strong style="color: #000;">산업풍 침대 프레임</strong>으로 침실을 특별하게 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 19, explain: "매트리스 추가 (싱글)", price: 120000 },
      { id: 20, explain: "매트리스 추가 (퀸)", price: 180000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 19, explain: "침대 프레임 (싱글)", price: 273900 },
      { id: 20, explain: "침대 프레임 (퀸)", price: 313900 },
    ],
    subImages: [],
  },
  {
    id: "31",
    name: "팝아트 벽 장식 2",
    brand: {
      id: "31",
      name: "컬러버스트 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 120000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/pop-art.png" alt="팝아트 벽 장식" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 생동감을 불어넣다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">강렬한 색채와 디자인의 <strong style="color: #000;">팝아트 벽 장식</strong>으로 집안을 갤러리처럼 꾸며보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 21, explain: "프레임 변경 (블랙)", price: 15000 },
      { id: 22, explain: "프레임 변경 (골드)", price: 18000 },
    ],
    firstDepthName: "프레임 선택",
    options: [
      { id: 21, explain: "팝아트 벽 장식 (M)", price: 218900 },
      { id: 22, explain: "팝아트 벽 장식 (L)", price: 258900 },
    ],
    subImages: [],
  },
  {
    id: "32",
    name: "공중 해먹 2",
    brand: {
      id: "32",
      name: "에어리무브 2",
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
      '<img src="https://shopping-mall-murex.vercel.app/images/hammock.png" alt="공중 해먹" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">하늘에 떠 있는 휴식</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">일상의 피로를 풀어주는 <strong style="color: #000;">공중 해먹</strong>으로 여유로운 시간을 즐겨보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 23, explain: "해먹 고정 스트랩 추가", price: 7000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 23, explain: "공중 해먹 (그린)", price: 134300 },
      { id: 24, explain: "공중 해먹 (블루)", price: 139300 },
    ],
    subImages: [],
  },
  {
    id: "33",
    name: "접이식 다이닝 테이블 2",
    brand: {
      id: "33",
      name: "트랜스폼스페이스 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/dining-table.png" alt="접이식 다이닝 테이블" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 자유롭게 변형하다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">작은 공간에도 완벽하게 어울리는 <strong style="color: #000;">접이식 다이닝 테이블</strong>로 실용적인 인테리어를 완성하세요.</p>' +
      "</div>",
    extraOptions: [{ id: 25, explain: "보호 패드 추가", price: 10000 }],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 25, explain: "다이닝 테이블 (4인용)", price: 184700 },
      { id: 26, explain: "다이닝 테이블 (6인용)", price: 204700 },
    ],
    subImages: [],
  },
  {
    id: "34",
    name: "우드 스톤 램프 2",
    brand: {
      id: "34",
      name: "네이처블렌드 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wood-lamp.png" alt="우드 스톤 램프" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연에서 온 빛</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">우드와 스톤의 조화를 담은 <strong style="color: #000;">우드 스톤 램프</strong>로 공간을 따뜻하게 밝혀보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 27, explain: "램프 전구 추가", price: 12000 }],
    firstDepthName: "색상 선택",
    options: [
      { id: 27, explain: "우드 스톤 램프 (내추럴)", price: 238200 },
      { id: 28, explain: "우드 스톤 램프 (다크 우드)", price: 248200 },
    ],
    subImages: [],
  },
  {
    id: "35",
    name: "무소음 벽시계 2",
    brand: {
      id: "35",
      name: "사일런트글로우 2",
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
      '<img src="https://shopping-mall-murex.vercel.app/images/wall-clock.png" alt="무소음 벽시계" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">조용히 흐르는 시간</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">소음 없이 고요한 <strong style="color: #000;">무소음 벽시계</strong>로 공간의 품격을 높여보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 29, explain: "배터리 추가", price: 3000 }],
    firstDepthName: "프레임 선택",
    options: [
      { id: 29, explain: "무소음 벽시계 (블랙)", price: 185600 },
      { id: 30, explain: "무소음 벽시계 (실버)", price: 195600 },
    ],
    subImages: [],
  },
  {
    id: "36",
    name: "부유형 침대 2",
    brand: {
      id: "36",
      name: "플로팅드림 2",
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
  },
  {
    id: "37",
    name: "거울 벽 장식 2",
    brand: {
      id: "37",
      name: "리플렉트아트 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/mirror.png" alt="거울 벽 장식" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">빛과 공간을 넓히다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">세련된 <strong style="color: #000;">거울 벽 장식</strong>으로 공간에 깊이와 스타일을 더해보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 33, explain: "프레임 색상 변경 (골드)", price: 12000 },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      { id: 33, explain: "거울 벽 장식 (M)", price: 200800 },
      { id: 34, explain: "거울 벽 장식 (L)", price: 220800 },
    ],
    subImages: [],
  },
  {
    id: "38",
    name: "안락 1인용 소파 2",
    brand: {
      id: "38",
      name: "코지코브 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
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
      '<img src="https://shopping-mall-murex.vercel.app/images/single-sofa.png" alt="안락 1인용 소파" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">혼자만의 아늑함</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">편안함과 스타일을 모두 갖춘 <strong style="color: #000;">안락 1인용 소파</strong>로 휴식의 질을 높여보세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 35, explain: "소파 커버 추가 (화이트)", price: 18000 },
      { id: 36, explain: "소파 커버 추가 (차콜)", price: 18000 },
    ],
    firstDepthName: "색상 선택",
    options: [
      { id: 35, explain: "안락 1인용 소파 (베이지)", price: 133600 },
      { id: 36, explain: "안락 1인용 소파 (그레이)", price: 143600 },
    ],
    subImages: [],
  },
  {
    id: "39",
    name: "수저 세트 2",
    brand: {
      id: "39",
      name: "아르코스 2",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 30000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/cutlery-set.png" alt="수저 세트" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">식탁의 품격을 높이다</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">고급스러운 디자인의 <strong style="color: #000;">수저 세트</strong>로 식사를 더욱 특별하게 즐겨보세요.</p>' +
      "</div>",
    extraOptions: [{ id: 37, explain: "수저 케이스 추가", price: 5000 }],
    firstDepthName: "구성 선택",
    options: [
      { id: 37, explain: "수저 세트 (2인용)", price: 9900 },
      { id: 38, explain: "수저 세트 (4인용)", price: 17900 },
    ],
    subImages: [],
  },
  {
    id: "40",
    name: "폭신 폭신 베개 2",
    brand: {
      id: "40",
      name: "아티젠 2",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
      '<div style="display: flex; justify-content: center; margin-bottom: 20px;">' +
      '<img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" />' +
      "</div>" +
      '<h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2>' +
      '<p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p>' +
      "</div>",
    extraOptions: [
      { id: 39, explain: "베개 커버 추가 (화이트)", price: 10000 },
      { id: 40, explain: "베개 커버 추가 (그레이)", price: 10000 },
    ],
    firstDepthName: "타입 선택",
    options: [
      { id: 39, explain: "폭신 폭신 베개 (일반형)", price: 62600 },
      { id: 40, explain: "폭신 폭신 베개 (경추형)", price: 72500 },
    ],
    subImages: [],
  },

  {
    id: "41",
    name: "구름 소파 3",
    brand: {
      id: "41",
      name: "플러피누들 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2><p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 3,
        explain: "소파 방석 추가 (화이트)",
        price: 49000,
      },
      {
        id: 4,
        explain: "소파 방석 추가 (그레이)",
        price: 49000,
      },
      {
        id: 5,
        explain: "소파 방석 추가 (네이비)",
        price: 49000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 1,
        explain: "구름 소파(2인용)",
        price: 154000,
      },
      {
        id: 2,
        explain: "구름 소파(3인용)",
        price: 198000,
      },
    ],
    subImages: [],
  },
  {
    id: "42",
    name: "스파이럴 책장 3",
    brand: {
      id: "42",
      name: "트위스티코 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bookshelf.png" alt="스파이럴 책장" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 살리는 스파이럴 디자인</h2><p style="text-align: center; font-size: 18px; color: #444;">책장이 곧 인테리어가 되는 <strong style="color: #000;">스파이럴 책장</strong>으로 집안을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 6,
        explain: "책장 확장 선반 추가 (화이트)",
        price: 27000,
      },
      {
        id: 7,
        explain: "책장 확장 선반 추가 (월넛)",
        price: 29000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 3,
        explain: "스파이럴 책장 (화이트)",
        price: 155000,
      },
      {
        id: 4,
        explain: "스파이럴 책장 (월넛)",
        price: 165000,
      },
    ],
    subImages: [],
  },
  {
    id: "43",
    name: "별빛 펜던트 조명 3",
    brand: {
      id: "43",
      name: "글리머라이트 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pendant-lights.png" alt="별빛 펜던트 조명" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">밤하늘처럼 빛나는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">감각적인 인테리어 완성을 위한 <strong style="color: #000;">별빛 펜던트 조명</strong>으로 당신의 집을 한층 밝고 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 8,
        explain: "LED 전구 추가 (전구색)",
        price: 8000,
      },
      {
        id: 9,
        explain: "LED 전구 추가 (주광색)",
        price: 8000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 5,
        explain: "별빛 펜던트 조명 (골드)",
        price: 40600,
      },
      {
        id: 6,
        explain: "별빛 펜던트 조명 (실버)",
        price: 42600,
      },
    ],
    subImages: [],
  },
  {
    id: "44",
    name: "재생 우드 테이블 3",
    brand: {
      id: "44",
      name: "에코플럭스 3",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-table.png" alt="재생 우드 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">지속 가능한 공간의 완성</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 라이프를 위한 <strong style="color: #000;">재생 우드 테이블</strong>로 집안에 자연의 따뜻함을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 10,
        explain: "테이블 보호 패드 추가 (투명)",
        price: 22000,
      },
      {
        id: 11,
        explain: "테이블 보호 패드 추가 (우드그레인)",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 7,
        explain: "재생 우드 테이블 (1200mm)",
        price: 146200,
      },
      {
        id: 8,
        explain: "재생 우드 테이블 (1500mm)",
        price: 176200,
      },
    ],
    subImages: [],
  },
  {
    id: "45",
    name: "명상 의자 3",
    brand: {
      id: "45",
      name: "젠플로우 3",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/meditation-chair.png" alt="명상 의자" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">마음을 고요히 하는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">편안한 자세로 집중력을 높여주는 <strong style="color: #000;">명상 의자</strong>로 하루의 스트레스를 날려보세요.</p></div>',
    extraOptions: [
      {
        id: 12,
        explain: "의자 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 13,
        explain: "의자 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 9,
        explain: "명상 의자 (기본형)",
        price: 112600,
      },
      {
        id: 10,
        explain: "명상 의자 (쿠션형)",
        price: 132600,
      },
    ],
    subImages: [],
  },
  {
    id: "46",
    name: "달빛 무드등 3",
    brand: {
      id: "46",
      name: "루나틱스 3",
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
    delivery: {
      fee: 3500,
      backwoodsFee: 6000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mood-light.png" alt="달빛 무드등" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">은은하게 빛나는 달빛</h2><p style="text-align: center; font-size: 18px; color: #444;">로맨틱한 분위기를 연출하는 <strong style="color: #000;">달빛 무드등</strong>으로 공간을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 14,
        explain: "리모컨 추가",
        price: 15000,
      },
      {
        id: 15,
        explain: "밝기 조절 키트",
        price: 20000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 11,
        explain: "달빛 무드등 (소형)",
        price: 202700,
      },
      {
        id: 12,
        explain: "달빛 무드등 (대형)",
        price: 252700,
      },
    ],
    subImages: [],
  },
  {
    id: "47",
    name: "모자이크 커피 테이블 3",
    brand: {
      id: "47",
      name: "픽셀퍼니 3",
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
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 80000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/coffee-table.png" alt="모자이크 커피 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 포인트를 주는 테이블</h2><p style="text-align: center; font-size: 18px; color: #444;">아트적인 감각을 살린 <strong style="color: #000;">모자이크 커피 테이블</strong>로 거실을 스타일리시하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 16,
        explain: "보호 유리 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 13,
        explain: "모자이크 커피 테이블 (블랙 화이트)",
        price: 81300,
      },
      {
        id: 14,
        explain: "모자이크 커피 테이블 (그레이 톤)",
        price: 85300,
      },
    ],
    subImages: [],
  },
  {
    id: "48",
    name: "부유 선반 3",
    brand: {
      id: "48",
      name: "스페이스하모니 3",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/shelf.png" alt="부유 선반" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">벽 공간을 효율적으로 활용</h2><p style="text-align: center; font-size: 18px; color: #444;">깔끔하고 모던한 <strong style="color: #000;">부유 선반</strong>으로 인테리어와 수납을 동시에 해결하세요.</p></div>',
    extraOptions: [
      {
        id: 17,
        explain: "추가 브래킷 세트",
        price: 7000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 15,
        explain: "부유 선반 (60cm)",
        price: 106700,
      },
      {
        id: 16,
        explain: "부유 선반 (80cm)",
        price: 126700,
      },
    ],
    subImages: [],
  },
  {
    id: "49",
    name: "천연 소재 러그 3",
    brand: {
      id: "49",
      name: "오가닉스피릿 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/rug.png" alt="천연 소재 러그" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연의 촉감을 담은 러그</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 공간을 위한 <strong style="color: #000;">천연 소재 러그</strong>로 건강한 집을 만들어보세요.</p></div>',
    extraOptions: [
      {
        id: 18,
        explain: "미끄럼 방지 매트 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 17,
        explain: "러그 (소형)",
        price: 174000,
      },
      {
        id: 18,
        explain: "러그 (대형)",
        price: 214000,
      },
    ],
    subImages: [],
  },
  {
    id: "50",
    name: "산업풍 침대 프레임 3",
    brand: {
      id: "50",
      name: "메탈릭드림 3",
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
    delivery: {
      fee: 4000,
      backwoodsFee: 7000,
      freeThreshold: 150000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed-frame.png" alt="산업풍 침대 프레임" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">트렌디한 인더스트리얼 무드</h2><p style="text-align: center; font-size: 18px; color: #444;">거친 매력의 <strong style="color: #000;">산업풍 침대 프레임</strong>으로 침실을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 19,
        explain: "매트리스 추가 (싱글)",
        price: 120000,
      },
      {
        id: 20,
        explain: "매트리스 추가 (퀸)",
        price: 180000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 19,
        explain: "침대 프레임 (싱글)",
        price: 273900,
      },
      {
        id: 20,
        explain: "침대 프레임 (퀸)",
        price: 313900,
      },
    ],
    subImages: [],
  },
  {
    id: "51",
    name: "팝아트 벽 장식 3",
    brand: {
      id: "51",
      name: "컬러버스트 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 120000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pop-art.png" alt="팝아트 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 생동감을 불어넣다</h2><p style="text-align: center; font-size: 18px; color: #444;">강렬한 색채와 디자인의 <strong style="color: #000;">팝아트 벽 장식</strong>으로 집안을 갤러리처럼 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 21,
        explain: "프레임 변경 (블랙)",
        price: 15000,
      },
      {
        id: 22,
        explain: "프레임 변경 (골드)",
        price: 18000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 21,
        explain: "팝아트 벽 장식 (M)",
        price: 218900,
      },
      {
        id: 22,
        explain: "팝아트 벽 장식 (L)",
        price: 258900,
      },
    ],
    subImages: [],
  },
  {
    id: "52",
    name: "공중 해먹 3",
    brand: {
      id: "52",
      name: "에어리무브 3",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/hammock.png" alt="공중 해먹" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">하늘에 떠 있는 휴식</h2><p style="text-align: center; font-size: 18px; color: #444;">일상의 피로를 풀어주는 <strong style="color: #000;">공중 해먹</strong>으로 여유로운 시간을 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 23,
        explain: "해먹 고정 스트랩 추가",
        price: 7000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 23,
        explain: "공중 해먹 (그린)",
        price: 134300,
      },
      {
        id: 24,
        explain: "공중 해먹 (블루)",
        price: 139300,
      },
    ],
    subImages: [],
  },
  {
    id: "53",
    name: "접이식 다이닝 테이블 3",
    brand: {
      id: "53",
      name: "트랜스폼스페이스 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/dining-table.png" alt="접이식 다이닝 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 자유롭게 변형하다</h2><p style="text-align: center; font-size: 18px; color: #444;">작은 공간에도 완벽하게 어울리는 <strong style="color: #000;">접이식 다이닝 테이블</strong>로 실용적인 인테리어를 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 25,
        explain: "보호 패드 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 25,
        explain: "다이닝 테이블 (4인용)",
        price: 184700,
      },
      {
        id: 26,
        explain: "다이닝 테이블 (6인용)",
        price: 204700,
      },
    ],
    subImages: [],
  },
  {
    id: "54",
    name: "우드 스톤 램프 3",
    brand: {
      id: "54",
      name: "네이처블렌드 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-lamp.png" alt="우드 스톤 램프" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연에서 온 빛</h2><p style="text-align: center; font-size: 18px; color: #444;">우드와 스톤의 조화를 담은 <strong style="color: #000;">우드 스톤 램프</strong>로 공간을 따뜻하게 밝혀보세요.</p></div>',
    extraOptions: [
      {
        id: 27,
        explain: "램프 전구 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 27,
        explain: "우드 스톤 램프 (내추럴)",
        price: 238200,
      },
      {
        id: 28,
        explain: "우드 스톤 램프 (다크 우드)",
        price: 248200,
      },
    ],
    subImages: [],
  },
  {
    id: "55",
    name: "무소음 벽시계 3",
    brand: {
      id: "55",
      name: "사일런트글로우 3",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wall-clock.png" alt="무소음 벽시계" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">조용히 흐르는 시간</h2><p style="text-align: center; font-size: 18px; color: #444;">소음 없이 고요한 <strong style="color: #000;">무소음 벽시계</strong>로 공간의 품격을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 29,
        explain: "배터리 추가",
        price: 3000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 29,
        explain: "무소음 벽시계 (블랙)",
        price: 185600,
      },
      {
        id: 30,
        explain: "무소음 벽시계 (실버)",
        price: 195600,
      },
    ],
    subImages: [],
  },
  {
    id: "56",
    name: "부유형 침대 3",
    brand: {
      id: "56",
      name: "플로팅드림 3",
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed.png" alt="부유형 침대" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 떠 있는 듯한 느낌</h2><p style="text-align: center; font-size: 18px; color: #444;">심플하면서도 현대적인 <strong style="color: #000;">부유형 침대</strong>로 침실을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 31,
        explain: "LED 조명 추가",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 31,
        explain: "부유형 침대 (싱글)",
        price: 44700,
      },
      {
        id: 32,
        explain: "부유형 침대 (퀸)",
        price: 64700,
      },
    ],
    subImages: [],
  },
  {
    id: "57",
    name: "거울 벽 장식 3",
    brand: {
      id: "57",
      name: "리플렉트아트 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mirror.png" alt="거울 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">빛과 공간을 넓히다</h2><p style="text-align: center; font-size: 18px; color: #444;">세련된 <strong style="color: #000;">거울 벽 장식</strong>으로 공간에 깊이와 스타일을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 33,
        explain: "프레임 색상 변경 (골드)",
        price: 12000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 33,
        explain: "거울 벽 장식 (M)",
        price: 200800,
      },
      {
        id: 34,
        explain: "거울 벽 장식 (L)",
        price: 220800,
      },
    ],
    subImages: [],
  },
  {
    id: "58",
    name: "안락 1인용 소파 3",
    brand: {
      id: "58",
      name: "코지코브 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/single-sofa.png" alt="안락 1인용 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">혼자만의 아늑함</h2><p style="text-align: center; font-size: 18px; color: #444;">편안함과 스타일을 모두 갖춘 <strong style="color: #000;">안락 1인용 소파</strong>로 휴식의 질을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 35,
        explain: "소파 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 36,
        explain: "소파 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 35,
        explain: "안락 1인용 소파 (베이지)",
        price: 133600,
      },
      {
        id: 36,
        explain: "안락 1인용 소파 (그레이)",
        price: 143600,
      },
    ],
    subImages: [],
  },
  {
    id: "59",
    name: "수저 세트 3",
    brand: {
      id: "59",
      name: "아르코스 3",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 30000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cutlery-set.png" alt="수저 세트" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">식탁의 품격을 높이다</h2><p style="text-align: center; font-size: 18px; color: #444;">고급스러운 디자인의 <strong style="color: #000;">수저 세트</strong>로 식사를 더욱 특별하게 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 37,
        explain: "수저 케이스 추가",
        price: 5000,
      },
    ],
    firstDepthName: "구성 선택",
    options: [
      {
        id: 37,
        explain: "수저 세트 (2인용)",
        price: 9900,
      },
      {
        id: 38,
        explain: "수저 세트 (4인용)",
        price: 17900,
      },
    ],
    subImages: [],
  },
  {
    id: "60",
    name: "폭신 폭신 베개 3",
    brand: {
      id: "60",
      name: "아티젠 3",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p></div>',
    extraOptions: [
      {
        id: 39,
        explain: "베개 커버 추가 (화이트)",
        price: 10000,
      },
      {
        id: 40,
        explain: "베개 커버 추가 (그레이)",
        price: 10000,
      },
    ],
    firstDepthName: "타입 선택",
    options: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
      },
    ],
    subImages: [],
  },

  {
    id: "61",
    name: "구름 소파 4",
    brand: {
      id: "61",
      name: "플러피누들 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2><p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 3,
        explain: "소파 방석 추가 (화이트)",
        price: 49000,
      },
      {
        id: 4,
        explain: "소파 방석 추가 (그레이)",
        price: 49000,
      },
      {
        id: 5,
        explain: "소파 방석 추가 (네이비)",
        price: 49000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 1,
        explain: "구름 소파(2인용)",
        price: 154000,
      },
      {
        id: 2,
        explain: "구름 소파(3인용)",
        price: 198000,
      },
    ],
    subImages: [],
  },
  {
    id: "62",
    name: "스파이럴 책장 4",
    brand: {
      id: "62",
      name: "트위스티코 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bookshelf.png" alt="스파이럴 책장" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 살리는 스파이럴 디자인</h2><p style="text-align: center; font-size: 18px; color: #444;">책장이 곧 인테리어가 되는 <strong style="color: #000;">스파이럴 책장</strong>으로 집안을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 6,
        explain: "책장 확장 선반 추가 (화이트)",
        price: 27000,
      },
      {
        id: 7,
        explain: "책장 확장 선반 추가 (월넛)",
        price: 29000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 3,
        explain: "스파이럴 책장 (화이트)",
        price: 155000,
      },
      {
        id: 4,
        explain: "스파이럴 책장 (월넛)",
        price: 165000,
      },
    ],
    subImages: [],
  },
  {
    id: "63",
    name: "별빛 펜던트 조명 4",
    brand: {
      id: "63",
      name: "글리머라이트 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pendant-lights.png" alt="별빛 펜던트 조명" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">밤하늘처럼 빛나는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">감각적인 인테리어 완성을 위한 <strong style="color: #000;">별빛 펜던트 조명</strong>으로 당신의 집을 한층 밝고 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 8,
        explain: "LED 전구 추가 (전구색)",
        price: 8000,
      },
      {
        id: 9,
        explain: "LED 전구 추가 (주광색)",
        price: 8000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 5,
        explain: "별빛 펜던트 조명 (골드)",
        price: 40600,
      },
      {
        id: 6,
        explain: "별빛 펜던트 조명 (실버)",
        price: 42600,
      },
    ],
    subImages: [],
  },
  {
    id: "64",
    name: "재생 우드 테이블 4",
    brand: {
      id: "64",
      name: "에코플럭스 4",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-table.png" alt="재생 우드 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">지속 가능한 공간의 완성</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 라이프를 위한 <strong style="color: #000;">재생 우드 테이블</strong>로 집안에 자연의 따뜻함을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 10,
        explain: "테이블 보호 패드 추가 (투명)",
        price: 22000,
      },
      {
        id: 11,
        explain: "테이블 보호 패드 추가 (우드그레인)",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 7,
        explain: "재생 우드 테이블 (1200mm)",
        price: 146200,
      },
      {
        id: 8,
        explain: "재생 우드 테이블 (1500mm)",
        price: 176200,
      },
    ],
    subImages: [],
  },
  {
    id: "65",
    name: "명상 의자 4",
    brand: {
      id: "65",
      name: "젠플로우 4",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/meditation-chair.png" alt="명상 의자" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">마음을 고요히 하는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">편안한 자세로 집중력을 높여주는 <strong style="color: #000;">명상 의자</strong>로 하루의 스트레스를 날려보세요.</p></div>',
    extraOptions: [
      {
        id: 12,
        explain: "의자 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 13,
        explain: "의자 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 9,
        explain: "명상 의자 (기본형)",
        price: 112600,
      },
      {
        id: 10,
        explain: "명상 의자 (쿠션형)",
        price: 132600,
      },
    ],
    subImages: [],
  },
  {
    id: "66",
    name: "달빛 무드등 4",
    brand: {
      id: "66",
      name: "루나틱스 4",
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
    delivery: {
      fee: 3500,
      backwoodsFee: 6000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mood-light.png" alt="달빛 무드등" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">은은하게 빛나는 달빛</h2><p style="text-align: center; font-size: 18px; color: #444;">로맨틱한 분위기를 연출하는 <strong style="color: #000;">달빛 무드등</strong>으로 공간을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 14,
        explain: "리모컨 추가",
        price: 15000,
      },
      {
        id: 15,
        explain: "밝기 조절 키트",
        price: 20000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 11,
        explain: "달빛 무드등 (소형)",
        price: 202700,
      },
      {
        id: 12,
        explain: "달빛 무드등 (대형)",
        price: 252700,
      },
    ],
    subImages: [],
  },
  {
    id: "67",
    name: "모자이크 커피 테이블 4",
    brand: {
      id: "67",
      name: "픽셀퍼니 4",
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
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 80000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/coffee-table.png" alt="모자이크 커피 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 포인트를 주는 테이블</h2><p style="text-align: center; font-size: 18px; color: #444;">아트적인 감각을 살린 <strong style="color: #000;">모자이크 커피 테이블</strong>로 거실을 스타일리시하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 16,
        explain: "보호 유리 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 13,
        explain: "모자이크 커피 테이블 (블랙 화이트)",
        price: 81300,
      },
      {
        id: 14,
        explain: "모자이크 커피 테이블 (그레이 톤)",
        price: 85300,
      },
    ],
    subImages: [],
  },
  {
    id: "68",
    name: "부유 선반 4",
    brand: {
      id: "68",
      name: "스페이스하모니 4",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/shelf.png" alt="부유 선반" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">벽 공간을 효율적으로 활용</h2><p style="text-align: center; font-size: 18px; color: #444;">깔끔하고 모던한 <strong style="color: #000;">부유 선반</strong>으로 인테리어와 수납을 동시에 해결하세요.</p></div>',
    extraOptions: [
      {
        id: 17,
        explain: "추가 브래킷 세트",
        price: 7000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 15,
        explain: "부유 선반 (60cm)",
        price: 106700,
      },
      {
        id: 16,
        explain: "부유 선반 (80cm)",
        price: 126700,
      },
    ],
    subImages: [],
  },
  {
    id: "69",
    name: "천연 소재 러그 4",
    brand: {
      id: "69",
      name: "오가닉스피릿 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/rug.png" alt="천연 소재 러그" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연의 촉감을 담은 러그</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 공간을 위한 <strong style="color: #000;">천연 소재 러그</strong>로 건강한 집을 만들어보세요.</p></div>',
    extraOptions: [
      {
        id: 18,
        explain: "미끄럼 방지 매트 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 17,
        explain: "러그 (소형)",
        price: 174000,
      },
      {
        id: 18,
        explain: "러그 (대형)",
        price: 214000,
      },
    ],
    subImages: [],
  },
  {
    id: "70",
    name: "산업풍 침대 프레임 4",
    brand: {
      id: "70",
      name: "메탈릭드림 4",
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
    delivery: {
      fee: 4000,
      backwoodsFee: 7000,
      freeThreshold: 150000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed-frame.png" alt="산업풍 침대 프레임" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">트렌디한 인더스트리얼 무드</h2><p style="text-align: center; font-size: 18px; color: #444;">거친 매력의 <strong style="color: #000;">산업풍 침대 프레임</strong>으로 침실을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 19,
        explain: "매트리스 추가 (싱글)",
        price: 120000,
      },
      {
        id: 20,
        explain: "매트리스 추가 (퀸)",
        price: 180000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 19,
        explain: "침대 프레임 (싱글)",
        price: 273900,
      },
      {
        id: 20,
        explain: "침대 프레임 (퀸)",
        price: 313900,
      },
    ],
    subImages: [],
  },
  {
    id: "71",
    name: "팝아트 벽 장식 4",
    brand: {
      id: "71",
      name: "컬러버스트 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 120000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pop-art.png" alt="팝아트 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 생동감을 불어넣다</h2><p style="text-align: center; font-size: 18px; color: #444;">강렬한 색채와 디자인의 <strong style="color: #000;">팝아트 벽 장식</strong>으로 집안을 갤러리처럼 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 21,
        explain: "프레임 변경 (블랙)",
        price: 15000,
      },
      {
        id: 22,
        explain: "프레임 변경 (골드)",
        price: 18000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 21,
        explain: "팝아트 벽 장식 (M)",
        price: 218900,
      },
      {
        id: 22,
        explain: "팝아트 벽 장식 (L)",
        price: 258900,
      },
    ],
    subImages: [],
  },
  {
    id: "72",
    name: "공중 해먹 4",
    brand: {
      id: "72",
      name: "에어리무브 4",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/hammock.png" alt="공중 해먹" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">하늘에 떠 있는 휴식</h2><p style="text-align: center; font-size: 18px; color: #444;">일상의 피로를 풀어주는 <strong style="color: #000;">공중 해먹</strong>으로 여유로운 시간을 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 23,
        explain: "해먹 고정 스트랩 추가",
        price: 7000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 23,
        explain: "공중 해먹 (그린)",
        price: 134300,
      },
      {
        id: 24,
        explain: "공중 해먹 (블루)",
        price: 139300,
      },
    ],
    subImages: [],
  },
  {
    id: "73",
    name: "접이식 다이닝 테이블 4",
    brand: {
      id: "73",
      name: "트랜스폼스페이스 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/dining-table.png" alt="접이식 다이닝 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 자유롭게 변형하다</h2><p style="text-align: center; font-size: 18px; color: #444;">작은 공간에도 완벽하게 어울리는 <strong style="color: #000;">접이식 다이닝 테이블</strong>로 실용적인 인테리어를 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 25,
        explain: "보호 패드 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 25,
        explain: "다이닝 테이블 (4인용)",
        price: 184700,
      },
      {
        id: 26,
        explain: "다이닝 테이블 (6인용)",
        price: 204700,
      },
    ],
    subImages: [],
  },
  {
    id: "74",
    name: "우드 스톤 램프 4",
    brand: {
      id: "74",
      name: "네이처블렌드 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-lamp.png" alt="우드 스톤 램프" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연에서 온 빛</h2><p style="text-align: center; font-size: 18px; color: #444;">우드와 스톤의 조화를 담은 <strong style="color: #000;">우드 스톤 램프</strong>로 공간을 따뜻하게 밝혀보세요.</p></div>',
    extraOptions: [
      {
        id: 27,
        explain: "램프 전구 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 27,
        explain: "우드 스톤 램프 (내추럴)",
        price: 238200,
      },
      {
        id: 28,
        explain: "우드 스톤 램프 (다크 우드)",
        price: 248200,
      },
    ],
    subImages: [],
  },
  {
    id: "75",
    name: "무소음 벽시계 4",
    brand: {
      id: "75",
      name: "사일런트글로우 4",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wall-clock.png" alt="무소음 벽시계" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">조용히 흐르는 시간</h2><p style="text-align: center; font-size: 18px; color: #444;">소음 없이 고요한 <strong style="color: #000;">무소음 벽시계</strong>로 공간의 품격을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 29,
        explain: "배터리 추가",
        price: 3000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 29,
        explain: "무소음 벽시계 (블랙)",
        price: 185600,
      },
      {
        id: 30,
        explain: "무소음 벽시계 (실버)",
        price: 195600,
      },
    ],
    subImages: [],
  },
  {
    id: "76",
    name: "부유형 침대 4",
    brand: {
      id: "76",
      name: "플로팅드림 4",
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed.png" alt="부유형 침대" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 떠 있는 듯한 느낌</h2><p style="text-align: center; font-size: 18px; color: #444;">심플하면서도 현대적인 <strong style="color: #000;">부유형 침대</strong>로 침실을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 31,
        explain: "LED 조명 추가",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 31,
        explain: "부유형 침대 (싱글)",
        price: 44700,
      },
      {
        id: 32,
        explain: "부유형 침대 (퀸)",
        price: 64700,
      },
    ],
    subImages: [],
  },
  {
    id: "77",
    name: "거울 벽 장식 4",
    brand: {
      id: "77",
      name: "리플렉트아트 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mirror.png" alt="거울 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">빛과 공간을 넓히다</h2><p style="text-align: center; font-size: 18px; color: #444;">세련된 <strong style="color: #000;">거울 벽 장식</strong>으로 공간에 깊이와 스타일을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 33,
        explain: "프레임 색상 변경 (골드)",
        price: 12000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 33,
        explain: "거울 벽 장식 (M)",
        price: 200800,
      },
      {
        id: 34,
        explain: "거울 벽 장식 (L)",
        price: 220800,
      },
    ],
    subImages: [],
  },
  {
    id: "78",
    name: "안락 1인용 소파 4",
    brand: {
      id: "78",
      name: "코지코브 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/single-sofa.png" alt="안락 1인용 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">혼자만의 아늑함</h2><p style="text-align: center; font-size: 18px; color: #444;">편안함과 스타일을 모두 갖춘 <strong style="color: #000;">안락 1인용 소파</strong>로 휴식의 질을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 35,
        explain: "소파 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 36,
        explain: "소파 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 35,
        explain: "안락 1인용 소파 (베이지)",
        price: 133600,
      },
      {
        id: 36,
        explain: "안락 1인용 소파 (그레이)",
        price: 143600,
      },
    ],
    subImages: [],
  },
  {
    id: "79",
    name: "수저 세트 4",
    brand: {
      id: "79",
      name: "아르코스 4",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 30000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cutlery-set.png" alt="수저 세트" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">식탁의 품격을 높이다</h2><p style="text-align: center; font-size: 18px; color: #444;">고급스러운 디자인의 <strong style="color: #000;">수저 세트</strong>로 식사를 더욱 특별하게 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 37,
        explain: "수저 케이스 추가",
        price: 5000,
      },
    ],
    firstDepthName: "구성 선택",
    options: [
      {
        id: 37,
        explain: "수저 세트 (2인용)",
        price: 9900,
      },
      {
        id: 38,
        explain: "수저 세트 (4인용)",
        price: 17900,
      },
    ],
    subImages: [],
  },
  {
    id: "80",
    name: "폭신 폭신 베개 4",
    brand: {
      id: "80",
      name: "아티젠 4",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p></div>',
    extraOptions: [
      {
        id: 39,
        explain: "베개 커버 추가 (화이트)",
        price: 10000,
      },
      {
        id: 40,
        explain: "베개 커버 추가 (그레이)",
        price: 10000,
      },
    ],
    firstDepthName: "타입 선택",
    options: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
      },
    ],
    subImages: [],
  },
  {
    id: "81",
    name: "구름 소파 5",
    brand: {
      id: "81",
      name: "플러피누들 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 9405,
      reviewAverage: 4.79,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2><p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 3,
        explain: "소파 방석 추가 (화이트)",
        price: 49000,
      },
      {
        id: 4,
        explain: "소파 방석 추가 (그레이)",
        price: 49000,
      },
      {
        id: 5,
        explain: "소파 방석 추가 (네이비)",
        price: 49000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 1,
        explain: "구름 소파(2인용)",
        price: 154000,
      },
      {
        id: 2,
        explain: "구름 소파(3인용)",
        price: 198000,
      },
    ],
    subImages: [],
  },
  {
    id: "82",
    name: "스파이럴 책장 5",
    brand: {
      id: "82",
      name: "트위스티코 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 33889,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bookshelf.png" alt="스파이럴 책장" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 살리는 스파이럴 디자인</h2><p style="text-align: center; font-size: 18px; color: #444;">책장이 곧 인테리어가 되는 <strong style="color: #000;">스파이럴 책장</strong>으로 집안을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 6,
        explain: "책장 확장 선반 추가 (화이트)",
        price: 27000,
      },
      {
        id: 7,
        explain: "책장 확장 선반 추가 (월넛)",
        price: 29000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 3,
        explain: "스파이럴 책장 (화이트)",
        price: 155000,
      },
      {
        id: 4,
        explain: "스파이럴 책장 (월넛)",
        price: 165000,
      },
    ],
    subImages: [],
  },
  {
    id: "83",
    name: "별빛 펜던트 조명 5",
    brand: {
      id: "83",
      name: "글리머라이트 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 15116,
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pendant-lights.png" alt="별빛 펜던트 조명" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">밤하늘처럼 빛나는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">감각적인 인테리어 완성을 위한 <strong style="color: #000;">별빛 펜던트 조명</strong>으로 당신의 집을 한층 밝고 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 8,
        explain: "LED 전구 추가 (전구색)",
        price: 8000,
      },
      {
        id: 9,
        explain: "LED 전구 추가 (주광색)",
        price: 8000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 5,
        explain: "별빛 펜던트 조명 (골드)",
        price: 40600,
      },
      {
        id: 6,
        explain: "별빛 펜던트 조명 (실버)",
        price: 42600,
      },
    ],
    subImages: [],
  },
  {
    id: "84",
    name: "재생 우드 테이블 5",
    brand: {
      id: "84",
      name: "에코플럭스 5",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-table.png" alt="재생 우드 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">지속 가능한 공간의 완성</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 라이프를 위한 <strong style="color: #000;">재생 우드 테이블</strong>로 집안에 자연의 따뜻함을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 10,
        explain: "테이블 보호 패드 추가 (투명)",
        price: 22000,
      },
      {
        id: 11,
        explain: "테이블 보호 패드 추가 (우드그레인)",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 7,
        explain: "재생 우드 테이블 (1200mm)",
        price: 146200,
      },
      {
        id: 8,
        explain: "재생 우드 테이블 (1500mm)",
        price: 176200,
      },
    ],
    subImages: [],
  },
  {
    id: "85",
    name: "명상 의자 5",
    brand: {
      id: "85",
      name: "젠플로우 5",
    },
    price: {
      originalPrice: "170600",
      sellingPrice: "112600",
      discountRate: "34",
    },
    imageUrl: "meditation-chair.png",
    badgeProperties: {
      isFreeDelivery: false,
      isSpecialPrice: true,
      departureToday: {
        orderDeadline: "13:00",
        description: "평일 %s까지 결제시",
      },
    },
    reviewStatistic: {
      reviewCount: 5896,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/meditation-chair.png" alt="명상 의자" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">마음을 고요히 하는 공간</h2><p style="text-align: center; font-size: 18px; color: #444;">편안한 자세로 집중력을 높여주는 <strong style="color: #000;">명상 의자</strong>로 하루의 스트레스를 날려보세요.</p></div>',
    extraOptions: [
      {
        id: 12,
        explain: "의자 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 13,
        explain: "의자 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 9,
        explain: "명상 의자 (기본형)",
        price: 112600,
      },
      {
        id: 10,
        explain: "명상 의자 (쿠션형)",
        price: 132600,
      },
    ],
    subImages: [],
  },
  {
    id: "86",
    name: "달빛 무드등 5",
    brand: {
      id: "86",
      name: "루나틱스 5",
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
    delivery: {
      fee: 3500,
      backwoodsFee: 6000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mood-light.png" alt="달빛 무드등" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">은은하게 빛나는 달빛</h2><p style="text-align: center; font-size: 18px; color: #444;">로맨틱한 분위기를 연출하는 <strong style="color: #000;">달빛 무드등</strong>으로 공간을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 14,
        explain: "리모컨 추가",
        price: 15000,
      },
      {
        id: 15,
        explain: "밝기 조절 키트",
        price: 20000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 11,
        explain: "달빛 무드등 (소형)",
        price: 202700,
      },
      {
        id: 12,
        explain: "달빛 무드등 (대형)",
        price: 252700,
      },
    ],
    subImages: [],
  },
  {
    id: "87",
    name: "모자이크 커피 테이블 5",
    brand: {
      id: "87",
      name: "픽셀퍼니 5",
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
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 80000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/coffee-table.png" alt="모자이크 커피 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 포인트를 주는 테이블</h2><p style="text-align: center; font-size: 18px; color: #444;">아트적인 감각을 살린 <strong style="color: #000;">모자이크 커피 테이블</strong>로 거실을 스타일리시하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 16,
        explain: "보호 유리 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 13,
        explain: "모자이크 커피 테이블 (블랙 화이트)",
        price: 81300,
      },
      {
        id: 14,
        explain: "모자이크 커피 테이블 (그레이 톤)",
        price: 85300,
      },
    ],
    subImages: [],
  },
  {
    id: "88",
    name: "부유 선반 5",
    brand: {
      id: "88",
      name: "스페이스하모니 5",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 100000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/shelf.png" alt="부유 선반" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">벽 공간을 효율적으로 활용</h2><p style="text-align: center; font-size: 18px; color: #444;">깔끔하고 모던한 <strong style="color: #000;">부유 선반</strong>으로 인테리어와 수납을 동시에 해결하세요.</p></div>',
    extraOptions: [
      {
        id: 17,
        explain: "추가 브래킷 세트",
        price: 7000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 15,
        explain: "부유 선반 (60cm)",
        price: 106700,
      },
      {
        id: 16,
        explain: "부유 선반 (80cm)",
        price: 126700,
      },
    ],
    subImages: [],
  },
  {
    id: "89",
    name: "천연 소재 러그 5",
    brand: {
      id: "89",
      name: "오가닉스피릿 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 12428,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/rug.png" alt="천연 소재 러그" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연의 촉감을 담은 러그</h2><p style="text-align: center; font-size: 18px; color: #444;">친환경 공간을 위한 <strong style="color: #000;">천연 소재 러그</strong>로 건강한 집을 만들어보세요.</p></div>',
    extraOptions: [
      {
        id: 18,
        explain: "미끄럼 방지 매트 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 17,
        explain: "러그 (소형)",
        price: 174000,
      },
      {
        id: 18,
        explain: "러그 (대형)",
        price: 214000,
      },
    ],
    subImages: [],
  },
  {
    id: "90",
    name: "산업풍 침대 프레임 5",
    brand: {
      id: "90",
      name: "메탈릭드림 5",
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
    delivery: {
      fee: 4000,
      backwoodsFee: 7000,
      freeThreshold: 150000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed-frame.png" alt="산업풍 침대 프레임" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">트렌디한 인더스트리얼 무드</h2><p style="text-align: center; font-size: 18px; color: #444;">거친 매력의 <strong style="color: #000;">산업풍 침대 프레임</strong>으로 침실을 특별하게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 19,
        explain: "매트리스 추가 (싱글)",
        price: 120000,
      },
      {
        id: 20,
        explain: "매트리스 추가 (퀸)",
        price: 180000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 19,
        explain: "침대 프레임 (싱글)",
        price: 273900,
      },
      {
        id: 20,
        explain: "침대 프레임 (퀸)",
        price: 313900,
      },
    ],
    subImages: [],
  },
  {
    id: "91",
    name: "팝아트 벽 장식 5",
    brand: {
      id: "91",
      name: "컬러버스트 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 11643,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 120000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pop-art.png" alt="팝아트 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 생동감을 불어넣다</h2><p style="text-align: center; font-size: 18px; color: #444;">강렬한 색채와 디자인의 <strong style="color: #000;">팝아트 벽 장식</strong>으로 집안을 갤러리처럼 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 21,
        explain: "프레임 변경 (블랙)",
        price: 15000,
      },
      {
        id: 22,
        explain: "프레임 변경 (골드)",
        price: 18000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 21,
        explain: "팝아트 벽 장식 (M)",
        price: 218900,
      },
      {
        id: 22,
        explain: "팝아트 벽 장식 (L)",
        price: 258900,
      },
    ],
    subImages: [],
  },
  {
    id: "92",
    name: "공중 해먹 5",
    brand: {
      id: "92",
      name: "에어리무브 5",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/hammock.png" alt="공중 해먹" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">하늘에 떠 있는 휴식</h2><p style="text-align: center; font-size: 18px; color: #444;">일상의 피로를 풀어주는 <strong style="color: #000;">공중 해먹</strong>으로 여유로운 시간을 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 23,
        explain: "해먹 고정 스트랩 추가",
        price: 7000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 23,
        explain: "공중 해먹 (그린)",
        price: 134300,
      },
      {
        id: 24,
        explain: "공중 해먹 (블루)",
        price: 139300,
      },
    ],
    subImages: [],
  },
  {
    id: "93",
    name: "접이식 다이닝 테이블 5",
    brand: {
      id: "93",
      name: "트랜스폼스페이스 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 10623,
      reviewAverage: 4.76,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/dining-table.png" alt="접이식 다이닝 테이블" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간을 자유롭게 변형하다</h2><p style="text-align: center; font-size: 18px; color: #444;">작은 공간에도 완벽하게 어울리는 <strong style="color: #000;">접이식 다이닝 테이블</strong>로 실용적인 인테리어를 완성하세요.</p></div>',
    extraOptions: [
      {
        id: 25,
        explain: "보호 패드 추가",
        price: 10000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 25,
        explain: "다이닝 테이블 (4인용)",
        price: 184700,
      },
      {
        id: 26,
        explain: "다이닝 테이블 (6인용)",
        price: 204700,
      },
    ],
    subImages: [],
  },
  {
    id: "94",
    name: "우드 스톤 램프 5",
    brand: {
      id: "94",
      name: "네이처블렌드 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8945,
      reviewAverage: 4.82,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wood-lamp.png" alt="우드 스톤 램프" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">자연에서 온 빛</h2><p style="text-align: center; font-size: 18px; color: #444;">우드와 스톤의 조화를 담은 <strong style="color: #000;">우드 스톤 램프</strong>로 공간을 따뜻하게 밝혀보세요.</p></div>',
    extraOptions: [
      {
        id: 27,
        explain: "램프 전구 추가",
        price: 12000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 27,
        explain: "우드 스톤 램프 (내추럴)",
        price: 238200,
      },
      {
        id: 28,
        explain: "우드 스톤 램프 (다크 우드)",
        price: 248200,
      },
    ],
    subImages: [],
  },
  {
    id: "95",
    name: "무소음 벽시계 5",
    brand: {
      id: "95",
      name: "사일런트글로우 5",
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
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/wall-clock.png" alt="무소음 벽시계" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">조용히 흐르는 시간</h2><p style="text-align: center; font-size: 18px; color: #444;">소음 없이 고요한 <strong style="color: #000;">무소음 벽시계</strong>로 공간의 품격을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 29,
        explain: "배터리 추가",
        price: 3000,
      },
    ],
    firstDepthName: "프레임 선택",
    options: [
      {
        id: 29,
        explain: "무소음 벽시계 (블랙)",
        price: 185600,
      },
      {
        id: 30,
        explain: "무소음 벽시계 (실버)",
        price: 195600,
      },
    ],
    subImages: [],
  },
  {
    id: "96",
    name: "부유형 침대 5",
    brand: {
      id: "96",
      name: "플로팅드림 5",
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
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/bed.png" alt="부유형 침대" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">공간에 떠 있는 듯한 느낌</h2><p style="text-align: center; font-size: 18px; color: #444;">심플하면서도 현대적인 <strong style="color: #000;">부유형 침대</strong>로 침실을 한층 세련되게 꾸며보세요.</p></div>',
    extraOptions: [
      {
        id: 31,
        explain: "LED 조명 추가",
        price: 25000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 31,
        explain: "부유형 침대 (싱글)",
        price: 44700,
      },
      {
        id: 32,
        explain: "부유형 침대 (퀸)",
        price: 64700,
      },
    ],
    subImages: [],
  },
  {
    id: "97",
    name: "거울 벽 장식 5",
    brand: {
      id: "97",
      name: "리플렉트아트 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8456,
      reviewAverage: 4.73,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/mirror.png" alt="거울 벽 장식" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">빛과 공간을 넓히다</h2><p style="text-align: center; font-size: 18px; color: #444;">세련된 <strong style="color: #000;">거울 벽 장식</strong>으로 공간에 깊이와 스타일을 더해보세요.</p></div>',
    extraOptions: [
      {
        id: 33,
        explain: "프레임 색상 변경 (골드)",
        price: 12000,
      },
    ],
    firstDepthName: "사이즈 선택",
    options: [
      {
        id: 33,
        explain: "거울 벽 장식 (M)",
        price: 200800,
      },
      {
        id: 34,
        explain: "거울 벽 장식 (L)",
        price: 220800,
      },
    ],
    subImages: [],
  },
  {
    id: "98",
    name: "안락 1인용 소파 5",
    brand: {
      id: "98",
      name: "코지코브 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 40924,
      reviewAverage: 4.74,
    },
    delivery: {
      fee: 0,
      backwoodsFee: 0,
      freeThreshold: 0,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/single-sofa.png" alt="안락 1인용 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">혼자만의 아늑함</h2><p style="text-align: center; font-size: 18px; color: #444;">편안함과 스타일을 모두 갖춘 <strong style="color: #000;">안락 1인용 소파</strong>로 휴식의 질을 높여보세요.</p></div>',
    extraOptions: [
      {
        id: 35,
        explain: "소파 커버 추가 (화이트)",
        price: 18000,
      },
      {
        id: 36,
        explain: "소파 커버 추가 (차콜)",
        price: 18000,
      },
    ],
    firstDepthName: "색상 선택",
    options: [
      {
        id: 35,
        explain: "안락 1인용 소파 (베이지)",
        price: 133600,
      },
      {
        id: 36,
        explain: "안락 1인용 소파 (그레이)",
        price: 143600,
      },
    ],
    subImages: [],
  },
  {
    id: "99",
    name: "수저 세트 5",
    brand: {
      id: "99",
      name: "아르코스 5",
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
    delivery: {
      fee: 2500,
      backwoodsFee: 4000,
      freeThreshold: 30000,
      isRegionalDeliveryFee: false,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cutlery-set.png" alt="수저 세트" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">식탁의 품격을 높이다</h2><p style="text-align: center; font-size: 18px; color: #444;">고급스러운 디자인의 <strong style="color: #000;">수저 세트</strong>로 식사를 더욱 특별하게 즐겨보세요.</p></div>',
    extraOptions: [
      {
        id: 37,
        explain: "수저 케이스 추가",
        price: 5000,
      },
    ],
    firstDepthName: "구성 선택",
    options: [
      {
        id: 37,
        explain: "수저 세트 (2인용)",
        price: 9900,
      },
      {
        id: 38,
        explain: "수저 세트 (4인용)",
        price: 17900,
      },
    ],
    subImages: [],
  },
  {
    id: "100",
    name: "폭신 폭신 베개 5",
    brand: {
      id: "100",
      name: "아티젠 5",
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
      },
    },
    reviewStatistic: {
      reviewCount: 8289,
      reviewAverage: 4.77,
    },
    delivery: {
      fee: 3000,
      backwoodsFee: 5000,
      freeThreshold: 50000,
      isRegionalDeliveryFee: true,
      type: 1,
    },
    description:
      '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p></div>',
    extraOptions: [
      {
        id: 39,
        explain: "베개 커버 추가 (화이트)",
        price: 10000,
      },
      {
        id: 40,
        explain: "베개 커버 추가 (그레이)",
        price: 10000,
      },
    ],
    firstDepthName: "타입 선택",
    options: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
      },
    ],
    subImages: [],
  },
];
