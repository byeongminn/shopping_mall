import Link from "next/link";
import { SelectedOption } from "@/entities/goods/@x/cart";
import { CartItem as CartItemType } from "@/entities/cart/cart.types";
import { RemoveIcon } from "@/features/goods/ui/Icon";
import { GoodSelectedOptionItem } from "@/features/goods/ui/SelectedOptionItem";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "./style.css";

type Props = {
  good: CartItemType;
  itemTotalPrice: number;
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
};

export const CartItem = ({
  good,
  itemTotalPrice,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
}: Props) => {
  const { id, name, options } = good;

  return (
    <li className={s.wrapper}>
      <Link href={`/goods/${id}`} className={s.name}>
        {name}
      </Link>
      <button className={s.removeItemButton} onClick={() => onRemoveItem(id)}>
        <RemoveIcon />
      </button>
      <ul className={s.selectedOptionList}>
        {options.map((opt) => (
          <GoodSelectedOptionItem
            key={opt.id}
            option={opt}
            onIncreaseQuantity={() => onIncreaseQuantity(id, opt.id, opt.type)}
            onDecreaseQuantity={() => onDecreaseQuantity(id, opt.id, opt.type)}
            onRemoveOption={() => onRemoveOption(id, opt.id, opt.type)}
          />
        ))}
      </ul>
      <span className={s.itemTotalPrice}>
        {formatNumberWithCommas(itemTotalPrice)}원
      </span>
    </li>
  );
};
