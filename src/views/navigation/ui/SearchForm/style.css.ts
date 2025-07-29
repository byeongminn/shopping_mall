import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.alignCenter,
  {
    padding: "0px 14px",
    height: "40px",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
  },
  {
    selectors: {
      "&:focus-within": {
        borderColor: "#35C5F0",
      },
    },
  },
]);

export const search = style([
  {
    paddingRight: "6px",
    width: "30px",
    height: "24px",
  },
]);

export const input = style([
  f.wFull,
  f.hFull,
  {
    border: "none",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#2f3438",
    outline: "none",
  },
  {
    selectors: {
      "&::placeholder": {
        color: "lightgray",
      },
    },
  },
]);
