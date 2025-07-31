import {
  UseIntersectionObserverProps,
  useIntersectionObserver,
} from "@/shared/lib/intersection-observer/useIntersectionObserver";
import { Spinner } from "@/shared/ui/Spinner";
import * as s from "./style.css";

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({
  children = <Spinner />,
  ...observerProps
}: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <div ref={ref} className={s.wrapper}>
      <div>{children}</div>
    </div>
  );
};
