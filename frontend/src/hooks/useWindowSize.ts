import { useEffect, useState } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export const useScreenSize = (): ScreenSize => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSize, setScreenSize] = useState<ScreenSize>(() =>
    typeof window !== "undefined" ? getSize() : { width: 0, height: 0 }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize(getSize());
    };

    // ✅ initial sync (just in case)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
