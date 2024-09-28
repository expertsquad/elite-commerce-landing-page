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
          const spans = entry.target.querySelectorAll("span, div");
          spans.forEach((span, idx) => {
            setTimeout(() => {
              (span as HTMLElement).classList.remove("translate-y-full"); // Remove translate-y to move it back
              (span as HTMLElement).classList.add("translate-y-0"); // Move it to the original position
            }, (idx + 1) * 50); // Add stagger effect
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin,
      threshold,
    });

    // Get all inner spans or divs and apply initial transform and transition styles
    const blocks = textElement.querySelectorAll("span, div");
    blocks.forEach((block) => {
      // Apply Tailwind CSS for animation
      (block as HTMLElement).classList.add(
        "transform", // Enable transform
        "translate-y-full", // Initially move the element down
        "transition-transform", // Enable smooth transitions
        `duration-[${duration}ms]`, // Set the duration dynamically
        "ease-out", // Use ease-out for transition
        spanClassName // Additional Tailwind classes
      );
    });

    // Observe the text element for intersection
    observer.observe(textElement);

    return () => observer.disconnect();
  }, [threshold, rootMargin, duration, spanClassName]);

  return { textRef };
}
