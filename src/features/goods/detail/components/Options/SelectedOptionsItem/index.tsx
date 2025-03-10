import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { GoodsDetailOption } from "../../../api/getGoodsDetail";
import Remove from "./remove.svg";
import Minus from "./minus.svg";
import Plus from "./plus.svg";
import * as s from "./style.css";

type SelectedOption = {
  value: number;
} & GoodsDetailOption;

type Props = {
  index: number;
  option: {
    value: number;
  } & GoodsDetailOption;
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
  const { explain, value, price } = option;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span className={s.explain}>{explain}</span>
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
          <span>{value}</span>
          <span
            className={s.icon}
            onClick={() => handleIncreaseClick(index, option)}
          >
            <Plus />
          </span>
        </div>
        <span className={s.price}>
          {formatNumberWithCommas(price * value)}원
        </span>
      </div>
    </div>
  );
};
