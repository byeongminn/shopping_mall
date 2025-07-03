import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { GoodOptionsItem } from "@/features/goods/detail/components/Options/OptionsItem";
import { GoodSelectedOptionsItem } from "@/features/goods/detail/components/Options/SelectedOptionsItem";
import { GoodsDetailOption } from "@/shared/api/house/types/item";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { Button } from "@/shared/components/base/Button";
import { useCartStore } from "@/shared/store/cart";
import * as s from "@/features/goods/detail/components/Options/style.css";

type Props = {
  name: string;
  firstDepthName?: string;
  options: GoodsDetailOption[];
  extraOptions?: GoodsDetailOption[];
};

export type SelectedOption = {
  type: "option" | "extraOption";
  quantity: number;
} & GoodsDetailOption;

export const GoodOptions = ({
  name,
  firstDepthName = "",
  options,
  extraOptions = [],
}: Props) => {
  const { goodId } = useParams<{ goodId: string }>();
  const { addItem } = useCartStore();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

  const totalPrice = useMemo(
    () =>
      selectedOptions.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
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
    if (selectedOption.quantity > 1) {
      updateItemAtIndex(index, {
        ...selectedOption,
        quantity: selectedOption.quantity - 1,
      });
    } else {
      alert("1~9999개까지만 입력이 가능합니다.");
    }
  };

  const handleIncreaseClick = (
    index: number,
    selectedOption: SelectedOption
  ) => {
    if (selectedOption.quantity < 9999) {
      updateItemAtIndex(index, {
        ...selectedOption,
        quantity: selectedOption.quantity + 1,
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

  const handleCartClick = () => {
    const newItem = {
      id: goodId,
      name: name,
      options: selectedOptions,
    };

    addItem(newItem);
  };

  return (
    <div className={s.container}>
      <div className={s.optionsWrapper}>
        <GoodOptionsItem
          isFirst={!!firstDepthName}
          firstDepthName={firstDepthName}
          isExtraOption={false}
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        {extraOptions.length > 0 && (
          <GoodOptionsItem
            isFirst={false}
            firstDepthName="추가상품 (선택)"
            isExtraOption={true}
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
        <Button type="outlined" onClick={handleCartClick}>
          장바구니
        </Button>
        <Button type="filled">바로구매</Button>
      </div>
    </div>
  );
};
