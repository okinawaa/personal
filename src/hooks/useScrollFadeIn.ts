import React, { useRef, useEffect, useCallback, useMemo } from "react";
import useScroll from "./useScroll";

const useScrollFadeIn = (
  hide?: {
    finish: number; // when trigger nomarlized scrollY attach this point
    transform?: string;
    opacity?: number;
  },
  direction: AnimationDirectionType = "up",
  duration = 1,
  delay = 0
) => {
  const dom: React.RefObject<HTMLDivElement> = useRef(null);

  const handleDirection = useMemo(
    () => ({
      up: "translate3d(0, 50%, 0)",
      down: "translate3d(0, -50%, 0)",
      left: "translate3d(50%, 0, 0)",
      right: "translate3d(-50%, 0, 0)",
      stop: "translate3d(0, 0, 0)"
    }),
    []
  );
  const {
    state: { y }
  } = useScroll();

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (current) {
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionProperty = "transform,opacity";
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        if (entry.isIntersecting) {
          current.style.opacity = "1";
          current.style.transform = "translate3d(0, 0, 0)";
        } else {
          current.style.opacity = "0";
          current.style.transform = `${handleDirection[direction]}`;
        }
        // hide element
        if (hide && y === hide.finish) {
          current.style.transform = `${hide.transform}`;
          current.style.opacity = `${hide.opacity}`;
        }
      }
    },
    [delay, direction, duration, handleDirection, hide, y]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        // direction 이 down 인 경우 threshold 를 주변 에러가발생함
        threshold: direction === "down" ? 0 : 0.3
      });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [direction, handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection[direction]
    }
  };
};

export default useScrollFadeIn;
