"use client"; // Ensure this is a client component

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import splashScreenLogo from "@/assets/images/splashScreenLogo.svg";

export const SplashScreen = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0); // Start from 0%
  const [displayedProgress, setDisplayedProgress] = useState(0); // To animate displayed progress
  const progressBarRef = useRef<HTMLDivElement>(null); // Reference for the progress bar
  const duration = 3000; // Total duration for the splash screen in milliseconds

  useEffect(() => {
    const increment = 100 / (duration / 10); // Calculate increment for each frame
    let width = 0; // Start width at 0

    const interval = setInterval(() => {
      if (width < 100) {
        width += increment; // Increment width
        const newProgress = Math.max(Math.round(width), 100); // Ensure it doesn't exceed 100
        setProgress(newProgress); // Update progress state
        setDisplayedProgress(newProgress); // Update displayed progress for animation
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${newProgress}%`; // Update width directly via ref
        }
      } else {
        clearInterval(interval); // Clear interval when reaching 100%
        setIsAnimating(false); // Hide splash screen after completion
      }
    }, 10); // Update every 10ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [duration]);

  // Number count animation logic
  const renderProgress = () => {
    return (
      <div
        className={`transition-transform duration-500 transform`}
        style={{
          display: "",
          minWidth: "20px",
          textAlign: "center",
        }} // Center the text
      >
        {displayedProgress}%
      </div>
    );
  };

  if (!isAnimating) return null; // Hide the splash screen once the animation is done

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black">
      <div>
        <Image
          src={splashScreenLogo}
          alt="Elite Commerce Logo"
          className="object-cover top-0 left-0 w-[200px] h-[56px]"
        />
      </div>
      {/* Slide animation */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-slide-out-top"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-slide-out-bottom"></div>
      {/* Progress Bar */}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <div
          id="myProgress"
          className="relative w-[240px] md:w-[350px] bg-black-50 mt-4 rounded-full h-[9px] overflow-hidden"
        >
          <div
            ref={progressBarRef}
            className="h-full bg-white rounded-full" // Set the inner bar color to blue
            style={{ width: "0%" }} // Start with 0% width
          ></div>
        </div>
        {/* Progress Number with Animation */}
        <div className="text-white text-[clamp(14px,3vw,18px)] mt-5">
          {renderProgress()}
        </div>{" "}
        {/* Display the progress number */}
      </div>
    </div>
  );
};

export default SplashScreen;
