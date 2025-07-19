import { HttpHandler } from "msw";
import { getMockGoodList } from "@/entities/goods/__mocks__/goods.mock";
import { getMockGoodsDetail } from "@/features/goods/detail/api/getGoodsDetail.mock";
import { getMockSearchGoods } from "@/features/search/api/getSearchGoods.mock";

export const handlers: HttpHandler[] = [
  getMockGoodList,
  getMockSearchGoods,
  getMockGoodsDetail,
];
