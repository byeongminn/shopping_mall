import { SelectedOption } from "@/entities/goods/@x/cart";
import { CartItem as CartItemType } from "@/entities/cart/cart.types";
import { CartItem } from "@/features/cart/ui/CartItem";
import * as s from "./style.css";

type Props = {
  goods: CartItemType[];
  itemTotalPrices: {
    id: string;
    totalPrice: number;
  }[];
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

export const CartList = ({
  goods,
  itemTotalPrices,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
}: Props) => {
  return (
    <ul className={s.wrapper}>
      {goods.map((good) => (
        <CartItem
          key={good.id}
          good={good}
          itemTotalPrice={
            itemTotalPrices.find((x) => x.id === good.id)?.totalPrice ?? 0
          }
          onRemoveItem={onRemoveItem}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onRemoveOption={onRemoveOption}
        />
      ))}
    </ul>
  );
};
