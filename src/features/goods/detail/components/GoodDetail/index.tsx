"use client";

import { GoodDetailPageParams } from "@/app/(house)/goods/[goodId]/page";
import { useGetGoodsDetail } from "../../hooks/useGetGoodsDetail";
import { ThumbnailSwiper } from "../ThumbnailSwiper";
import { GoodDescription } from "../Description";
import * as s from "./style.css";

type Props = GoodDetailPageParams["params"];

export const GoodDetail = ({ goodId }: Props) => {
  const { data } = useGetGoodsDetail({ goodId });

  const { sub_images } = data;

  return (
    <section className={s.container}>
      <div className={s.breadcrumbWrapper}>
        <p className={s.breadcrumb}>
          {"주방용품 > 수저·커트러리 > 수저·커트러리세트 > 한식수저세트"}
        </p>
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
