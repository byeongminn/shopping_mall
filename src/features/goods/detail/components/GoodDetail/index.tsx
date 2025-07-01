"use client";

import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { useGetGoodsDetail } from "@/features/goods/detail/hooks/useGetGoodsDetail";
import { ThumbnailSwiper } from "@/features/goods/detail/components/ThumbnailSwiper";
import { GoodDescription } from "@/features/goods/detail/components/Description";
import * as s from "./style.css";

type Props = Pick<GetGoodsDetailRequestParams, "goodId">;

export const GoodDetail = ({ goodId }: Props) => {
  const { data } = useGetGoodsDetail({ goodId });

  if (!data) {
    return (
      <section className={s.container}>
        <div className={s.overviewWrapper}>
          <p>상품을 찾을 수 없습니다.</p>
        </div>
      </section>
    );
  }

  const { subImages } = data;

  return (
    <section className={s.container}>
      <div className={s.overviewWrapper}>
        <div className={s.thumbnailWrapper}>
          <ThumbnailSwiper images={subImages} />
        </div>
        <div className={s.contentWrapper}>
          <GoodDescription good={data} />
        </div>
      </div>
      <div className={s.descriptionWrapper}>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </section>
  );
};
