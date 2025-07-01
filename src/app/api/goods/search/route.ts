import { NextRequest } from "next/server";
import { Order } from "@/features/main/api/getGoods";
import { RawGoodDTO } from "@/shared/api/house/types/item";
import { goods } from "@/shared/mock-data/goods";
import { mappingGoodsResponse, orderingGoodsData } from "@/shared/utils/data";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = parseSearchParams(request.nextUrl.searchParams);
    const { q, order, page } = searchParams;

    const data = goods;

    const foundData = findingData(data, q);

    const mappedData = mappingGoodsResponse(foundData);

    const orderedData = orderingGoodsData(mappedData, order);

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

const parseSearchParams = (params: URLSearchParams) => {
  return {
    q: params.get("q") ?? "",
    order: (params.get("order") ?? "recommended") as Order,
    page: Number(params.get("page") ?? "1"),
  };
};

const findingData = (data: RawGoodDTO[], q: string) => {
  return data.filter((good) => good?.name?.includes(q));
};
