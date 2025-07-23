import { useState, useMemo } from "react";
import { GoodDetailOption, SelectedOption } from "@/entities/goods/goods.types";

export const useSelectedOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

  // 주문 총액 계산
  const totalPrice = useMemo(() => {
    return selectedOptions.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [selectedOptions]);

  // 옵션 추가
  const addOptionFromSelect = (
    value: number,
    options: GoodDetailOption[],
    isExtraOption: boolean
  ) => {
    const isExist = !!selectedOptions.find((option) => option.id === value);

    if (isExist) {
      alert("이미 선택한 옵션입니다.");
      return;
    }

    const selectedOption = options.find(
      (option) => option.id === value
    ) as GoodDetailOption;

    if (!selectedOption) {
      return;
    }

    const newOption: SelectedOption = {
      ...selectedOption,
      type: isExtraOption ? "extraOption" : "option",
      quantity: 1,
    };

    setSelectedOptions((prev) => [...prev, newOption]);
  };

  // 선택 옵션 수정
  const updateItemAtIndex = (index: number, newValue: SelectedOption) => {
    const newSelectedOptions = [
      ...selectedOptions.slice(0, index),
      newValue,
      ...selectedOptions.slice(index + 1),
    ];
    setSelectedOptions(newSelectedOptions);
  };

  // 옵션 개수 1개 추가
  const increaseQuantity = (index: number) => {
    const selectedOption = selectedOptions[index];
    if (selectedOption.quantity < 9999) {
      updateItemAtIndex(index, {
        ...selectedOption,
        quantity: selectedOption.quantity + 1,
      });
    } else {
      alert("1~9999개까지만 입력이 가능합니다.");
    }
  };

  // 옵션 개수 1개 제거
  const decreaseQuantity = (index: number) => {
    const selectedOption = selectedOptions[index];
    if (selectedOption.quantity > 1) {
      updateItemAtIndex(index, {
        ...selectedOption,
        quantity: selectedOption.quantity - 1,
      });
    } else {
      alert("1~9999개까지만 입력이 가능합니다.");
    }
  };

  // 옵션 제거
  const removeOption = (index: number) => {
    const newSelectedOptions = [
      ...selectedOptions.slice(0, index),
      ...selectedOptions.slice(index + 1),
    ];
    setSelectedOptions(newSelectedOptions);
  };

  const clear = () => {
    setSelectedOptions([]);
  };

  return {
    selectedOptions,
    totalPrice,
    addOptionFromSelect,
    increaseQuantity,
    decreaseQuantity,
    removeOption,
    clear,
  };
};
