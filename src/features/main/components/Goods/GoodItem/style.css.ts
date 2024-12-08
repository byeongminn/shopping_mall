import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const link = style([
  f.wFull,
  {
    textDecoration: "inherit",
    color: "inherit",
    display: "block",
  },
]);

export const wrapper = style([f.wFull]);

export const thumbnailWrapper = style([f.wFull, { overflow: "hidden" }]);

export const image = style([
  f.wFull,
  f.hFull,
  {
    borderRadius: "4px",
    transition: "scale 0.1s ease 0s",
  },
  {
    selectors: {
      [`${wrapper}:hover &`]: {
        scale: 1.1,
      },
    },
  },
]);

export const contentsWrapper = style([f.wFull, { marginTop: "10px" }]);

export const brandName = style([
  f.truncate1,
  {
    fontSize: "12px",
    lineHeight: "16px",
    display: "block",
    color: "rgb(130, 140, 148)",
  },
]);

export const productName = style([
  f.truncate2,
  {
    fontSize: "14px",
    lineHeight: "18px",
    maxHeight: "36px",
    marginTop: "4px",
    transition: "opacity 0.1s ease 0s",
    color: "rgb(47, 52, 56)",
  },
  {
    selectors: {
      [`${wrapper}:hover &`]: {
        opacity: 0.6,
      },
    },
  },
]);

export const priceWrapper = style([{ marginTop: "4px" }]);

export const discountRate = style([
  {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "bold",
    marginRight: "2px",
    color: "rgb(53, 197, 240)",
  },
]);

export const price = style([
  {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 700,
    color: "rgb(47, 52, 56)",
  },
]);

export const reviewWrapper = style([
  {
    marginTop: "4px",
  },
]);

export const reviewAverage = style([
  {
    fontSize: "12px",
    lineHeight: "16px",
    marginRight: "4px",
    color: "rgb(47, 52, 56)",
  },
]);

export const reviewCount = style([
  {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "normal",
    color: "rgb(130, 140, 148)",
  },
]);

export const badgePropertiesWrapper = style([
  f.flex,
  {
    flexWrap: "wrap",
    gap: "4px",
    marginTop: "8px",
  },
]);
