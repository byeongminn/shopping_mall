import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const totalWrapper = style([f.wFull]);

export const total = style([
  {
    fontSize: "14px",
    color: "#424242",
  },
]);

export const dataWrapper = recipe({
  base: [
    f.wFull,
    {
      marginTop: "20px",
      display: "grid",
    },
  ],
  variants: {
    isEmpty: {
      true: [f.flex, f.justifyCenter, f.alignCenter],
      false: [
        responsiveStyle({
          lg: {
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          },
          md: {
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          },
          sm: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px 20px",
          },
        }),
      ],
    },
  },
  defaultVariants: {
    isEmpty: false,
  },
});

export const emptyWrapper = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  {
    paddingBlock: "130px",
    gap: "30px",
  },
]);
