import queryString from "query-string";
import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import {
  GetGoodDetailRequestDto,
  GetGoodDetailResponseDto,
  GetGoodListRequestDto,
  GetGoodListResponseDto,
  GetSearchGoodListRequestDto,
  GetSearchGoodListResponseDto,
} from "./goods.types";

export const GOODS_API_URL = {
  LIST: `${API_BASE_URL}/api/goods`,
  SEARCH: `${API_BASE_URL}/api/goods/search`,
  DETAIL: `${API_BASE_URL}/api/goods/detail/:goodId`,
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

export const getGoodDetail = async (
  goodId: GetGoodDetailRequestDto["goodId"]
): Promise<GetGoodDetailResponseDto> => {
  const url = GOODS_API_URL.DETAIL.replace(":goodId", goodId);

  const { data } = await api.get(url);

  return data;
};
