import { useEffect, useRef } from "react";

interface TextRevealOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number; // Animation duration in milliseconds
  spanClassName?: string; // Tailwind class for text styling
}

export function useTextReveal({
  threshold = 1.0,
  rootMargin = "0px",
  duration = 500,
  spanClassName = "", // Default to empty if no classes are passed
}: TextRevealOptions) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span");
          spans.forEach((span, idx) => {
            setTimeout(() => {
              (span as HTMLElement).classList.remove("translate-y-full"); // Move it to original position
              (span as HTMLElement).classList.add("translate-y-0"); // Move it back
            }, (idx + 1) * 50); // Staggered effect
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin,
      threshold,
    });

    // Wrap the text in spans
    const originalText = textElement.innerText;
    const wrappedText = originalText
      .split("")
      .map(
        (char) =>
          `<span class="inline-block transform translate-y-full transition-transform duration-[${duration}ms] ease-out ${spanClassName}">${char}</span>`
      )
      .join("");
    textElement.innerHTML = wrappedText;

    // Observe the text element
    observer.observe(textElement);

    return () => observer.disconnect();
  }, [threshold, rootMargin, duration, spanClassName]);

  return { textRef };
}
