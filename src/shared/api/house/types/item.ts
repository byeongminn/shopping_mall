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
      departureTodayExp: string;
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
};

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
