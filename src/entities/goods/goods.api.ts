import queryString from "query-string";
import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import {
  GetGoodListRequestDto,
  GetGoodListResponseDto,
  GetSearchGoodListRequestDto,
  GetSearchGoodListResponseDto,
} from "./goods.types";

export const GOODS_API_URL = {
  LIST: `${API_BASE_URL}/api/goods`,
  SEARCH: `${API_BASE_URL}/api/goods/search`,
};

export const getGoodList = async (
  params: GetGoodListRequestDto
): Promise<GetGoodListResponseDto> => {
  const searchParams = queryString.stringify(params);

  const url = `${GOODS_API_URL.LIST}?${searchParams}`;

  const { data } = await api.get(url);

  return data;
};

export const getSearchGoodList = async (
  params: GetSearchGoodListRequestDto
): Promise<GetSearchGoodListResponseDto> => {
  const searchParams = queryString.stringify(params);

  const url = `${GOODS_API_URL.SEARCH}?${searchParams}`;

  const { data } = await api.get(url);

  return data;
};
