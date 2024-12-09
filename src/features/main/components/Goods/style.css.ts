import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  {
    margin: "0 auto",
    paddingBlock: "60px",
    width: "100%",
    maxWidth: "1256px",
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
