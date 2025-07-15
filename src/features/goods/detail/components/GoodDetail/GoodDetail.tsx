import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import { ThumbnailSwiper } from "@/features/goods/detail/components/ThumbnailSwiper";
import { GoodDescription } from "@/features/goods/detail/components/Description";
import { GoodsDetail, GoodsDetailOption } from "@/shared/api/house/types/item";
import * as s from "./style.css";

type GoodDetailProps = {
  data: GoodsDetail;
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

export const GoodDetail = ({
  data,
  selectedOptions,
  totalPrice,
  onAddOptionFromSelect,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
  onCartClick,
}: GoodDetailProps) => {
  const { subImages } = data;

  return (
    <section className={s.container}>
      <div className={s.overviewWrapper}>
        <div className={s.thumbnailWrapper}>
          <ThumbnailSwiper images={subImages} />
        </div>
        <div className={s.contentWrapper}>
          <GoodDescription
            good={data}
            totalPrice={totalPrice}
            selectedOptions={selectedOptions}
            onAddOptionFromSelect={onAddOptionFromSelect}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onRemoveOption={onRemoveOption}
            onCartClick={onCartClick}
          />
        </div>
      </div>
      <div className={s.descriptionWrapper}>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </section>
  );
};
