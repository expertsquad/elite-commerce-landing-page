"use client";
import React, { useEffect, useState, useRef } from "react";
import HighlightText from "@/components/Shared/HighlightText";
import { customerPanelFeatures } from "@/constants/featuresData";
import FeaturesMenuItem from "./FeaturesMenuItem";
import FeaturesCard from "./FeaturesCard";

const CustomerPanel = () => {
  const [activeFeature, setActiveFeature] = useState(customerPanelFeatures[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false); // Track if the section is in view
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the section

  useEffect(() => {
    // IntersectionObserver to detect if the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: "0px", // Ensure no margin around the observer's root (viewport)
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only run the auto-switch if the section is in view and not being hovered
    if (!isHovered && isInView) {
      const interval = setInterval(() => {
        handleAutoSwitch();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex, isInView]);

  const handleAutoSwitch = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === customerPanelFeatures.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 700); // Duration matches the transition time
  };

  useEffect(() => {
    // Update the active feature whenever the currentIndex changes
    setActiveFeature(customerPanelFeatures[currentIndex]);
  }, [currentIndex]);

  const handleMenuItemClick = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setActiveFeature(customerPanelFeatures[index]);
        setIsAnimating(false);
      }, 700); // Adjust transition time
    }
  };

  return (
    <div
      ref={sectionRef} // Attach ref to the section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid md:grid-cols-3 grid-cols-1 md:gap-5"
    >
      <div className="md:bg-[#0CE47F0D] p-5 md:border border-black-10 rounded-[10px]">
        <div className="space-y-8 md:text-start text-center">
          <HighlightText className="font-semibold text-base">
            All Features
          </HighlightText>
          <div className="flex md:flex-col flex-row gap-3.5 overflow-x-auto scrollbar-x-remove">
            {customerPanelFeatures?.map((feature, index) => (
              <FeaturesMenuItem
                className={`${
                  activeFeature?.title === feature?.title
                    ? "bg-gradient-primary text-white"
                    : "bg-[#119F5B0D] text-black-80"
                } md:whitespace-normal whitespace-nowrap group`}
                onClick={() => handleMenuItemClick(index)}
                key={feature?._id}
                title={feature?.title}
                icon={""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border border-black-10 rounded-[10px] p-[clamp(16px,2.5vw,32px)] flex gap-[clamp(20px,2.5vw,40px)] md:flex-row flex-col md:justify-normal md:items-start justify-center items-center bg-[#0CE47F0D] col-span-2 overflow-hidden">
        {/* First Image from Top */}
        <div
          className={`transition-transform ease-in-out duration-700 ${
            isAnimating
              ? "md:-translate-y-[500px] md:translate-x-0 -translate-y-0 -translate-x-[50px] opacity-0"
              : "md:translate-y-0 opacity-100 translate-x-0 "
          }`}
        >
          <FeaturesCard
            cardTitle="Minimal Design Content For"
            data={activeFeature}
            bottomHighlight
            first
          />
        </div>

        <div
          className={`transition-transform ease-in-out duration-700 md:mt-24 ${
            isAnimating
              ? "translate-x-[50px] translate-y-0 md:translate-y-[500px] md:translate-x-0 opacity-0"
              : "translate-x-0 md:translate-y-0 opacity-100"
          }`}
        >
          <FeaturesCard
            cardTitle="Dead Simple"
            second
            data={activeFeature}
            topHighlight
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerPanel;
