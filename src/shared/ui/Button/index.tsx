import clsx from "clsx";
import * as s from "./style.css";

type Props = {
  type?: "default" | "outlined" | "filled";
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ type = "default", ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx([props.className, s.wrapper({ type })])}
    />
  );
};
