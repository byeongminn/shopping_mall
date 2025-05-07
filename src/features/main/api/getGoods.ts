import queryString from "query-string";
import { API_BASE_URL } from "@/shared/api/constants";
import { Good } from "@/shared/api/house/types/item";
import { ListResponse } from "@/shared/api/house/types/list";
import { api } from "@/shared/lib/axios";

export type Order =
  | "recommended"
  | "priceAsc"
  | "priceDesc"
  | "discountRate"
  | "reviewCount"
  | "reviewAverage";

export type GetGoodsRequestParams = {
  order?: Order;
  page: number;
};

export type GetGoodsResponse = ListResponse<Good>;

export const getGoodsURL = `${API_BASE_URL}/api/goods`;

export const getGoods = async (
  params: GetGoodsRequestParams
): Promise<GetGoodsResponse> => {
  const searchParams = queryString.stringify(params);

  const url = `${getGoodsURL}?${searchParams}`;

  const { data } = await api.get(url);

  return data;
};
