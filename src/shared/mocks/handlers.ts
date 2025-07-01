import { getMockGoodsDetail } from "@/features/goods/detail/api/getGoodsDetail.mock";
import { getMockGoods } from "@/features/main/api/getGoods.mock";
import { getMockSearchGoods } from "@/features/search/api/getSearchGoods.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getMockGoods,
  getMockSearchGoods,
  getMockGoodsDetail,
];
