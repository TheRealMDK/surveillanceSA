import { useEffect, useState } from "react";

const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    // Initial check
    handleScroll();

    // Listen to scroll changes
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hasScrolled;
};

export default useHasScrolled;
