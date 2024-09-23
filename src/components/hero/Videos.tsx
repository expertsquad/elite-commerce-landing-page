"use client";
import React, { useRef, useEffect, useState } from "react";

const Videos = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoSize, setVideoSize] = useState({ width: 500, height: 370 }); // Default size

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the video top and bottom relative to the window
      const videoTop = rect.top + window.scrollY;
      const videoBottom = videoTop + rect.height;

      // Calculate the visible height of the video
      const visibleHeight =
        Math.min(videoBottom, window.scrollY + windowHeight) -
        Math.max(videoTop, window.scrollY);

      const totalVisibleHeight = Math.min(rect.height, windowHeight);

      // Calculate scroll percentage based on how much of the video is visible
      const scrollPercentage = Math.max(
        0,
        Math.min(1, visibleHeight / totalVisibleHeight)
      );

      // Calculate new width and height, ensuring smooth growth from 500px to full width
      const newWidth = 500 + (window.innerWidth - 500) * scrollPercentage;
      const newHeight = 370 + (500 - 370) * scrollPercentage;

      // Update video size based on scroll percentage
      setVideoSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden md:h-[520px]">
      {/* Video container */}
      <div
        ref={videoRef}
        className="rounded-md overflow-hidden mx-auto transition-all duration-500 ease-in-out" // Smoother transition
        style={{
          width: `${videoSize.width}px`, // Dynamically apply the video width
          height: `${videoSize.height}px`, // Dynamically apply the video height
        }}
      >
        <video
          className="rounded-md w-full h-full"
          controls
          autoPlay
          muted
          preload="auto"
          style={{
            width: "100%", // Ensure the video uses 100% of its parent container's width
            height: "100%", // Ensure the video uses 100% of its parent container's height
            objectFit: "cover",
          }}
        >
          <source src="/videos/EliteCommer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videos;
