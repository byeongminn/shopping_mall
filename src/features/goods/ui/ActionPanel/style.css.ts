import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const buttonWrapper = style([
  f.flex,
  {
    marginTop: "12px",
    gap: "6px",
  },
]);
