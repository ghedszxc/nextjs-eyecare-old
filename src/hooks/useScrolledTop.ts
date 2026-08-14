import { useEffect, useState } from "react";

const useScrolledTop = () => {
  const [scrolledTop, setScrolledTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const onTop = currentScrollY === 0;

      if (isScrollingUp && onTop) {
        setScrolledTop(true);
      } else if (!isScrollingUp) {
        setScrolledTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return scrolledTop;
};

export default useScrolledTop;
