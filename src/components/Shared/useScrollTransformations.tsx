import { useEffect } from "react";

export function useScrollTransformations(
  videoRef: React.RefObject<HTMLVideoElement>,
  headerLeftRef: React.RefObject<HTMLHeadingElement>,
  headerRightRef: React.RefObject<HTMLHeadingElement>,
  sectionRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const { bottom } = sectionRef.current.getBoundingClientRect();

        // Video scaling
        let scale = 1 - (bottom - window.innerHeight) * 0.0005;
        scale = Math.min(Math.max(scale, 0.2), 1); // Restrict scaling between 0.2 and 1
        videoRef.current.style.transform = `scale(${scale})`;

        // Text transformation
        let textTrans = bottom - window.innerHeight;
        textTrans = Math.max(textTrans, 0);
        if (headerLeftRef.current && headerRightRef.current) {
          headerLeftRef.current.style.transform = `translateX(${-textTrans}px)`;
          headerRightRef.current.style.transform = `translateX(${textTrans}px)`;
        }
      }
    };

    // Attach the scroll event listener to the window instead of the body
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoRef, headerLeftRef, headerRightRef, sectionRef]);
}
