"use client";
import { useEffect } from "react";

const ScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInSlide");
          } else {
            entry.target.classList.remove("fadeInSlide");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elementsToAnimate = document.querySelectorAll(".animate-element");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="space-y-10">
      <div className="animate-element opacity-0 transform -translate-x-10 transition-all duration-700">
        Fade-in and Slide-in from Left
      </div>
      <div className="animate-element opacity-0 transform -translate-x-10 transition-all duration-700">
        Another Element
      </div>
    </div>
  );
};

export default ScrollAnimations;
