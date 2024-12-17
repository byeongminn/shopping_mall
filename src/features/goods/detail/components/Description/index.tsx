import { getSalePercent } from "@/shared/utils/data";
import { GetGoodsDetailResponse } from "../../api/getGoodsDetail";
import { ReviewStatistics } from "../ReviewStatistics";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import SpecialPrice from "@/shared/components/base/icons/specialPrice.svg";
import { DepartureToday } from "@/shared/components/base/Icons/DepartureToday";
import Check from "./check.svg";
import ArrowRight from "./arrowRight.svg";
import * as s from "./style.css";
import { GoodOptions } from "../Options";

type Props = {
  good: GetGoodsDetailResponse;
};

export const GoodDescription = ({ good }: Props) => {
  const {
    brand,
    delivery,
    extra_options,
    first_depth_name,
    is_departure_today,
    is_special_price,
    name,
    options,
    price,
    review_avg,
    review_count,
  } = good;

  console.log(good);

  return (
    <div>
      {/* 브랜드명 & 상품명 */}
      <p className={s.brandName}>{brand.name}</p>
      <p className={s.goodName}>{name}</p>

      {/* 평점 및 리뷰 수 */}
      <div className={s.reviewStatisticsWrapper}>
        <ReviewStatistics
          reviewAvg={review_avg}
          reviewCount={review_count}
          isVisibleReviewCount
        />
      </div>

      {/* 상품 가격 정보 */}
      <div className={s.priceWrapper}>
        <div className={s.saleInfoWrapper}>
          <span className={s.salePercent}>
            {getSalePercent(price.regular_price, price.selling_price)}%
          </span>
          <span className={s.regularPrice}>
            {formatNumberWithCommas(price.regular_price)}원
          </span>
        </div>
        <div className={s.sellingInfoWrapper}>
          <span className={s.sellingPrice}>
            {formatNumberWithCommas(price.selling_price)}
          </span>
          <span className={s.won}>원</span>
          {is_special_price && <SpecialPrice />}
          {is_departure_today && <DepartureToday />}
        </div>
      </div>

      {/* 배송비 정보 */}
      <div className={s.deliveryWrapper}>
        <div className={s.deliveryTitle}>
          <span>배송</span>
        </div>
        <div className={s.deliveryContent}>
          {delivery.fee.fee > 0 ? (
            <span className={s.deliveryFee}>
              <b>{formatNumberWithCommas(delivery.fee.fee)}원 </b>
              {delivery.fee.free_threshold > 0 && (
                <small>
                  ({formatNumberWithCommas(delivery.fee.free_threshold)}원 이상
                  구매시 무료배송)
                </small>
              )}
            </span>
          ) : (
            <span className={s.deliveryFee}>
              <b>무료배송</b>
            </span>
          )}
          {delivery.delivery_start_at && (
            <span className={s.deliveryTodayDeparture}>
              {delivery.delivery_start_at.template.text.replace("%s", "")}
              <b style={{ color: "#35c5f0" }}>
                {delivery.delivery_start_at.template.values}
              </b>
            </span>
          )}
          <span className={s.deliveryType}>
            {delivery.fee.type === 1 ? "일반택배" : "특수택배"}
          </span>
          <span className={s.deliveryClaimer}>
            {delivery.fee.is_regional_delivery_fee && (
              <span className={s.deliveryClaimer}>
                <Check />
                <span>지역별 차등배송비</span>
              </span>
            )}
            {delivery.fee.backwoods_fee && (
              <span className={s.deliveryClaimer}>
                <Check />
                <span>
                  제주도/도서산간 지역{" "}
                  {formatNumberWithCommas(delivery.fee.backwoods_fee)}원
                </span>
              </span>
            )}
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
          firstDepthName={first_depth_name}
          options={options}
          extraOptions={extra_options}
        />
      </div>
    </div>
  );
};
