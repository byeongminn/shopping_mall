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
    getItemTotalPrice,
    getCartTotalPrice,
  } = useCartStore();

  const itemTotalPrices = items.map((item) => ({
    id: item.id,
    totalPrice: getItemTotalPrice(item.id),
  }));

  const cartTotalPrice = getCartTotalPrice();

  return (
    <CartList
      goods={items}
      onRemoveItem={removeItem}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity}
      onRemoveOption={removeOption}
      itemTotalPrices={itemTotalPrices}
      cartTotalPrice={cartTotalPrice}
    />
  );
};
