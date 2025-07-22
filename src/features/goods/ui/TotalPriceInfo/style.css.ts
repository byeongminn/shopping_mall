import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const priceWrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    marginTop: "40px",
    fontWeight: "700",
    color: "#2F3438",
  },
]);

export const text = style([
  {
    fontSize: "14px",
    lineHeight: "20px",
  },
]);

export const price = style([
  {
    fontSize: "20px",
    lineHeight: "28px",
  },
]);
