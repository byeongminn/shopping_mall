"use client";

import { GetGoodsDetailRequestParams } from "../../api/getGoodsDetail";
import { useGetGoodsDetail } from "../../hooks/useGetGoodsDetail";
import { ThumbnailSwiper } from "../ThumbnailSwiper";
import { GoodDescription } from "../Description";
import * as s from "./style.css";

type Props = GetGoodsDetailRequestParams;

export const GoodDetail = ({ goodId }: Props) => {
  const { data } = useGetGoodsDetail({ goodId });

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
