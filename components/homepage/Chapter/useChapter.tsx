import { useState, useEffect } from "react";

function useChapter(ref: React.RefObject<HTMLElement>): {
  scrollPercentage: number;
} {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      if (ref.current) {
        const elementTop = ref.current.offsetTop;
        const elementHeight = ref.current.offsetHeight;

        const viewportTop = window.scrollY;
        const viewportHeight = window.innerHeight;

        const scrolledPastTop = Math.max(0, viewportTop - elementTop);
        const elementBottom = elementTop + elementHeight;

        if (
          viewportTop > elementBottom ||
          viewportTop + viewportHeight < elementTop
        ) {
          setScrollPercentage(0);
          return;
        }

        const totalVisibleHeight = elementHeight - scrolledPastTop;
        const percentage = (scrolledPastTop / totalVisibleHeight) * 100;

        setScrollPercentage(percentage);
      }
    };

    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, [ref]);

  return { scrollPercentage };
}

export default useChapter;
