import { style } from "@vanilla-extract/css";
import { ORDER_FILTER_HEIGHT } from "@/features/main/components/Filters/style.css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { CONTENT_WIDTH } from "@/shared/styles/globals.css";

export const searchGoodsSection = style([
  f.wFull,
  {
    margin: "0 auto",
    paddingTop: `${ORDER_FILTER_HEIGHT}px`,
    maxWidth: CONTENT_WIDTH,
  },
  responsiveStyle({
    lg: {
      padding: `${ORDER_FILTER_HEIGHT}px 60px 60px`,
    },
    md: {
      padding: `${ORDER_FILTER_HEIGHT}px 40px 40px`,
    },
    sm: {
      padding: `${ORDER_FILTER_HEIGHT}px 15px 15px`,
    },
  }),
]);
