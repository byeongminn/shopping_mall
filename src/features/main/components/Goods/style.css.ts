import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([{ margin: "0 auto", width: "1156px" }]);

export const wrapper = style([
  f.wFull,
  {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
]);
