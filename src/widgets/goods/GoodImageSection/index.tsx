import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { GoodDetailImage } from "@/entities/goods/goods.types";
import { GoodImage } from "@/features/goods/ui/GoodImage";

type Props = {
  images: GoodDetailImage[];
};

export const GoodImageSection = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <GoodImage
      images={images}
      activeIndex={activeIndex}
      goToSlide={goToSlide}
      onSlideChange={(index) => setActiveIndex(index)}
      swiperRef={swiperRef}
    />
  );
};
