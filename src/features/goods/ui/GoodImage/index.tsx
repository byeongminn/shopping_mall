import Image from "next/image";
import { RefObject } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IMAGE_URL } from "@/shared/constants";

import "swiper/css";
import "swiper/css/pagination";
import * as s from "./style.css";
import { GoodDetailImage } from "@/entities/goods/goods.types";

type Props = {
  images: GoodDetailImage[];
  activeIndex: number;
  goToSlide: (index: number) => void;
  onSlideChange: (index: number) => void;
  swiperRef: RefObject<SwiperType | null>;
};

export const GoodImage = ({
  images,
  activeIndex,
  goToSlide,
  onSlideChange,
  swiperRef,
}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.imagesWrapper}>
        {images.map((image, idx) => (
          <Image
            key={idx}
            className={s.image({ isActive: activeIndex === idx })}
            src={`${IMAGE_URL}/${image.imageUrl}`}
            alt={`썸네일 이미지 ${idx + 1}`}
            width={56}
            height={56}
            sizes="(max-width: 767px) 0px, 56px"
            priority
            onPointerEnter={() => goToSlide(idx)}
          />
        ))}
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={s.swiperWrapper}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        slidesPerView={1}
        initialSlide={0}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className={s.swiperSlide}>
            <Image
              className={s.swiperImage}
              src={`${IMAGE_URL}/${image.imageUrl}`}
              alt={`썸네일 이미지 ${idx + 1}`}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
