import Image from "next/image";
import Link from "next/link";
import { FormattedGood } from "@/entities/goods/goods.types";
import {
  CouponIcon,
  DepartureTodayIcon,
  FreeDeliveryIcon,
  SpecialPriceIcon,
} from "@/features/goods/ui/Icon";
import { IMAGE_URL } from "@/shared/constants/client";
import * as s from "./style.css";

type GoodItemProps = {
  good: FormattedGood;
};

export const GoodItem = ({ good }: GoodItemProps) => {
  const { id, imageUrl, name, brand, price, reviewStatistic, badgeProperties } =
    good;

  return (
    <Link href={`/goods/${id}`} className={s.link}>
      <div className={s.wrapper}>
        <div className={s.thumbnailWrapper}>
          <Image
            className={s.image}
            src={`${IMAGE_URL}/${imageUrl}`}
            alt={name}
            fill
            sizes="(max-width: 767px) 50vw, 25vw"
            priority
          />
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
              <DepartureTodayIcon />
              <p className={s.departureTodayDescription}>
                {badgeProperties.departureToday.description.replace(
                  "%s",
                  badgeProperties.departureToday.orderDeadline
                )}
              </p>
            </div>
          )}
          <div className={s.badgePropertiesWrapper}>
            {badgeProperties.isFreeDelivery && <FreeDeliveryIcon />}
            {badgeProperties.isSpecialPrice && <SpecialPriceIcon />}
          </div>
          {badgeProperties.couponBadge && (
            <div className={s.couponBadgeWrapper}>
              <CouponIcon />
              <p>{badgeProperties.couponBadge.displayText}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
