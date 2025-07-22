import { HttpHandler } from "msw";
import {
  getMockGoodDetail,
  getMockGoodList,
  getMockSearchGoodList,
} from "@/entities/goods/__mocks__/goods.mock";

export const handlers: HttpHandler[] = [
  getMockGoodList,
  getMockSearchGoodList,
  getMockGoodDetail,
];
