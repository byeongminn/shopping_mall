import { recipe } from "@vanilla-extract/recipes";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const wrapper = recipe({
  base: [
    f.wFull,
    {
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
