import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { XD_DESKTOP_WIDTH } from "~/constants/Variables";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({
      y: window.scrollY * (XD_DESKTOP_WIDTH / document.body.clientWidth),
      x: window.scrollX
    });
  };

  useEffect(() => {
    const debounceFn = debounce(onScroll);
    window.addEventListener("scroll", debounceFn);
    return () => window.removeEventListener("scroll", debounceFn);
  }, []);

  return { state };
};

export default useScroll;
