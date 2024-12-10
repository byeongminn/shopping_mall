import { Order } from "@/features/main/api/getGoods";
import queryString from "query-string";

export const getSearchPageLink = (params: { q: string; order?: Order }) => {
  const parsedParams = queryString.parse(location.search);

  if (params.q) parsedParams.q = params.q;
  if (params.order) parsedParams.order = params.order;

  return `/search?${queryString.stringify(parsedParams)}`;
};
