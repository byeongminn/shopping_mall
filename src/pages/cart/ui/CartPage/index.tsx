import { useCartStore } from "@/features/cart/model/useCartStore";
import { CartList } from "@/features/cart/ui/CartList";
import { CartSummary } from "@/features/cart/ui/CartSummary";
import * as s from "./style.css";

export const CartPage = () => {
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

  if (items.length === 0) {
    return (
      <div className={s.emptyWrapper}>
        <p className={s.empty}>장바구니에 담긴 상품이 없어요</p>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <CartList
        goods={items}
        itemTotalPrices={itemTotalPrices}
        onRemoveItem={removeItem}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        onRemoveOption={removeOption}
      />
      <CartSummary
        goods={items}
        cartTotalPrice={cartTotalPrice}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
};
