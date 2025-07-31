import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as s from "./style.css";

type Props = {
  size?: number;
  color?: string;
};

export const Spinner = ({ size = 24, color = "gray" }: Props) => {
  return (
    <div
      className={s.wrapper}
      style={{
        ...assignInlineVars({
          [s.sizeVar]: `${size}px`,
        }),
      }}
    >
      <div
        className={s.inner}
        style={{
          ...assignInlineVars({
            [s.innerBorderColorVar]: color,
          }),
        }}
      />
    </div>
  );
};
