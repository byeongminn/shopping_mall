import { StyleRule } from "@vanilla-extract/css";

type responsiveStyleParams = {
  xl?: StyleRule;
  lg?: StyleRule;
  md?: StyleRule;
  sm?: StyleRule;
};

export const responsiveStyle = ({
  xl = {},
  lg = {},
  md = {},
  sm = {},
}: responsiveStyleParams) => ({
  "@media": {
    "screen and (min-width: 1px)": sm,
    "screen and (min-width: 768px)": md,
    "screen and (min-width: 1024px)": lg,
    "screen and (min-width: 1256px)": xl,
  },
});
