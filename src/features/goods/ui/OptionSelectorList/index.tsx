import { GoodDetailOption } from "@/entities/goods/goods.types";
import { OptionSelectorItem } from "@/features/goods/ui/OptionSelectorItem";
import * as s from "./style.css";

type Props = {
  firstDepthName?: string;
  options: GoodDetailOption[];
  extraOptions: GoodDetailOption[];
  onSelectChange: (
    value: number,
    options: GoodDetailOption[],
    isExtraOption: boolean
  ) => void;
};

export const OptionSelectorList = ({
  firstDepthName,
  options,
  extraOptions,
  onSelectChange,
}: Props) => {
  return (
    <div className={s.wrapper}>
      <OptionSelectorItem
        isFirst={!!firstDepthName}
        firstDepthName={firstDepthName}
        isExtraOption={false}
        options={options}
        onSelectChange={onSelectChange}
      />
      {extraOptions.length > 0 && (
        <OptionSelectorItem
          isFirst={false}
          firstDepthName="추가상품 (선택)"
          isExtraOption={true}
          options={extraOptions}
          onSelectChange={onSelectChange}
        />
      )}
    </div>
  );
};
