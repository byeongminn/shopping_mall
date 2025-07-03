import { formatNumberWithCommas } from "@/shared/utils/format/number";
import Remove from "@/features/goods/detail/components/Options/SelectedOptionsItem/remove.svg";
import Minus from "@/features/goods/detail/components/Options/SelectedOptionsItem/minus.svg";
import Plus from "@/features/goods/detail/components/Options/SelectedOptionsItem/plus.svg";
import { SelectedOption } from "@/features/goods/detail/components/Options";
import * as s from "@/features/goods/detail/components/Options/SelectedOptionsItem/style.css";

type Props = {
  index: number;
  option: SelectedOption;
  handleDecreaseClick: (index: number, selectedOption: SelectedOption) => void;
  handleIncreaseClick: (index: number, selectedOption: SelectedOption) => void;
  handleRemoveClick: (index: number) => void;
};

export const GoodSelectedOptionsItem = ({
  index,
  option,
  handleDecreaseClick,
  handleIncreaseClick,
  handleRemoveClick,
}: Props) => {
  const { explain, quantity, price, type } = option;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span className={s.explain}>
          {type === "extraOption" && "추가상품 - "}
          {explain}
        </span>
        <span className={s.icon} onClick={() => handleRemoveClick(index)}>
          <Remove />
        </span>
      </div>
      <div className={s.wrapper}>
        <div className={s.amountWrapper}>
          <span
            className={s.icon}
            onClick={() => handleDecreaseClick(index, option)}
          >
            <Minus />
          </span>
          <span>{quantity}</span>
          <span
            className={s.icon}
            onClick={() => handleIncreaseClick(index, option)}
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
