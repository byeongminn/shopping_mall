import { NextRequest } from "next/server";
import { GetGoodListRequestDto, Order } from "@/entities/goods/goods.types";
import {
  mappingGoodListResponse,
  orderingGoodListData,
} from "@/features/goods/lib/goodListUtils";
import { goods } from "@/dummies/goods.dummy";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = parseSearchParams(request.nextUrl.searchParams);

    const { order, page } = searchParams;

    const data = goods;

    const mappedData = mappingGoodListResponse(data);

    const orderedData = orderingGoodListData(mappedData, order as Order);

    const pageSize = 20;

    const paginated = orderedData.goods.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    return Response.json({
      goods: paginated,
      totalResults: orderedData.totalResults,
    });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const parseSearchParams = (params: URLSearchParams): GetGoodListRequestDto => {
  return {
    order: (params.get("order") ?? "recommended") as Order,
    page: Number(params.get("page") ?? "1"),
  };
};
