"use client";

import { useSearchParams } from "next/navigation";
import { useGetGoods } from "../../hooks/useGetGoods";
import { Order } from "../../api/getGoods";
import { GoodItem } from "./GoodItem";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import * as s from "./style.css";

export const MainGoods = () => {
  const searchParams = useSearchParams();
  const searchQuery = {
    order: (searchParams?.get("order") ?? "recommended") as Order,
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGoods(searchQuery);

  const flatData = data.pages.map((page) => page.goods ?? []).flat();

  return (
    <>
      <div className={s.wrapper}>
        {flatData.map((data, idx) => (
          <GoodItem key={idx} good={data} />
        ))}
      </div>
      {hasNextPage && !isFetchingNextPage && (
        <VisibilityLoader
          callback={() => !isFetchingNextPage && fetchNextPage()}
        />
      )}
    </>
  );
};
