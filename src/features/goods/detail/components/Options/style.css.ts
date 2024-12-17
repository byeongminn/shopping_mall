import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([f.wFull]);

export const optionsWrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "10px",
  },
]);

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

export const buttonWrapper = style([
  f.flex,
  {
    marginTop: "12px",
    gap: "6px",
  },
]);
