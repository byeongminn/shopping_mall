"use client";

import { GetGoodDetailRequestDto } from "@/entities/goods/goods.types";
import { useSelectedOptions } from "@/features/goods/detail/hooks/useSelectedOptions";
import { GoodDetail } from "@/features/goods/detail/components/GoodDetail/GoodDetail";
import { useGetGoodsDetail } from "@/features/goods/detail/hooks/useGetGoodsDetail";
import { useCartStore } from "@/shared/store/cart";
import * as s from "./style.css";

type Props = Pick<GetGoodDetailRequestDto, "goodId">;

export const GoodDetailContainer = ({ goodId }: Props) => {
  const { data } = useGetGoodsDetail({ goodId });
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
    <GoodDetail
      data={data}
      selectedOptions={selectedOptions}
      totalPrice={totalPrice}
      onAddOptionFromSelect={addOptionFromSelect}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity}
      onRemoveOption={removeOption}
      onCartClick={handleCartClick}
      onBuyClick={handleBuyClick}
    />
  );
};
