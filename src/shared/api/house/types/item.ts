// 상품 DTO
export type GoodsDetailOption = {
  id: number;
  explain: string;
  price: number;
};

export type GoodsDetailImage = {
  imageUrl: string;
};

export type RawGoodDTO = {
  id: string;
  name: string;
  imageUrl: string;
  brand: {
    id: string;
    name: string;
  };
  price: {
    originalPrice: string;
    sellingPrice: string;
    discountRate: string;
  };
  badgeProperties: {
    isFreeDelivery: boolean;
    isSpecialPrice: boolean;
    departureToday?: {
      orderDeadline: string;
      description: string;
    };
    couponBadge?: {
      displayText: string;
      discountRatio: string;
      couponAppliedPrice: string;
    };
  };
  reviewStatistic: {
    reviewCount: number;
    reviewAverage: number;
  };
  delivery: {
    fee: number;
    backwoodsFee: number;
    freeThreshold: number;
    isRegionalDeliveryFee: boolean;
    type: number;
  };
  description: string;
  extraOptions: GoodsDetailOption[];
  firstDepthName: string;
  options: GoodsDetailOption[];
  subImages: GoodsDetailImage[];
};

// 상품 DTO 포맷팅
export type Good = RawGoodDTO & {
  price: RawGoodDTO["price"] & {
    originalPriceDisplayText: string;
    sellingPriceDisplayText: string;
  };
  reviewStatistic: RawGoodDTO["reviewStatistic"] & {
    reviewCountDisplayText: string;
    reviewAverageDisplayText: number;
  };
};

// 상품 상세 DTO 포맷팅
export type GoodsDetail = RawGoodDTO & Good;
