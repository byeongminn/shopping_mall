import { HttpHandler } from "msw";
import {
  getMockGoodList,
  getMockSearchGoodList,
} from "@/entities/goods/__mocks__/goods.mock";
import { getMockGoodsDetail } from "@/features/goods/detail/api/getGoodsDetail.mock";

export const handlers: HttpHandler[] = [
  getMockGoodList,
  getMockSearchGoodList,
  getMockGoodsDetail,
];
