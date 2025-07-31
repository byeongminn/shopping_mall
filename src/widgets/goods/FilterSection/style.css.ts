import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import {
  CONTENT_WIDTH,
  ORDER_FILTER_HEIGHT,
} from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.flex,
  f.alignCenter,
  {
    margin: "0 auto",
    paddingBlock: "16px",
    maxWidth: CONTENT_WIDTH,
    height: `${ORDER_FILTER_HEIGHT}px`,
    gap: "4px",
    overflowX: "auto",
    scrollbarWidth: "none",
  },
  responsiveStyle({
    lg: {
      paddingInline: "60px",
    },
    md: {
      paddingInline: "40px",
    },
    sm: {
      paddingInline: "15px",
    },
  }),
]);
