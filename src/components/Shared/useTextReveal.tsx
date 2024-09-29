import { useEffect, useRef } from "react";

export interface TextRevealOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  spanClassName?: string;
  textStyles?: { text: string; className: string }[];
}

export function useTextReveal({
  threshold = 1.0,
  rootMargin = "0px",
  duration = 100,
  spanClassName = "",
  textStyles = [], // Default to an empty array
}: TextRevealOptions) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span"); // Animate all spans
          spans.forEach((span, idx) => {
            setTimeout(() => {
              (span as HTMLElement).style.transform = `translateY(0)`;
              (span as HTMLElement).style.transitionDuration = `${duration}ms`;
            }, (idx + 1) * 50);
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin,
      threshold,
    });

    // Split the text into spans while preserving spaces and line breaks
    const originalText = textElement.innerText;
    const wrappedText = originalText
      .split(/(\s+)/) // Split by spaces while preserving spaces
      .map((part) => {
        if (part === "\n") {
          return `<br />`; // Return <br /> for newlines
        } else if (part.trim() === "") {
          return part; // Return empty spaces as is
        } else {
          const styledSegment = textStyles.find((style) =>
            part.includes(style.text)
          );
          if (styledSegment) {
            return `<span class="${styledSegment.className} inline-block transform translate-y-full transition-transform">${part}</span>`; // Use dynamic color
          } else {
            return `<span class="inline-block transform translate-y-full transition-transform ${spanClassName}">${part}</span>`;
          }
        }
      })
      .join("");

    // Set the innerHTML to the wrapped text
    textElement.innerHTML = wrappedText;

    // Observe the text element
    observer.observe(textElement);

    return () => observer.disconnect();
  }, [threshold, rootMargin, duration, spanClassName, textStyles]);

  return { textRef };
}
