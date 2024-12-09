import { StyleRule } from "@vanilla-extract/css";

type responsiveStyleParams = {
  lg?: StyleRule;
  md?: StyleRule;
  sm?: StyleRule;
};

export const responsiveStyle = ({
  lg = {},
  md = {},
  sm = {},
}: responsiveStyleParams) => ({
  "@media": {
    "screen and (min-width: 1px)": sm,
    "screen and (min-width: 768px)": md,
    "screen and (min-width: 1256px)": lg,
  },
});
