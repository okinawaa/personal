import { useEffect, useState } from "react";

const easeOutExpo = (time: number) => {
  return time === 1 ? 1 : 1 - 2 ** (-10 * time);
};

const useCountUp = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  // 사람에 눈에 자연스러운 60 프레임 선택 1초에 60번
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber += 1;
      const progress = easeOutExpo(currentNumber / totalFrame);
      setCount(Math.round(end * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

export default useCountUp;
