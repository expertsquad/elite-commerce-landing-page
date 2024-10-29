"use client";
import React, { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const headerLeftRef = useRef<HTMLHeadingElement | null>(null);
  const headerRightRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      animateVideo();
    };

    // Attach the scroll event listener to window
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateVideo = () => {
    if (!videoSectionRef.current) return;

    const { bottom, top } = videoSectionRef.current.getBoundingClientRect();

    // Calculate scale based on scroll position
    let scale = 1 - (bottom - window.innerHeight) * 0.0009;
    scale = Math.min(Math.max(scale, 0.5), 1); // Clamp scale between 0.2 and 1

    if (videoRef.current) {
      videoRef.current.style.transform = `scale(${scale})`;
    }

    // Calculate text transformation based on scroll position
    let textTrans = bottom - window.innerHeight;
    textTrans = Math.max(textTrans, 0); // Ensure textTrans is not negative

    // Adjust text positioning
    if (headerLeftRef.current && headerRightRef.current) {
      const translateValue = textTrans / 2; // Adjust this value to change the translation sensitivity
      headerLeftRef.current.style.transform = `translateX(${-translateValue}px)`;
      headerRightRef.current.style.transform = `translateX(${translateValue}px)`;
    }

    // Set video and text to original positions when fully scrolled past the section
    if (top - 100 <= 0 && bottom - 100 >= window.innerHeight) {
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(1)`; // Set to full scale
      }
      if (headerLeftRef.current && headerRightRef.current) {
        headerLeftRef.current.style.transform = `translateX(0)`;
        headerRightRef.current.style.transform = `translateX(0)`;
      }
    }
  };

  return (
    <>
      <section
        ref={videoSectionRef}
        className="relative flex justify-center items-center h-screen "
      >
        <div className="sticky top-0 w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover transform scale-50 transition-transform duration-300 z-20 bg-black will-change-transform"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            {" "}
            <source src="https://framerusercontent.com/modules/assets/BcIElVBzSD9P1ht5PhehnVyzTA~0iRDOKjSaNyoXJfsXAcSsdeEYSbJ8aAp3MvS5ts7LL0.mp4" />
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-50 w-full flex justify-center gap-x-8 z-50">
            <h2
              ref={headerLeftRef}
              className="text-6xl md:text-8xl lg:text-10xl transition-transform duration-300"
            >
              SHOW
            </h2>
            <h2
              ref={headerRightRef}
              className="text-6xl md:text-8xl lg:text-10xl transition-transform duration-300"
            >
              CASE
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
