import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { CONTENT_WIDTH } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const ORDER_FILTER_HEIGHT = 70;

export const container = style([
  f.wFull,
  f.pFixed,
  {
    top: "81px",
    left: 0,
    backgroundColor: "#ffffff",
    zIndex: 8000,
  },
]);

export const wrapper = style([
  f.flex,
  f.alignCenter,
  {
    margin: "0 auto",
    paddingBlock: "16px",
    maxWidth: CONTENT_WIDTH,
    height: `${ORDER_FILTER_HEIGHT}px`,
    gap: "4px",
  },
  responsiveStyle({
    md: {
      paddingInline: "40px",
    },
    sm: {
      paddingInline: "15px",
    },
  }),
]);

export const chip = recipe({
  base: {
    paddingInline: "14px",
    height: "38px",
    borderRadius: "19px",
    fontSize: "14px",
    lineHeight: "38px",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "#2f3438",
        color: "#ffffff",
      },
      false: {
        backgroundColor: "#f7f9fa",
        color: "#2f3438",

        selectors: {
          "&:hover": {
            backgroundColor: "#eaedef",
          },
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
