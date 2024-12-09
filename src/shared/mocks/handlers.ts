import { getMockGoods } from "@/features/main/api/getGoods.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockGoods];
