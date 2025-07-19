import queryString from "query-string";
import { Order } from "@/entities/goods/goods.types";

export const getPageLink = (params: {
  seg?: string;
  q?: string;
  order?: Order;
}) => {
  const parsedParams = queryString.parse(location.search);

  if (params.q) parsedParams.q = params.q;
  if (params.order) parsedParams.order = params.order;

  return `${params.seg ?? location.pathname}?${queryString.stringify(
    parsedParams
  )}`;
};

export const getSearchPageLink = (params: { q: string; order?: Order }) =>
  getPageLink({ seg: "/search", q: params.q, order: params.order });
