import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { GoodsDetailOption } from "../../api/getGoodsDetail";
import { GoodOptionsItem } from "./OptionsItem";
import * as s from "./style.css";
import { Button } from "@/shared/components/base/Button";
import { useMemo, useState } from "react";
import { GoodSelectedOptionsItem } from "./SelectedOptionsItem";

type Props = {
  firstDepthName?: string;
  options: GoodsDetailOption[];
  extraOptions?: GoodsDetailOption[];
};

type SelectedOption = {
  value: number;
} & GoodsDetailOption;

export const GoodOptions = ({
  firstDepthName = "",
  options,
  extraOptions = [],
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

  const totalPrice = useMemo(
    () =>
      selectedOptions.reduce((acc, curr) => acc + curr.price * curr.value, 0),
    [selectedOptions]
  );

  const updateItemAtIndex = (index: number, newValue: SelectedOption) => {
    const newSelectedOptions = [
      ...selectedOptions.slice(0, index),
      newValue,
      ...selectedOptions.slice(index + 1),
    ];

    setSelectedOptions(newSelectedOptions);
  };

  const handleDecreaseClick = (
    index: number,
    selectedOption: SelectedOption
  ) => {
    if (selectedOption.value > 1) {
      updateItemAtIndex(index, {
        ...selectedOption,
        value: selectedOption.value - 1,
      });
    } else {
      alert("1~9999개까지만 입력이 가능합니다.");
    }
  };

  const handleIncreaseClick = (
    index: number,
    selectedOption: SelectedOption
  ) => {
    if (selectedOption.value < 9999) {
      updateItemAtIndex(index, {
        ...selectedOption,
        value: selectedOption.value + 1,
      });
    } else {
      alert("1~9999개까지만 입력이 가능합니다.");
    }
  };

  const handleRemoveClick = (index: number) => {
    const newSelectedOptions = [
      ...selectedOptions.slice(0, index),
      ...selectedOptions.slice(index + 1),
    ];

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className={s.container}>
      <div className={s.optionsWrapper}>
        <GoodOptionsItem
          isFirst={!!firstDepthName}
          firstDepthName={firstDepthName}
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        {extraOptions.length > 0 && (
          <GoodOptionsItem
            isFirst={false}
            firstDepthName="추가상품 (선택)"
            options={extraOptions}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        )}
      </div>
      <div>
        {selectedOptions.map((option, idx) => (
          <GoodSelectedOptionsItem
            key={option.id}
            index={idx}
            option={option}
            handleDecreaseClick={handleDecreaseClick}
            handleIncreaseClick={handleIncreaseClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </div>
      <p className={s.priceWrapper}>
        <span className={s.text}>주문금액</span>
        <span className={s.price}>{formatNumberWithCommas(totalPrice)}원</span>
      </p>
      <div className={s.buttonWrapper}>
        <Button type="outlined">장바구니</Button>
        <Button type="filled">바로구매</Button>
      </div>
    </div>
  );
};
