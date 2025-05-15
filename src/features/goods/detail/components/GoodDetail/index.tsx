"use client";

import { GetGoodsDetailRequestParams } from "@/features/goods/detail/api/getGoodsDetail";
import { useGetGoodsDetail } from "@/features/goods/detail/hooks/useGetGoodsDetail";
import { ThumbnailSwiper } from "@/features/goods/detail/components/ThumbnailSwiper";
import { GoodDescription } from "@/features/goods/detail/components/Description";
import * as s from "./style.css";

type Props = GetGoodsDetailRequestParams;

export const GoodDetail = ({ goodId }: Props) => {
  const { data } = useGetGoodsDetail(goodId);

  if (!data) {
    return;
  }

  const { sub_images } = data;

  return (
    <section className={s.container}>
      <div className={s.breadcrumbWrapper}>
        <p className={s.breadcrumb}>{"패브릭 > 베개·베개커버 > 베개솜"}</p>
      </div>
      <div className={s.overviewWrapper}>
        <div className={s.thumbnailWrapper}>
          <ThumbnailSwiper images={sub_images} />
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
