import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

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
