import { CartItem } from "@/entities/cart/cart.types";
import { formatNumberWithCommas } from "@/shared/utils/format";
import * as s from "./style.css";

type Props = {
  goods: CartItem[];
  cartTotalPrice: number;
  onBuyClick: () => void;
};

export const CartSummary = ({ goods, cartTotalPrice, onBuyClick }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.cartTotalPriceWrapper}>
        <p className={s.cartTotalPriceLabel}>총 상품금액</p>
        <span className={s.cartTotalPrice}>
          {formatNumberWithCommas(cartTotalPrice)}원
        </span>
      </div>
      <button className={s.buyButton} onClick={onBuyClick}>
        {goods.length ?? 0}개 상품 구매하기
      </button>
    </div>
  );
};
