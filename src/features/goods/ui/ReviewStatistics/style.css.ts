import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.flex,
  f.alignCenter,
  {
    gap: "8px",
  },
]);

export const starWrapper = style([
  f.flex,
  f.alignCenter,
  {
    gap: "2px",
  },
]);

export const reviewCountWrpper = style([
  {
    marginTop: "4px",
  },
]);

export const reviewCount = style([
  {
    fontWeight: 700,
    fontSize: "13px",
    color: "#35c5f0",
  },
]);
