import { HttpHandler, HttpResponse, http } from "msw";
import {
  MOCK_GOOD_LIST,
  MOCK_SEARCH_GOOD_LIST,
  MOCK_GOOD_DETAIL,
} from "@/mocks/data/goods.mock";
import { GOODS_API_URL } from "@/entities/goods/goods.api";

const getMockGoodList: HttpHandler = http.get(GOODS_API_URL.LIST, () => {
  return HttpResponse.json(MOCK_GOOD_LIST.success);
});

const getMockSearchGoodList: HttpHandler = http.get(
  GOODS_API_URL.SEARCH,
  () => {
    return HttpResponse.json(MOCK_SEARCH_GOOD_LIST.success);
  }
);

const getMockGoodDetail: HttpHandler = http.get(GOODS_API_URL.DETAIL, () => {
  return HttpResponse.json(MOCK_GOOD_DETAIL.success);
});

export const handlers: HttpHandler[] = [
  getMockGoodList,
  getMockSearchGoodList,
  getMockGoodDetail,
];
