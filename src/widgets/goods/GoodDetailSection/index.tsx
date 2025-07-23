"use client";

import { GetGoodDetailRequestDto } from "@/entities/goods/goods.types";
import { useGetGoodDetail } from "@/features/goods/model/useGetGoodDetail";
import { useSelectedOptions } from "@/features/goods/model/useSelectedOptions";
import { useCartStore } from "@/features/cart/model/useCartStore";
import { TotalPriceInfo } from "@/features/goods/ui/TotalPriceInfo";
import { ActionPanel } from "@/features/goods/ui/ActionPanel";
import { GoodImageSection } from "@/widgets/goods/GoodImageSection";
import { GoodSummarySection } from "@/widgets/goods/GoodSummarySection";
import { GoodOptionsSection } from "@/widgets/goods/GoodOptionsSection";
import * as s from "./style.css";

type Props = Pick<GetGoodDetailRequestDto, "goodId">;

export const GoodDetailSection = ({ goodId }: Props) => {
  const { data } = useGetGoodDetail({ goodId });
  const { addItem } = useCartStore();
  const {
    selectedOptions,
    totalPrice,
    addOptionFromSelect,
    increaseQuantity,
    decreaseQuantity,
    removeOption,
    clear,
  } = useSelectedOptions();

  const handleCartClick = () => {
    if (!data || selectedOptions.length === 0) return;
    const newItem = {
      id: goodId,
      name: data.name,
      options: selectedOptions,
    };

    addItem(newItem);
    clear();
    alert("장바구니에 담았어요.");
  };

  const handleBuyClick = () => {
    if (!data || selectedOptions.length === 0) return;
    clear();
    alert("구매가 완료되었습니다!");
  };

  if (!data) {
    return (
      <section className={s.container}>
        <div className={s.overviewWrapper}>
          <p>상품을 찾을 수 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.overviewWrapper}>
        <div className={s.thumbnailWrapper}>
          <GoodImageSection images={data.subImages} />
        </div>
        <div className={s.contentWrapper}>
          <GoodSummarySection good={data} />
          <GoodOptionsSection
            firstDepthName={data.firstDepthName || ""}
            options={data.options || []}
            extraOptions={data.extraOptions || []}
            onAddOptionFromSelect={addOptionFromSelect}
            selectedOptions={selectedOptions}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onRemoveOption={removeOption}
          />
          <TotalPriceInfo totalPrice={totalPrice} />
          <ActionPanel
            onCartClick={handleCartClick}
            onBuyClick={handleBuyClick}
          />
        </div>
      </div>
      <div className={s.descriptionWrapper}>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
};
