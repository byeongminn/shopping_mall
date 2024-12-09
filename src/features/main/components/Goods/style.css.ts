import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  {
    margin: "0 auto",
    width: "100%",
    maxWidth: "1256px",
  },
  responsiveStyle({
    md: {
      padding: "0px 40px",
    },
    sm: {
      padding: "0px 15px",
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
