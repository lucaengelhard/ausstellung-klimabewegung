import React, { CSSProperties, useEffect, useState } from "react";

type WindowSize = {
  width: number | null;
  height: number | null;
};
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth === windowSize.width &&
        window.innerHeight === windowSize.height
      )
        return;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function breakpoint<K extends keyof CSSProperties>(
    width: number,
    above: CSSProperties[K],
    below: CSSProperties[K],
  ) {
    if (!windowSize.width) return above;
    if (windowSize.width < width) return below;
    return above;
  }

  return { windowSize, breakpoint };
}
