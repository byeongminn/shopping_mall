import { SelectedOption } from "@/shared/types/selectedOption";
import { GoodSelectedOptionItem } from "@/features/goods/ui/SelectedOptionItem";

type Props = {
  selectedOptions: SelectedOption[];
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
  onRemoveOption: (index: number) => void;
};

export const SelectedOptionList = ({
  selectedOptions,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
}: Props) => {
  return (
    <div>
      {selectedOptions.map((option, idx) => (
        <GoodSelectedOptionItem
          key={option.id}
          option={option}
          onIncreaseQuantity={() => onIncreaseQuantity(idx)}
          onDecreaseQuantity={() => onDecreaseQuantity(idx)}
          onRemoveOption={() => onRemoveOption(idx)}
        />
      ))}
    </div>
  );
};
