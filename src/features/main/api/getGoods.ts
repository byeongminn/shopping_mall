import { API_BASE_URL } from "@/shared/api/constants";
import { Good } from "@/shared/api/house/types/item";
import queryString from "query-string";

export type Order =
  | "recommended"
  | "priceAsc"
  | "priceDesc"
  | "discountRate"
  | "reviewCount"
  | "reviewAverage";

export type GetGoodsRequestParams = {
  order?: Order;
};

export type GetGoodsResponse = {
  goods: Good[];
  totalResults: number;
};

const getGoodsURL = `${API_BASE_URL}/api/goods`;

export const getGoods = async (
  params: GetGoodsRequestParams
): Promise<GetGoodsResponse> => {
  const searchParams = queryString.stringify(params);

  const url = `${getGoodsURL}?${searchParams}`;

  const response = await fetch(url);

  return await response.json();
};
