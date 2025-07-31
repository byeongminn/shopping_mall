import { globalStyle } from "@vanilla-extract/css";

export const CONTENT_WIDTH = "1256px";

export const GOOD_DETAIL_WIDTH = "1136px";

export const ORDER_FILTER_HEIGHT = 70;

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  minHeight: "100vh",
});

globalStyle("b", {
  fontWeight: "bold",
});

globalStyle("small", {
  fontSize: "smaller",
});

globalStyle(".swiper-pagination-bullet", {
  width: "6px !important",
  height: "6px !important",
  backgroundColor: "hsla(0, 0%, 100%, .7) !important",
  boxShadow: "0 0 6px rgba(0, 0, 0, .3) !important",
  opacity: "1 !important",
  transform: "translateY(-1px) !important",
});

globalStyle(".swiper-pagination-bullet-active", {
  width: "8px !important",
  height: "8px !important",
  transform: "none !important",
});
