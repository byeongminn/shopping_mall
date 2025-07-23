import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

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
