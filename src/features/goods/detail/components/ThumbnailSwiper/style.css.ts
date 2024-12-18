import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style([
  f.flex,
  {
    gap: "10px",
  },
  responsiveStyle({
    lg: {
      flexDirection: "row",
    },
    md: {
      flexDirection: "column",
    },
  }),
]);

export const imagesWrapper = style([
  f.flex,
  {
    gap: "8px",
  },
  responsiveStyle({
    lg: {
      flexDirection: "column",
      order: 1,
      display: "flex",
    },
    md: {
      flexDirection: "row",
      order: 2,
      display: "flex",
    },
    sm: {
      display: "none",
    },
  }),
]);

export const image = recipe({
  base: {
    borderRadius: "4px",
    objectFit: "contain",
    cursor: "pointer",
  },
  variants: {
    isActive: {
      true: {
        border: "2px solid #35c5f0",
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const swiperWrapper = style([
  f.wFull,
  {
    borderRadius: "10px",
  },
  responsiveStyle({
    lg: {
      order: 2,
    },
    md: {
      order: 1,
    },
  }),
]);

export const swiperSlide = style([
  f.pRelative,
  {
    aspectRatio: "1 / 1",
  },
]);

export const swiperImage = style([
  f.wFull,
  {
    height: "auto",
    objectFit: "contain",
  },
]);
