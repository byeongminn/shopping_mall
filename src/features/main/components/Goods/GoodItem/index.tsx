import { Good } from "@/shared/api/house/types/item";
import Link from "next/link";
import FreeDelivery from "@/shared/components/base/Icons/freeDelivery.svg";
import SpecialPrice from "@/shared/components/base/Icons/specialPrice.svg";
import * as s from "./style.css";
import { DepartureToday } from "@/shared/components/base/Icons/DepartureToday";

type Props = {
  good: Good;
};

export const GoodItem = ({ good }: Props) => {
  const { id, imageUrl, name, brand, price, reviewStatistic, badgeProperties } =
    good;

  return (
    <Link href={`/goods/${id}`} className={s.link}>
      <div className={s.wrapper}>
        <div className={s.thumbnailWrapper}>
          <img className={s.image} src={imageUrl} alt={name} />
        </div>
        <div className={s.contentsWrapper}>
          <h6 className={s.brandName}>{brand.name}</h6>
          <p className={s.productName}>{name}</p>
          <div className={s.priceWrapper}>
            {price.discountRate !== "0" && (
              <span className={s.discountRate}>{price.discountRate}%</span>
            )}
            <span className={s.price}>{price.sellingPriceDisplayText}</span>
          </div>
          <div className={s.reviewWrapper}>
            <span className={s.reviewAverage}>
              평점 {reviewStatistic.reviewAverageDisplayText}
            </span>
            <span className={s.reviewCount}>
              리뷰 {reviewStatistic.reviewCountDisplayText}
            </span>
          </div>
          {badgeProperties.departureToday && (
            <div className={s.departureTodayWrapper}>
              <DepartureToday />
              <p className={s.departureTodayDescription}>
                {badgeProperties.departureToday.description.replace(
                  "%s",
                  badgeProperties.departureToday.orderDeadline
                )}
              </p>
            </div>
          )}
          <div className={s.badgePropertiesWrapper}>
            {badgeProperties.isFreeDelivery && <FreeDelivery />}
            {badgeProperties.isSpecialPrice && <SpecialPrice />}
          </div>
          {badgeProperties.couponBadge && (
            <div className={s.couponBadgeWrapper}>
              <img
                className={s.couponBadgeImage}
                src={badgeProperties.couponBadge.imageUrl}
                alt="coupon"
              />
              <p>{badgeProperties.couponBadge.displayText}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
