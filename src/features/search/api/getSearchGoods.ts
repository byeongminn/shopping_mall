import queryString from "query-string";
import { GetGoodsResponse, Order } from "@/features/main/api/getGoods";
import { API_BASE_URL } from "@/shared/api/constants";
import { api } from "@/shared/lib/axios";

export type GetSearchGoodsRequestParams = {
  q: string;
  order: Order;
  page: number;
};

export type GetSearchGoodsResponse = GetGoodsResponse;

export const getSearchGoodsURL = `${API_BASE_URL}/api/goods/search`;

export const getSearchGoods = async (
  params: GetSearchGoodsRequestParams
): Promise<GetSearchGoodsResponse> => {
  const searchParams = queryString.stringify(params);

  const url = `${getSearchGoodsURL}?${searchParams}`;

  const { data } = await api.get(url);

  return data;
};
