import { useEffect, useState } from "react";

const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");

    const handleOrientationChange = (e) => {
      setIsLandscape(e.matches);
    };

    // Initial check
    handleOrientationChange(mediaQuery);

    // Listen to changes
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return isLandscape;
};

export default useIsLandscape;
