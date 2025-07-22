import { SelectedOption } from "@/features/goods/model/useSelectedOptions";
import { MinusIcon, PlusIcon, RemoveIcon } from "@/features/goods/ui/Icon";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "@/features/goods/ui/SelectedOptionItem/style.css";

type Props = {
  option: SelectedOption;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveOption: () => void;
};

export const GoodSelectedOptionItem = ({
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
          <RemoveIcon />
        </span>
      </div>
      <div className={s.wrapper}>
        <div className={s.amountWrapper}>
          <span className={s.icon} onClick={onDecreaseQuantity}>
            <MinusIcon />
          </span>
          <span>{quantity}</span>
          <span className={s.icon} onClick={onIncreaseQuantity}>
            <PlusIcon />
          </span>
        </div>
        <span className={s.price}>
          {formatNumberWithCommas(price * quantity)}원
        </span>
      </div>
    </div>
  );
};
