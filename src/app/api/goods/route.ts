import { GetGoodListRequestDto, Order } from "@/entities/goods/goods.types";
import { goods } from "@/shared/mock-data/goods";
import { mappingGoodsResponse, orderingGoodsData } from "@/shared/utils/data";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = parseSearchParams(request.nextUrl.searchParams);

    const { order, page } = searchParams;

    const data = goods;

    const mappedData = mappingGoodsResponse(data);

    const orderedData = orderingGoodsData(mappedData, order as Order);

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
