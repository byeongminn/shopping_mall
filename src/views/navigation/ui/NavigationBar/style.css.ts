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

export const link = style([
  {
    display: "inline-block",
    paddingRight: "10px",
  },
]);

export const logo = style([
  {
    width: "75px",
    height: "29px",
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
  f.flex,
  {
    flex: 1,
    justifyContent: "right",
  },
]);

export const pageLink = style([
  {
    padding: "0 10px",
    display: "inline-block",
    fontSize: "14px",
    color: "#2F3438",
    textDecoration: "none",
    wordBreak: "keep-all",
  },
  {
    selectors: {
      "&:not(:first-child)": {
        borderLeft: "1px solid #EAEDEF",
      },
    },
  },
]);
