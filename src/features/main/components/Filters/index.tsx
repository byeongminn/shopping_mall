"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Order } from "@/features/main/api/getGoods";
import { FilterItem } from "@/features/main/components/Filters/FilterItem";
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

export const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderParam: Order = (searchParams.get("order") ??
    "recommended") as Order;

  const filterItems = Object.entries(ORDER_TYPO);

  const handleClick = (order: Order) => {
    if (order !== orderParam) {
      router.push(getPageLink({ order }));
    }
  };

  return (
    <div className={s.wrapper}>
      {filterItems.map(([order, text]) => (
        <FilterItem
          key={order}
          text={text}
          isActive={order === orderParam}
          onFilterClick={() => handleClick(order as Order)}
        />
      ))}
    </div>
  );
};
