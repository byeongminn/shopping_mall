import ArrowBottom from "@/features/goods/detail/components/Options/OptionsItem/arrowBottom.svg";
import { GoodsDetailOption } from "@/shared/api/house/types/item";
import { formatNumberWithCommas } from "@/shared/utils/format/number";

import * as s from "@/features/goods/detail/components/Options/OptionsItem/style.css";

type Props = {
  isFirst: boolean;
  firstDepthName?: string;
  isExtraOption: boolean;
  options: GoodsDetailOption[];
  onSelectChange: (
    value: number,
    options: GoodsDetailOption[],
    isExtraOption: boolean
  ) => void;
};

export const GoodOptionsItem = ({
  isFirst,
  firstDepthName,
  isExtraOption,
  options,
  onSelectChange,
}: Props) => {
  return (
    <div className={s.container}>
      <select
        className={s.selectWrapper({ isFirst })}
        value={-1}
        onChange={(e) =>
          onSelectChange(Number(e.target.value), options, isExtraOption)
        }
        aria-label={firstDepthName}
      >
        <option value={-1} disabled>
          {firstDepthName}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.explain}({formatNumberWithCommas(option.price)}
            원)
          </option>
        ))}
      </select>
      <span className={s.arrowWrapper({ isFirst })}>
        <ArrowBottom />
      </span>
    </div>
  );
};
