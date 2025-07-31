import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const wrapper = style([
  f.flex,
  f.directionColumn,
  f.pSticky,
  {
    gap: "0.625rem",
    minWidth: "15rem",
    height: "fit-content",
    backgroundColor: "#fff",
  },
  responsiveStyle({
    sm: {
      paddingBlock: "0.5rem",
      bottom: 0,
    },
    md: {
      top: "7.5625rem",
    },
  }),
]);

export const cartTotalPriceWrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    gap: "0.625rem",
  },
]);

export const cartTotalPriceLabel = style([
  {
    fontWeight: 700,
  },
]);

export const cartTotalPrice = style([
  {
    fontWeight: 700,
    fontSize: "1.25rem",
  },
]);

export const buyButton = style([
  {
    padding: "0.75rem 1rem",
    backgroundColor: "#35c5f0",
    border: "1px solid #35c5f0",
    borderRadius: "0.25rem",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#ffffff",
    cursor: "pointer",
  },
]);
