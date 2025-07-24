import queryString from "query-string";
import { request } from "@/shared/lib/axios/request";
import {
  GetGoodDetailRequestDto,
  GetGoodDetailResponseDto,
  GetGoodListRequestDto,
  GetGoodListResponseDto,
  GetSearchGoodListRequestDto,
  GetSearchGoodListResponseDto,
} from "./goods.types";

export const GOODS_API_URL = {
  LIST: "/goods",
  SEARCH: "/goods/search",
  DETAIL: "/goods/detail/:goodId",
};

export const getGoodList = (
  params: GetGoodListRequestDto
): Promise<GetGoodListResponseDto> => {
  const searchParams = queryString.stringify(params);
  return request.get(`${GOODS_API_URL.LIST}?${searchParams}`);
};

export const getSearchGoodList = (
  params: GetSearchGoodListRequestDto
): Promise<GetSearchGoodListResponseDto> => {
  const searchParams = queryString.stringify(params);
  return request.get(`${GOODS_API_URL.SEARCH}?${searchParams}`);
};

export const getGoodDetail = (
  goodId: GetGoodDetailRequestDto["goodId"]
): Promise<GetGoodDetailResponseDto> => {
  const url = GOODS_API_URL.DETAIL.replace(":goodId", goodId);
  return request.get(url);
};
