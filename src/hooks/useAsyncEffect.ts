import { DependencyList, useEffect } from "react";

const useAsyncEffect = (
  asyncEffect: () => Promise<void>,
  deps: DependencyList
) => {
  useEffect(() => {
    asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useAsyncEffect;
