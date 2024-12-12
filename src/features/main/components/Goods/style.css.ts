import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { CONTENT_WIDTH } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";
import { ORDER_FILTER_HEIGHT } from "../Filter/style.css";

export const container = style([
  {
    margin: "0 auto",
    paddingTop: `${ORDER_FILTER_HEIGHT}px`,
    width: "100%",
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

export const wrapper = style([
  f.wFull,
  {
    display: "grid",
  },
  responsiveStyle({
    md: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    sm: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px 20px",
    },
  }),
]);
