import React, { useRef, useEffect, useCallback, useMemo } from "react";

const useScrollFadeIn = (
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
      }
    },
    [delay, direction, duration, handleDirection]
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
