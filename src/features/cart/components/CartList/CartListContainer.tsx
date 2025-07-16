"use client";

import { useCartStore } from "@/shared/store/cart";
import { CartList } from "./CartList";

export const CartListContainer = () => {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    removeOption,
    clear,
    getItemTotalPrice,
    getCartTotalPrice,
  } = useCartStore();

  const itemTotalPrices = items.map((item) => ({
    id: item.id,
    totalPrice: getItemTotalPrice(item.id),
  }));

  const cartTotalPrice = getCartTotalPrice();

  const handleBuyClick = () => {
    if (items.length === 0) return;
    clear();
    alert("구매가 완료되었습니다!");
  };

  return (
    <CartList
      goods={items}
      onRemoveItem={removeItem}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity}
      onRemoveOption={removeOption}
      onBuyClick={handleBuyClick}
      itemTotalPrices={itemTotalPrices}
      cartTotalPrice={cartTotalPrice}
    />
  );
};
