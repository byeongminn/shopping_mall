import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { CONTENT_WIDTH } from "@/shared/styles/globals.css";

export const cartSection = style([
  f.wFull,
  {
    margin: "0 auto",
    maxWidth: CONTENT_WIDTH,
  },
  responsiveStyle({
    lg: {
      padding: `40px 60px 60px`,
    },
    md: {
      padding: `40px 40px 40px`,
    },
    sm: {
      padding: `40px 15px 15px`,
    },
  }),
]);

export const emptyWrapper = style([f.flexCenterBox]);

export const empty = style([
  {
    margin: "10rem auto",
    fontWeight: 700,
    fontSize: "1.25rem",
  },
]);

export const wrapper = style([
  f.flex,
  {
    gap: "2.5rem",
  },
  responsiveStyle({
    sm: {
      flexDirection: "column",
    },
    md: {
      flexDirection: "row",
    },
  }),
]);
