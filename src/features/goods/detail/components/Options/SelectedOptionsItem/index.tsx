import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import Remove from "@/features/goods/detail/components/Options/SelectedOptionsItem/remove.svg";
import Minus from "@/features/goods/detail/components/Options/SelectedOptionsItem/minus.svg";
import Plus from "@/features/goods/detail/components/Options/SelectedOptionsItem/plus.svg";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

import * as s from "@/features/goods/detail/components/Options/SelectedOptionsItem/style.css";

type Props = {
  index: number;
  option: SelectedOption;
  onIncreaseQuantity: (index: number, selectedOption: SelectedOption) => void;
  onDecreaseQuantity: (index: number, selectedOption: SelectedOption) => void;
  onRemoveOption: (index: number) => void;
};

export const GoodSelectedOptionsItem = ({
  index,
  option,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
}: Props) => {
  const { explain, quantity, price, type } = option;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span className={s.explain}>
          {type === "extraOption" && "추가상품 - "}
          {explain}
        </span>
        <span className={s.icon} onClick={() => onRemoveOption(index)}>
          <Remove />
        </span>
      </div>
      <div className={s.wrapper}>
        <div className={s.amountWrapper}>
          <span
            className={s.icon}
            onClick={() => onDecreaseQuantity(index, option)}
          >
            <Minus />
          </span>
          <span>{quantity}</span>
          <span
            className={s.icon}
            onClick={() => onIncreaseQuantity(index, option)}
          >
            <Plus />
          </span>
        </div>
        <span className={s.price}>
          {formatNumberWithCommas(price * quantity)}원
        </span>
      </div>
    </div>
  );
};
