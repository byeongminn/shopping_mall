import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoodsDetailImage } from "../../api/getGoodsDetail";
import "swiper/css";
import "swiper/css/pagination";
import * as s from "./style.css";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";

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
          <img
            key={idx}
            className={s.image({ isActive: activeIndex === idx })}
            src={image?.resized_thumbnail_image_url}
            alt={`썸네일 이미지 ${idx + 1}`}
            width={56}
            height={56}
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
        onSlideChange={(image) => setActiveIndex(image.activeIndex)}
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              className={s.swiperImage}
              src={image?.resized_image_url}
              alt={`썸네일 이미지 ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};