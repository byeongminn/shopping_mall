import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style([f.pRelative]);

export const selectWrapper = recipe({
  base: [
    f.wFull,
    {
      padding: "0 15px",
      paddingRight: "30px",
      height: "40px",
      backgroundColor: "#ffffff",
      border: "1px solid #dbdbdb",
      borderRadius: "4px",
      fontSize: "15px",
      color: "#424242",
      lineHeight: "40px",
      outline: "none",
      WebkitAppearance: "none",
    },
  ],
  variants: {
    isFirst: {
      true: {
        borderColor: "#35c5f0",
      },
    },
  },
  defaultVariants: {
    isFirst: false,
  },
});

export const arrowWrapper = recipe({
  base: [
    f.pAbsolute,
    {
      top: "10px",
      right: "10px",
      padding: "5px",
      fontSize: 0,
      opacity: 0.3,
      pointerEvents: "none",
    },
  ],
  variants: {
    isFirst: {
      true: {
        color: "#35c5f0",
        opacity: 1,
      },
    },
  },
  defaultVariants: {
    isFirst: false,
  },
});
