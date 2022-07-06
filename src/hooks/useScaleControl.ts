import React, { useCallback, useEffect, useRef } from "react";

const useScaleControl = (scale = 0.6, duration = 1, delay = 0) => {
  const dom: React.RefObject<HTMLDivElement> = useRef(null);

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
          current.style.transform = "scale(1)";
        } else {
          current.style.opacity = "0";
          current.style.transform = `scale${scale}`;
        }
      }
    },
    [delay, duration, scale]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        // direction 이 down 인 경우 threshold 를 주변 에러가발생함
        threshold: 0.3
      });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: `scale(${scale})`
    }
  };
};

export default useScaleControl;
