import { globalStyle } from "@vanilla-extract/css";

export const CONTENT_WIDTH = "1256px";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  minHeight: "100vh",
});
