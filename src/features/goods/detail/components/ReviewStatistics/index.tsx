import { numberRounded } from "@/shared/utils/data";
import { Star } from "./Star";
import { formatNumberWithCommas } from "@/shared/utils/format/number";
import * as s from "./style.css";

type Props = {
  reviewAvg: number;
  reviewCount: number;
  isVisibleReviewCount?: boolean;
};

export const ReviewStatistics = ({
  reviewAvg,
  reviewCount,
  isVisibleReviewCount = false,
}: Props) => {
  const roundedReviewAvg = numberRounded(reviewAvg);

  const full = Math.floor(roundedReviewAvg);
  const responsive = full === 5 ? 0 : 1;
  const empty = 5 - full - responsive;

  return (
    <section className={s.container}>
      <div className={s.starWrapper}>
        {Array.from({ length: full }, (_, index) => (
          <Star key={index} isFull />
        ))}
        {Array.from({ length: responsive }, (_, index) => (
          <Star key={index} roundedReviewAvg={roundedReviewAvg} />
        ))}
        {Array.from({ length: empty }, (_, index) => (
          <Star key={index} isEmpty />
        ))}
      </div>
      {isVisibleReviewCount && (
        <div className={s.reviewCountWrpper}>
          <p className={s.reviewCount}>
            {formatNumberWithCommas(reviewCount)}개 리뷰
          </p>
        </div>
      )}
    </section>
  );
};
