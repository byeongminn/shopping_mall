import { GetGoodsResponse, Order } from "@/features/main/api/getGoods";
import { RawGoodDTO } from "@/shared/api/house/types/item";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

export const numberRounded = (value: number) => {
  return Math.round(value * 10) / 10;
};

export const mappingGoodsResponse = (data: RawGoodDTO[]): GetGoodsResponse => {
  const goods = data?.map((item) => {
    return {
      ...item,
      price: {
        ...item.price,
        originalPriceDisplayText: formatNumberWithCommas(
          Number(item.price.originalPrice) ?? "0"
        ),
        sellingPriceDisplayText: formatNumberWithCommas(
          Number(item.price.sellingPrice) ?? "0"
        ),
      },
      reviewStatistic: {
        ...item.reviewStatistic,
        reviewCountDisplayText:
          formatNumberWithCommas(item.reviewStatistic.reviewCount) ?? "0",
        reviewAverageDisplayText:
          numberRounded(item.reviewStatistic.reviewAverage) ?? 0,
      },
    };
  });

  return {
    goods,
    totalResults: goods.length,
  };
};

export const orderingGoodsData = (
  data: GetGoodsResponse,
  order: Order
): GetGoodsResponse => {
  if (order === "priceAsc") {
    // 가격 오름차순 정렬
    const sortedData = {
      goods: data.goods.sort(
        (a, b) => Number(a.price.sellingPrice) - Number(b.price.sellingPrice)
      ),
      totalResults: data.totalResults,
    };

    return sortedData;
  } else if (order === "priceDesc") {
    // 가격 내림차순 정렬
    const sortedData = {
      goods: data.goods.sort(
        (a, b) => Number(b.price.sellingPrice) - Number(a.price.sellingPrice)
      ),
      totalResults: data.totalResults,
    };

    return sortedData;
  } else if (order === "discountRate") {
    // 할인율 내림차순 정렬
    const sortedData = {
      goods: data.goods.sort(
        (a, b) => Number(b.price.discountRate) - Number(a.price.discountRate)
      ),
      totalResults: data.totalResults,
    };

    return sortedData;
  } else if (order === "reviewAverage") {
    // 평점 내림차순 정렬
    const sortedData = {
      goods: data.goods.sort(
        (a, b) =>
          b.reviewStatistic.reviewAverage - a.reviewStatistic.reviewAverage
      ),
      totalResults: data.totalResults,
    };

    return sortedData;
  } else if (order === "reviewCount") {
    // 리뷰 수 내림차수 정렬
    const sortedData = {
      goods: data.goods.sort(
        (a, b) => b.reviewStatistic.reviewCount - a.reviewStatistic.reviewCount
      ),
      totalResults: data.totalResults,
    };

    return sortedData;
  } else {
    return data;
  }
};
