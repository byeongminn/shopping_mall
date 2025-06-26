import { HttpHandler, HttpResponse, http } from "msw";
import { getGoodsURL } from "./getGoods";
import { goods } from "@/shared/mock-data/goods";

export const getMockGoods: HttpHandler = http.get(getGoodsURL, () => {
  return HttpResponse.json(GET_MOCK_GOODS.success);
});

export const GET_MOCK_GOODS = {
  success: {
    goods: goods.slice(0, 20),
    totalResults: 20,
  },
};
