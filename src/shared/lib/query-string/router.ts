import queryString from "query-string";

export const getPageLink = (params: {
  seg?: string;
  q?: string;
  order?: string;
}) => {
  const parsedParams = queryString.parse(location.search);

  if (params.q) parsedParams.q = params.q;
  if (params.order) parsedParams.order = params.order;

  return `${params.seg ?? location.pathname}?${queryString.stringify(
    parsedParams
  )}`;
};
