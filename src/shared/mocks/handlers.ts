import { getMockGoods } from "@/features/main/api/getGoods.mock";
import { getMockSearchGoods } from "@/features/search/api/getMockSearchGoods";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockGoods, getMockSearchGoods];
