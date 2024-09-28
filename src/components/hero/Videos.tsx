"use client";
import React, { useRef, useEffect, useState } from "react";

const Videos = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoSize, setVideoSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateVideoSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let width, height, scrollWidthFactor;

      // Adjust video size based on breakpoints
      if (windowHeight <= 532) {
        // Handle screens with a height of 532px or below
        width = windowWidth * 0.95;
        height = Math.min(windowHeight * 0.45, 250); // Fixed height
        scrollWidthFactor = 200; // Adjust scroll effect for small screen height
      } else if (windowWidth >= 1536) {
        width = windowWidth - 400;
        height = windowHeight - 300;
        // 2xl screens and above
        // width = windowWidth * 0.85;
        // height = Math.min(windowHeight * 0.6 * 1.1, 600); // 10% increase in height
        scrollWidthFactor = 700;
      } else if (windowWidth >= 1280) {
        // xl screens
        width = windowWidth * 0.9;
        height = Math.min(windowHeight * 0.6, 600); // Fixed height
        scrollWidthFactor = 450;
      } else if (windowWidth >= 1024) {
        // lg screens
        width = windowWidth * 0.9;
        height = Math.min(windowHeight * 0.55, 500); // Fixed height
        scrollWidthFactor = 400;
      } else if (windowWidth >= 768) {
        // md screens
        width = windowWidth * 0.95;
        height = Math.min(windowHeight * 0.5, 450); // Fixed height
        scrollWidthFactor = 350;
      } else {
        // sm screens and below
        width = windowWidth * 0.95;
        height = Math.min(windowHeight * 0.45, 350); // Fixed height
        scrollWidthFactor = 300;
      }

      setVideoSize({
        width,
        height, // Keep height constant
      });

      return scrollWidthFactor; // Return the dynamic scroll width factor
    };

    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollWidthFactor = updateVideoSize(); // Dynamically get the scroll factor

      const videoTopToCenter = rect.top - windowHeight / 2 + 250;

      if (videoTopToCenter < 0) {
        const scrollPercentage = Math.min(
          -videoTopToCenter / scrollWidthFactor,
          1
        );

        let newWidth;
        if (windowHeight <= 532) {
          // For screens with height 532px or below
          newWidth =
            window.innerWidth * 0.95 -
            (window.innerWidth * 0.95 - 200) * scrollPercentage; // Shrink width smoothly
        } else {
          // For other screen sizes
          newWidth =
            window.innerWidth * 0.9 -
            (window.innerWidth * 0.9 - 250) * scrollPercentage; // Shrink width smoothly
        }

        // Ensure the video does not shrink below certain dimensions
        newWidth = Math.max(newWidth, 200); // Minimum width

        setVideoSize((prev) => ({ ...prev, width: newWidth }));
      } else {
        updateVideoSize();
      }
    };

    const handleResize = updateVideoSize; // Handle resizing

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize the video size on mount
    updateVideoSize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden z-10">
      <div
        ref={videoRef}
        className="rounded-md mx-auto transition-all duration-300 ease-in-out "
        style={{
          width: `${videoSize.width}px`,
          height: `${videoSize.height}px`, // Keep the height constant
          transition: "width 0.5s ease", // Only width transitions
        }}
      >
        <video
          className="rounded-md w-full h-full"
          controls
          autoPlay
          width={300}
          height={300}
          loop
          muted
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          {/* <source src="/videos/videoplayback.mp4" type="video/mp4" /> */}
          {/* <source src="/public/videos/videoplayback.mp4" type="video/mp4" /> */}
          <source src="https://framerusercontent.com/modules/assets/BcIElVBzSD9P1ht5PhehnVyzTA~0iRDOKjSaNyoXJfsXAcSsdeEYSbJ8aAp3MvS5ts7LL0.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videos;
