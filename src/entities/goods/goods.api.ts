import queryString from "query-string";
import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import { GetGoodListRequestDto, GetGoodListResponseDto } from "./goods.types";

export const GOODS_API_URL = {
  LIST: `${API_BASE_URL}/api/goods`,
};

export const getGoodList = async (
  params: GetGoodListRequestDto
): Promise<GetGoodListResponseDto> => {
  const searchParams = queryString.stringify(params);

  const url = `${GOODS_API_URL.LIST}?${searchParams}`;

  const { data } = await api.get(url);

  return data;
};
