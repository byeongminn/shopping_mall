import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import {
  CONTENT_WIDTH,
  ORDER_FILTER_HEIGHT,
} from "@/shared/styles/globals.css";

export const filterSection = style([
  {
    position: "fixed",
    top: 81,
    left: 0,
    zIndex: 8000,
    width: "100%",
    backgroundColor: "#ffffff",
  },
]);

export const searchGoodsSection = style([
  f.wFull,
  {
    margin: "0 auto",
    paddingTop: `${ORDER_FILTER_HEIGHT}px`,
    maxWidth: CONTENT_WIDTH,
  },
  responsiveStyle({
    lg: {
      padding: `${ORDER_FILTER_HEIGHT}px 60px 60px`,
    },
    md: {
      padding: `${ORDER_FILTER_HEIGHT}px 40px 40px`,
    },
    sm: {
      padding: `${ORDER_FILTER_HEIGHT}px 15px 15px`,
    },
  }),
]);
