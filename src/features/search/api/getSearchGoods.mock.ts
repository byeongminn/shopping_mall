import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchGoodsURL } from "./getSearchGoods";
import { goods } from "@/shared/mock-data/goods";

export const getMockSearchGoods: HttpHandler = http.get(
  getSearchGoodsURL,
  () => {
    return HttpResponse.json(GET_MOCK_SEARCH_GOODS.success);
  }
);

const GET_MOCK_SEARCH_GOODS = {
  success: {
    goods: goods.slice(0, 20).filter((good) => good?.name?.includes("소파")),
    totalResults: 2,
  },
};
