import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const emptyWrapper = style([f.flexCenterBox]);

export const empty = style([
  {
    margin: "10rem auto",
    fontWeight: 700,
    fontSize: "1.25rem",
  },
]);

export const cartWrapper = style([
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

export const cartListWrapper = style([
  f.flex,
  f.directionColumn,
  {
    flex: 1,
    gap: "0.75rem",
  },
]);

export const cartItemWrapper = style([
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

export const buttonWrapper = style([
  f.flex,
  f.directionColumn,
  f.pSticky,
  {
    gap: "0.625rem",
    minWidth: "15rem",
    height: "fit-content",
    backgroundColor: "#fff",
  },
  responsiveStyle({
    sm: {
      paddingBlock: "0.5rem",
      bottom: 0,
    },
    md: {
      top: "7.5625rem",
    },
  }),
]);

export const cartTotalPriceWrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    gap: "0.625rem",
  },
]);

export const cartTotalPriceLabel = style([
  {
    fontWeight: 700,
  },
]);

export const cartTotalPrice = style([
  {
    fontWeight: 700,
    fontSize: "1.25rem",
  },
]);

export const purchaseButton = style([
  {
    padding: "0.75rem 1rem",
    backgroundColor: "#35c5f0",
    border: "1px solid #35c5f0",
    borderRadius: "0.25rem",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#ffffff",
    cursor: "pointer",
  },
]);
