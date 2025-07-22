import { GoodDetailOption } from "@/entities/goods/goods.types";
import { SelectedOption } from "@/shared/types/selectedOption";
import { OptionSelectorList } from "@/features/goods/ui/OptionSelectorList";
import { SelectedOptionList } from "@/features/goods/ui/SelectedOptionList";
import * as s from "./style.css";

type Props = {
  firstDepthName?: string;
  options: GoodDetailOption[];
  extraOptions?: GoodDetailOption[];
  onAddOptionFromSelect: (
    value: number,
    options: GoodDetailOption[],
    isExtraOption: boolean
  ) => void;
  selectedOptions: SelectedOption[];
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
  onRemoveOption: (index: number) => void;
};

export const GoodOptionsSection = ({
  firstDepthName = "",
  options,
  extraOptions = [],
  onAddOptionFromSelect,
  selectedOptions,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
}: Props) => {
  return (
    <div className={s.container}>
      <OptionSelectorList
        firstDepthName={firstDepthName}
        options={options}
        extraOptions={extraOptions}
        onSelectChange={onAddOptionFromSelect}
      />
      <SelectedOptionList
        selectedOptions={selectedOptions}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onRemoveOption={onRemoveOption}
      />
    </div>
  );
};
