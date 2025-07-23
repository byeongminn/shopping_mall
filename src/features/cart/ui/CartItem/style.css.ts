import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const wrapper = style([
  f.flex,
  f.directionColumn,
  f.pRelative,
  {
    gap: "0.75rem",
    padding: "1.25rem 1rem",
    border: "1px solid #EAEDEF",
  },
]);

export const name = style([
  {
    alignSelf: "flex-start",
    width: "auto",
    color: "#000",
    textDecoration: "none",
  },
]);

export const removeItemButton = style([
  f.pAbsolute,
  {
    top: "1.25rem",
    right: "1rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
]);

export const itemTotalPrice = style([
  {
    alignSelf: "flex-end",
    width: "auto",
    fontWeight: 700,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    color: "#2F3438",
  },
]);

export const selectedOptionList = style([
  f.flex,
  f.directionColumn,
  {
    gap: "10px",
  },
]);
