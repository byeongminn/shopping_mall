import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const wrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "10px",
  },
]);
