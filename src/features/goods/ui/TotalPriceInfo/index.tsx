import { formatNumberWithCommas } from "@/shared/utils/format";
import * as s from "./style.css";

type Props = {
  totalPrice: number;
};

export const TotalPriceInfo = ({ totalPrice }: Props) => {
  return (
    <p className={s.priceWrapper}>
      <span className={s.text}>주문금액</span>
      <span className={s.price}>{formatNumberWithCommas(totalPrice)}원</span>
    </p>
  );
};
