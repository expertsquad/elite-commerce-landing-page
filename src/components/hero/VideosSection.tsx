// components/VideoSection.js

import { useEffect, useRef, useState } from "react";

const VideosSection = () => {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const videoElement = videoRef.current as HTMLDivElement;
      const videoPosition = videoElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scaling effect based on scroll position
      if (videoPosition.top < windowHeight && videoPosition.bottom > 0) {
        const scaleValue = Math.max(
          0.5,
          1 - (videoPosition.top / windowHeight) * 0.3
        );
        setScale(scaleValue);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="video"
      className="relative w-full h-screen flex justify-center items-center"
    >
      <div
        ref={videoRef}
        className="video-container transform transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Tailwind CSS for styling */}
        <video
          className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/videos/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideosSection;
