import { api } from "@/shared/lib/axios";
import { API_BASE_URL } from "@/shared/api/constants";
import { GoodDetail } from "@/entities/goods/goods.types";

export type GetGoodsDetailRequestParams = {
  goodId: string;
};

export type GetGoodsDetailResponse = GoodDetail;

export const GetGoodsDetailURL = `${API_BASE_URL}/api/goods/detail/:goodId`;

export const getGoodsDetail = async (
  goodId: GetGoodsDetailRequestParams["goodId"]
): Promise<GetGoodsDetailResponse> => {
  const url = GetGoodsDetailURL.replace(":goodId", goodId);

  const { data } = await api.get(url);

  return data;
};
