import { GoodSelectedOptionsItem } from "@/features/goods/detail/components/Options/SelectedOptionsItem";
import { SelectedOption } from "@/features/goods/model/useSelectedOptions";
import Remove from "@/features/goods/detail/components/Options/SelectedOptionsItem/remove.svg";
import { CartItem } from "@/shared/store/cart";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "./style.css";
import Link from "next/link";

type CartListProps = {
  goods: CartItem[];
  onRemoveItem: (id: string) => void;
  onIncreaseQuantity: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  onDecreaseQuantity: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  onRemoveOption: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  onBuyClick: () => void;
  itemTotalPrices: {
    id: string;
    totalPrice: number;
  }[];
  cartTotalPrice: number;
};

export const CartList = ({
  goods,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
  onBuyClick,
  itemTotalPrices,
  cartTotalPrice,
}: CartListProps) => {
  return (
    <div className={s.cartWrapper}>
      <ul className={s.cartListWrapper}>
        {goods.map(({ id, name, options }) => (
          <li key={id} className={s.cartItemWrapper}>
            <Link href={`/goods/${id}`} className={s.name}>
              {name}
            </Link>
            <button
              className={s.removeItemButton}
              onClick={() => onRemoveItem(id)}
            >
              <Remove />
            </button>
            <ul>
              {options.map((opt) => (
                <GoodSelectedOptionsItem
                  key={opt.id}
                  option={opt}
                  onIncreaseQuantity={() =>
                    onIncreaseQuantity(id, opt.id, opt.type)
                  }
                  onDecreaseQuantity={() =>
                    onDecreaseQuantity(id, opt.id, opt.type)
                  }
                  onRemoveOption={() => onRemoveOption(id, opt.id, opt.type)}
                />
              ))}
            </ul>
            <span className={s.itemTotalPrice}>
              {formatNumberWithCommas(
                itemTotalPrices.find((x) => x.id === id)?.totalPrice ?? 0
              )}
              원
            </span>
          </li>
        ))}
      </ul>
      <div className={s.buttonWrapper}>
        <div className={s.cartTotalPriceWrapper}>
          <p className={s.cartTotalPriceLabel}>총 상품금액</p>
          <span className={s.cartTotalPrice}>
            {formatNumberWithCommas(cartTotalPrice)}원
          </span>
        </div>
        <button className={s.purchaseButton} onClick={onBuyClick}>
          {goods.length ?? 0}개 상품 구매하기
        </button>
      </div>
    </div>
  );
};
