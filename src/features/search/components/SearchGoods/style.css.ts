import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const totalWrapper = style([
  f.wFull,
  {
    marginBottom: "20px",
  },
]);

export const total = style([
  {
    fontSize: "14px",
    color: "#424242",
  },
]);

export const emptyWrapper = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  {
    paddingBlock: "130px",
    gap: "30px",
  },
]);
