import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { CONTENT_WIDTH } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const NAVIGATION_BAR_HEIGHT = 80;

export const container = style([
  f.wFull,
  f.pFixed,
  {
    top: 0,
    left: 0,
    zIndex: 9000,
    background: "rgb(255, 255, 255)",
    borderBottom: "1px solid rgb(234, 237, 239)",
  },
]);

export const wrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    margin: "0 auto",
    paddingBlock: "10px",
    maxWidth: CONTENT_WIDTH,
    height: `${NAVIGATION_BAR_HEIGHT}px`,
  },
  responsiveStyle({
    md: {
      paddingInline: "40px",
    },
    sm: {
      paddingInline: "15px",
    },
  }),
]);

export const link = style([
  {
    display: "inline-block",
  },
]);

export const logo = style([
  {
    width: "71px",
    height: "28px",
  },
]);

export const startWrapper = style([
  {
    flex: 1,
  },
]);

export const centerWrapper = style([
  {
    flex: 3,
  },
]);

export const endWrapper = style([
  responsiveStyle({
    md: {
      flex: 1,
    },
    sm: {
      flex: 0,
    },
  }),
]);
