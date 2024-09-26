// useVisibleSections.ts
import { useEffect, useRef, useState } from "react";

export function useMultipleVisibleSection(
  sectionCount: number,
  buffer: number = 190
) {
  const [visibleSections, setVisibleSections] = useState<boolean[]>(
    new Array(sectionCount).fill(false)
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    new Array(sectionCount).fill(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      const viewportTop = window.scrollY + buffer;
      const viewportBottom = window.scrollY + window.innerHeight - buffer;

      const updatedVisibleSections = new Array(sectionCount).fill(false);

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if the section is within the buffer range
          if (sectionBottom >= viewportTop && sectionTop <= viewportBottom) {
            updatedVisibleSections[index] = true; // Mark this section as visible
          }
        }
      });

      setVisibleSections(updatedVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buffer, sectionCount]);

  return { visibleSections, sectionRefs };
}
