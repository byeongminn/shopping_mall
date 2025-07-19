// 상품 DTO
export type GoodDetailOption = {
  id: number;
  explain: string;
  price: number;
};

export type GoodDetailImage = {
  imageUrl: string;
};

export type RawGood = {
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
  extraOptions: GoodDetailOption[];
  firstDepthName: string;
  options: GoodDetailOption[];
  subImages: GoodDetailImage[];
};

// 상품 DTO 포맷팅
export type FormattedGood = RawGood & {
  price: RawGood["price"] & {
    originalPriceDisplayText: string;
    sellingPriceDisplayText: string;
  };
  reviewStatistic: RawGood["reviewStatistic"] & {
    reviewCountDisplayText: string;
    reviewAverageDisplayText: number;
  };
};

// 상품 상세 DTO 포맷팅
export type GoodDetail = FormattedGood;

export type ListResponse<T> = {
  goods: T[];
  totalResults: number;
};

export type Order =
  | "recommended"
  | "priceAsc"
  | "priceDesc"
  | "discountRate"
  | "reviewCount"
  | "reviewAverage";

export type GetGoodListRequestDto = {
  order?: Order;
  page: number;
};

export type GetGoodListResponseDto = ListResponse<FormattedGood>;
