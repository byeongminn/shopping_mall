import { Dispatch, SetStateAction } from "react";
import ArrowBottom from "@/features/goods/detail/components/Options/OptionsItem/arrowBottom.svg";
import { SelectedOption } from "@/features/goods/detail/components/Options";
import { GoodsDetailOption } from "@/shared/api/house/types/item";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "@/features/goods/detail/components/Options/OptionsItem/style.css";

type Props = {
  isFirst: boolean;
  firstDepthName?: string;
  isExtraOption: boolean;
  options: GoodsDetailOption[];
  selectedOptions: SelectedOption[];
  setSelectedOptions: Dispatch<SetStateAction<SelectedOption[]>>;
};

export const GoodOptionsItem = ({
  isFirst,
  firstDepthName,
  isExtraOption,
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
      if (!isExtraOption) {
        const newOption: SelectedOption = {
          ...selectedOption,
          type: "option",
          quantity: 1,
        };

        setSelectedOptions((prev) => [...prev, newOption]);
      } else {
        const newOption: SelectedOption = {
          ...selectedOption,
          type: "extraOption",
          quantity: 1,
        };

        setSelectedOptions((prev) => [...prev, newOption]);
      }
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
