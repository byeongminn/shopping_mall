import { GetGoodsResponse, Order } from "@/features/main/api/getGoods";
import { API_BASE_URL } from "@/shared/api/constants";
import queryString from "query-string";

export type GetSearchGoodsRequestParams = {
  q: string;
  order: Order;
};

export type GetSearchGoodsResponse = GetGoodsResponse;

export const getSearchGoodsURL = `${API_BASE_URL}/api/goods/search`;

export const getSearchGoods = async (
  params: GetSearchGoodsRequestParams
): Promise<GetSearchGoodsResponse> => {
  const searchParams = queryString.stringify(params);

  const url = `${getSearchGoodsURL}?${searchParams}`;

  const response = await fetch(url);

  return await response.json();
};
