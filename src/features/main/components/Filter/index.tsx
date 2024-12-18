"use client";

import { useMemo } from "react";
import { Order } from "../../api/getGoods";
import { useRouter, useSearchParams } from "next/navigation";
import { getPageLink } from "@/shared/utils/link/page";
import * as s from "./style.css";

const ORDER_TYPO: Record<Order, string> = {
  recommended: "추천순",
  priceAsc: "가격 낮은순",
  priceDesc: "가격 높은순",
  discountRate: "할인율 높은순",
  reviewCount: "리뷰 많은순",
  reviewAverage: "평점 높은순",
};

export const Filter = () => {
  const searchParams = useSearchParams();
  const orderParam: Order = (searchParams.get("order") ??
    "recommended") as Order;
  const router = useRouter();

  const order: Order = useMemo(() => {
    return orderParam;
  }, [orderParam]);

  const filterItems = Object.entries(ORDER_TYPO);

  const handleClick = (order: Order) => {
    router.push(getPageLink({ order }));
  };

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        {filterItems.map(([key, value]) => (
          <div
            className={s.chip({ active: key === order })}
            key={key}
            onClick={() => {
              if (key !== order) {
                handleClick(key as Order);
              }
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </section>
  );
};
