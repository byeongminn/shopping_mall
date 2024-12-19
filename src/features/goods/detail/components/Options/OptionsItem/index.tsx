import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { GoodsDetailOption } from "../../../api/getGoodsDetail";
import ArrowBottom from "./arrowBottom.svg";
import * as s from "./style.css";
import { Dispatch, SetStateAction } from "react";

type SelectedOption = {
  value: number;
} & GoodsDetailOption;

type Props = {
  isFirst: boolean;
  firstDepthName?: string;
  options: GoodsDetailOption[];
  selectedOptions: SelectedOption[];
  setSelectedOptions: Dispatch<SetStateAction<SelectedOption[]>>;
};

export const GoodOptionsItem = ({
  isFirst,
  firstDepthName,
  options,
  selectedOptions,
  setSelectedOptions,
}: Props) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const isExist = !!selectedOptions.find(
      (option) => option.id === Number(event.target.value)
    );

    const selectedOption = options.find(
      (option) => option.id === Number(event.target.value)
    ) as SelectedOption;

    if (!isExist) {
      setSelectedOptions((prev) => [...prev, { ...selectedOption, value: 1 }]);
    } else {
      alert("이미 선택한 옵션입니다.");
    }
  };

  return (
    <div className={s.container}>
      <select
        className={s.selectWrapper({ isFirst })}
        value={-1}
        onChange={handleSelectChange}
        aria-label={firstDepthName}
      >
        <option value={-1} disabled>
          {firstDepthName}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.explain}({formatNumberWithCommas(option.selling_cost)}
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
