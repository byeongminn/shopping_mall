import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { GOOD_DETAIL_WIDTH } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  {
    margin: "0 auto",
  },
  responsiveStyle({
    xl: {
      width: "100%",
      maxWidth: GOOD_DETAIL_WIDTH,
    },
    lg: {
      width: "calc(100% - 120px)",
      maxWidth: "100%",
    },
    md: {
      width: "calc(100% - 80px)",
    },
    sm: {
      width: "calc(100% - 30px)",
    },
  }),
]);

export const breadcrumbWrapper = style([
  responsiveStyle({
    md: {
      marginTop: "20px",
      padding: 0,
    },
    sm: {
      marginTop: 0,
      padding: "12px 15px",
    },
  }),
]);

export const breadcrumb = style([
  {
    fontSize: "15px",
    color: "#757575",
    lineHeight: 1.2,
  },
]);

export const overviewWrapper = style([
  f.flex,
  responsiveStyle({
    lg: {
      marginTop: "40px",
      gap: "50px",
      flexDirection: "row",
    },
    md: {
      marginTop: "20px",
      gap: "30px",
      flexDirection: "row",
    },
    sm: {
      gap: "20px",
      flexDirection: "column",
    },
  }),
]);

export const thumbnailWrapper = style([
  responsiveStyle({
    md: {
      width: "50%",
    },
    sm: {
      width: "100%",
    },
  }),
]);

export const contentWrapper = style([
  responsiveStyle({
    md: {
      width: "50%",
    },
    sm: {
      width: "100%",
    },
  }),
]);

export const descriptionWrapper = style([
  {
    marginTop: "50px",
    paddingBlock: "50px",
    borderTop: "10px solid #ededed;",
  },
]);
