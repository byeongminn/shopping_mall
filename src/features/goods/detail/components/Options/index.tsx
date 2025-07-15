import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import { GoodOptionsItem } from "@/features/goods/detail/components/Options/OptionsItem";
import { GoodSelectedOptionsItem } from "@/features/goods/detail/components/Options/SelectedOptionsItem";
import { GoodsDetailOption } from "@/shared/api/house/types/item";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import { Button } from "@/shared/components/base/Button";

import * as s from "@/features/goods/detail/components/Options/style.css";

type Props = {
  firstDepthName?: string;
  options: GoodsDetailOption[];
  extraOptions?: GoodsDetailOption[];
  selectedOptions: SelectedOption[];
  totalPrice: number;
  onAddOptionFromSelect: (
    value: number,
    options: GoodsDetailOption[],
    isExtraOption: boolean
  ) => void;
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
  onRemoveOption: (index: number) => void;
  onCartClick: () => void;
};

export const GoodOptions = ({
  firstDepthName = "",
  options,
  extraOptions = [],
  selectedOptions,
  totalPrice,
  onAddOptionFromSelect,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
  onCartClick,
}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.optionsWrapper}>
        <GoodOptionsItem
          isFirst={!!firstDepthName}
          firstDepthName={firstDepthName}
          isExtraOption={false}
          options={options}
          onSelectChange={onAddOptionFromSelect}
        />
        {extraOptions.length > 0 && (
          <GoodOptionsItem
            isFirst={false}
            firstDepthName="추가상품 (선택)"
            isExtraOption={true}
            options={extraOptions}
            onSelectChange={onAddOptionFromSelect}
          />
        )}
      </div>
      <div>
        {selectedOptions.map((option, idx) => (
          <GoodSelectedOptionsItem
            key={option.id}
            index={idx}
            option={option}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onRemoveOption={onRemoveOption}
          />
        ))}
      </div>
      <p className={s.priceWrapper}>
        <span className={s.text}>주문금액</span>
        <span className={s.price}>{formatNumberWithCommas(totalPrice)}원</span>
      </p>
      <div className={s.buttonWrapper}>
        <Button type="outlined" onClick={onCartClick}>
          장바구니
        </Button>
        <Button type="filled">바로구매</Button>
      </div>
    </div>
  );
};
