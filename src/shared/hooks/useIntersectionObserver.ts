import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export type UseIntersectionObserverProps = {
  callback: () => void;
  intersercionOptions?: IntersectionOptions;
};

export const useIntersectionObserver = ({
  callback,
  intersercionOptions = { threshold: 0.3 },
}: UseIntersectionObserverProps) => {
  const { ref, inView } = useInView(intersercionOptions);

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [callback, inView]);

  return { ref, inView };
};
