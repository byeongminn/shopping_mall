import { SelectedOption } from "@/features/goods/model/useSelectedOptions";
import Remove from "@/features/goods/detail/components/Options/SelectedOptionsItem/remove.svg";
import Minus from "@/features/goods/detail/components/Options/SelectedOptionsItem/minus.svg";
import Plus from "@/features/goods/detail/components/Options/SelectedOptionsItem/plus.svg";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

import * as s from "@/features/goods/detail/components/Options/SelectedOptionsItem/style.css";

type Props = {
  option: SelectedOption;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveOption: () => void;
};

export const GoodSelectedOptionsItem = ({
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
        <span className={s.icon} onClick={onRemoveOption}>
          <Remove />
        </span>
      </div>
      <div className={s.wrapper}>
        <div className={s.amountWrapper}>
          <span className={s.icon} onClick={onDecreaseQuantity}>
            <Minus />
          </span>
          <span>{quantity}</span>
          <span className={s.icon} onClick={onIncreaseQuantity}>
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
