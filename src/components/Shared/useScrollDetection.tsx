import { useState, useEffect } from "react";
import { throttle } from "lodash";

export const useScrollDetection = (threshold: number, wait = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  let lastScrollTop = 0; // Store the previous scroll position

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY; // Use window scrollY for window scrolling

      // Check if scrolled past the threshold
      setIsScrolled(scrollTop > threshold);

      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
        setIsScrolled(false); // Remove shadow when scrolling down
      } else {
        setScrollDirection("up");
        setIsScrolled(scrollTop > threshold); // Add shadow when scrolling up
      }

      // Update last scroll position
      lastScrollTop = scrollTop;
    }, wait);

    window.addEventListener("scroll", handleScroll); // Attach to window scroll

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel throttle pending calls
    };
  }, [threshold, wait]);

  return { isScrolled, scrollDirection };
};
