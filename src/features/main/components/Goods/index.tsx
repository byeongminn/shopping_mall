"use client";

import { useSearchParams } from "next/navigation";
import { useGetGoods } from "../../hooks/useGetGoods";
import { Order } from "../../api/getGoods";

export const Goods = () => {
  const searchParams = useSearchParams();
  const searchQuery = {
    order: (searchParams.get("order") ?? "recommended") as Order,
  };

  const { data, hasNextPage, fetchNextPage } = useGetGoods(searchQuery);

  const flatData = data.pages.map((page) => page.goods ?? []).flat();

  return (
    <section>
      <h3>상품 목록</h3>
      <div>
        {flatData.map((data) => (
          <div key={data.id}>{data.name}</div>
        ))}
      </div>
      {hasNextPage && <button onClick={() => fetchNextPage()}>More</button>}
    </section>
  );
};
