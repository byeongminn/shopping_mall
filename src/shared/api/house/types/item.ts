export type rawGood = {
  id: string;
  name: string;
  imageUrl: string;
  isSoldOut: boolean;
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
    isDiscontinued: boolean;
    isSelling: boolean;
    isOverseasPurchase: boolean;
    isRetailDelivery: boolean;
    isThirdPartyLogistic: boolean;
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
    deliveryServiceCode: string;
  };
  reviewStatistic: {
    reviewCount: number;
    reviewAverage: number;
  };
  scrapInfo: {
    isScrap: boolean;
    scrapCount: number;
  };
};

export type Good = rawGood & {
  price: rawGood["price"] & {
    originalPriceDisplayText: string;
    sellingPriceDisplayText: string;
  };
  reviewStatistic: rawGood["reviewStatistic"] & {
    reviewCountDisplayText: string;
    reviewAverageDisplayText: number;
  };
};
