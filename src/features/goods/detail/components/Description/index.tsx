import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import { ReviewStatistics } from "@/features/goods/detail/components/ReviewStatistics";
import { GoodOptions } from "@/features/goods/detail/components/Options";
import Check from "@/features/goods/detail/components/Description/check.svg";
import ArrowRight from "@/features/goods/detail/components/Description/arrowRight.svg";
import {
  GetGoodDetailResponseDto,
  GoodDetailOption,
} from "@/entities/goods/goods.types";
import { DepartureTodayIcon, SpecialPriceIcon } from "@/features/goods/ui/Icon";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "@/features/goods/detail/components/Description/style.css";

type Props = {
  good: GetGoodDetailResponseDto;
  selectedOptions: SelectedOption[];
  totalPrice: number;
  onAddOptionFromSelect: (
    value: number,
    options: GoodDetailOption[],
    isExtraOption: boolean
  ) => void;
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
  onRemoveOption: (index: number) => void;
  onCartClick: () => void;
  onBuyClick: () => void;
};

export const GoodDescription = ({
  good,
  selectedOptions,
  totalPrice,
  onAddOptionFromSelect,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveOption,
  onCartClick,
  onBuyClick,
}: Props) => {
  const {
    brand,
    delivery,
    extraOptions,
    firstDepthName,
    badgeProperties,
    name,
    options,
    price,
    reviewStatistic,
  } = good;

  return (
    <div>
      {/* 브랜드명 & 상품명 */}
      <p className={s.brandName}>{brand.name}</p>
      <p className={s.goodName}>{name}</p>

      {/* 평점 및 리뷰 수 */}
      <div className={s.reviewStatisticsWrapper}>
        <ReviewStatistics
          reviewAverageDisplayText={reviewStatistic.reviewAverageDisplayText}
          reviewCountDisplayText={reviewStatistic.reviewCountDisplayText}
          isVisibleReviewCount
        />
      </div>

      {/* 상품 가격 정보 */}
      <div className={s.priceWrapper}>
        <div className={s.saleInfoWrapper}>
          <span className={s.salePercent}>{price.discountRate}%</span>
          <span className={s.regularPrice}>
            {price.originalPriceDisplayText}원
          </span>
        </div>
        <div className={s.sellingInfoWrapper}>
          <span className={s.sellingPrice}>
            {price.sellingPriceDisplayText}
          </span>
          <span className={s.won}>원</span>
          {badgeProperties.isSpecialPrice && <SpecialPriceIcon />}
          {badgeProperties.departureToday && <DepartureTodayIcon />}
        </div>
      </div>

      {/* 배송비 정보 */}
      <div className={s.deliveryWrapper}>
        <div className={s.deliveryTitle}>
          <span>배송</span>
        </div>
        <div className={s.deliveryContent}>
          {delivery.fee > 0 ? (
            <span className={s.deliveryFee}>
              <b>{formatNumberWithCommas(delivery.fee)}원 </b>
              {delivery.freeThreshold > 0 && (
                <small>
                  ({formatNumberWithCommas(delivery.freeThreshold)}원 이상
                  구매시 무료배송)
                </small>
              )}
            </span>
          ) : (
            <span className={s.deliveryFee}>
              <b>무료배송</b>
            </span>
          )}
          {badgeProperties.departureToday && (
            <span className={s.deliveryTodayDeparture}>
              {badgeProperties.departureToday.description.replace(
                "%s",
                badgeProperties.departureToday.orderDeadline
              )}{" "}
              <b style={{ color: "#35c5f0" }}>오늘 출발</b>
            </span>
          )}
          <span className={s.deliveryType}>
            {delivery.type === 1 ? "일반택배" : "특수택배"}
          </span>
          <span className={s.deliveryClaimer}>
            {delivery.isRegionalDeliveryFee ? (
              <span className={s.deliveryClaimer}>
                <Check />
                <span>지역별 차등배송비</span>
              </span>
            ) : null}
            {delivery.backwoodsFee ? (
              <span className={s.deliveryClaimer}>
                <Check />
                <span>
                  제주도/도서산간 지역{" "}
                  {formatNumberWithCommas(delivery.backwoodsFee)}원
                </span>
              </span>
            ) : null}
          </span>
        </div>
      </div>

      {/* 브랜드 */}
      <div className={s.brandWrapper}>
        <span className={s.brand}>
          {brand.name} <ArrowRight />
        </span>
        <span className={s.brandDescription}>브랜드</span>
      </div>

      {/* 상품 옵션 */}
      <div className={s.optionsWrapper}>
        <GoodOptions
          firstDepthName={firstDepthName}
          options={options}
          extraOptions={extraOptions}
          selectedOptions={selectedOptions}
          totalPrice={totalPrice}
          onAddOptionFromSelect={onAddOptionFromSelect}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onRemoveOption={onRemoveOption}
          onCartClick={onCartClick}
          onBuyClick={onBuyClick}
        />
      </div>
    </div>
  );
};
