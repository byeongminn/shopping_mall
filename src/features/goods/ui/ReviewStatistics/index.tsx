import { Star } from "@/features/goods/ui/Star";
import * as s from "./style.css";

type Props = {
  reviewAverageDisplayText: number;
  reviewCountDisplayText: string;
  isVisibleReviewCount?: boolean;
};

export const ReviewStatistics = ({
  reviewAverageDisplayText,
  reviewCountDisplayText,
  isVisibleReviewCount = false,
}: Props) => {
  const full = Math.floor(reviewAverageDisplayText);
  const responsive = full === 5 ? 0 : 1;
  const empty = 5 - full - responsive;

  return (
    <section className={s.container}>
      <div className={s.starWrapper}>
        {Array.from({ length: full }, (_, index) => (
          <Star key={index} isFull />
        ))}
        {Array.from({ length: responsive }, (_, index) => (
          <Star key={index} roundedReviewAvg={reviewAverageDisplayText} />
        ))}
        {Array.from({ length: empty }, (_, index) => (
          <Star key={index} isEmpty />
        ))}
      </div>
      {isVisibleReviewCount && (
        <div className={s.reviewCountWrpper}>
          <p className={s.reviewCount}>{reviewCountDisplayText}개 리뷰</p>
        </div>
      )}
    </section>
  );
};
