import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    marginTop: "10px",
    padding: "12px",
    gap: "20px",
    backgroundColor: "#f7f9fa",
    borderRadius: "4px",
    color: "#2f3438",
  },
]);

export const wrapper = style([f.flex, f.justifyBetween, f.alignCenter]);

export const explain = style([
  {
    fontSize: "14px",
    lineHeight: "18px",
  },
]);

export const icon = style([
  {
    color: "#828c94",
    cursor: "pointer",
  },
]);

export const amountWrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    padding: "7px 6px",
    width: "70px",
    background: "#ffffff",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    color: "#2f3438",
  },
]);

export const price = style([
  {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
  },
]);
