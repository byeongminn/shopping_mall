import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    padding: "13px 10px 14px",
    width: "100%",
    display: "inline-block",
    background: "none",
    border: "1px solid transparent",
    borderRadius: "4px",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: "17px",
    lineHeight: "26px",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  },
  variants: {
    type: {
      default: {
        backgroundColor: "#fffff",
        borderColor: "#dbdbdb",
        color: "#dbdbdb",
      },
      outlined: {
        backgroundColor: "#fffff",
        borderColor: "#35c5f0",
        color: "#35c5f0",
      },
      filled: {
        backgroundColor: "#35c5f0",
        borderColor: "#35c5f0",
        color: "#ffffff",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
