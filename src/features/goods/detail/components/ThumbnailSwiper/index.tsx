import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GoodsDetailImage } from "@/shared/api/house/types/item";
import { IMAGE_URL } from "@/shared/constants";
import "swiper/css";
import "swiper/css/pagination";
import * as s from "./style.css";

type Props = {
  images: GoodsDetailImage[];
};

export const ThumbnailSwiper = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.imagesWrapper}>
        {images?.map((image, idx) => (
          <Image
            key={idx}
            className={s.image({ isActive: activeIndex === idx })}
            src={`${IMAGE_URL}/${image?.imageUrl}`}
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
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        initialSlide={0}
        onSlideChange={(image) => setActiveIndex(image.activeIndex)}
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx} className={s.swiperSlide}>
            <Image
              className={s.swiperImage}
              src={`${IMAGE_URL}/${image?.imageUrl}`}
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
