import { useEffect, useRef, useState } from "react";

export function useVisibleSection(sectionCount: number, buffer: number = 200) {
  const [visibleSection, setVisibleSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    new Array(sectionCount).fill(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      const viewportTop = window.scrollY + buffer;
      const viewportBottom = window.scrollY + window.innerHeight - buffer;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if the section is within the buffer range
          if (sectionBottom >= viewportTop && sectionTop <= viewportBottom) {
            setVisibleSection(index);
          } else if (index === visibleSection) {
            setVisibleSection(null); // Remove visibility when it scrolls out of view
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [buffer, visibleSection]);

  return { visibleSection, sectionRefs };
}
