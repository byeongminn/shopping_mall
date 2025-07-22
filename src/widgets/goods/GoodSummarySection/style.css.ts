import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const brandName = style([
  {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "19px",
    color: "#757575",
  },
]);

export const goodName = style([
  {
    marginTop: "4px",
    fontSize: "22px",
    lineHeight: "33px",
  },
]);

export const reviewStatisticsWrapper = style([
  {
    marginTop: "12px",
  },
]);

export const priceWrapper = style([
  {
    marginTop: "8px",
  },
]);

export const saleInfoWrapper = style([
  f.flex,
  f.alignCenter,
  {
    gap: "6px",
    fontSize: "16px",
    lineHeight: "19px",
  },
]);

export const salePercent = style([
  {
    color: "#656e75",
  },
]);

export const regularPrice = style([
  {
    color: "#bdbdbd",
    textDecoration: "line-through",
  },
]);

export const sellingInfoWrapper = style([
  f.flex,
  f.alignCenter,
  {
    marginTop: "5px",
    gap: "6px",
  },
]);

export const sellingPrice = style([
  {
    marginTop: "4px",
    fontWeight: "700",
    fontSize: "32px",
  },
]);

export const won = style([
  {
    marginTop: "2px",
    fontSize: "24px",
  },
]);

export const deliveryWrapper = style([
  f.flex,
  {
    padding: "20px 0",
    borderBottom: "1px solid #ededed",
    fontSize: "14px",
    lineHeight: "21px",
  },
]);

export const deliveryTitle = style([
  {
    flex: "0 0 42px",
    color: "#828c94",
  },
]);

export const deliveryContent = style([
  f.flex,
  f.directionColumn,
  { gap: "4px" },
]);

export const deliveryFee = style([
  {
    color: "#292929",
  },
]);

export const deliveryTodayDeparture = style([
  {
    color: "#2f3438",
  },
]);

export const deliveryType = style([
  {
    color: "#292929",
  },
]);

export const deliveryClaimer = style([
  f.flex,
  f.alignCenter,
  {
    flexWrap: "wrap",
    gap: "5px",
    fontSize: "13px",
    lineHeight: "18px",
    color: "#757575",
  },
]);

export const brandWrapper = style([
  f.flex,
  f.directionColumn,
  {
    paddingBlock: "16px",
    gap: "2px",
  },
]);

export const brand = style([
  {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    color: "#2F3438",
  },
]);

export const brandDescription = style([
  {
    fontSize: "13px",
    lineHeight: "18px",
    color: "#828C94",
  },
]);
