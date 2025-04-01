import { recipe } from "@vanilla-extract/recipes";

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
