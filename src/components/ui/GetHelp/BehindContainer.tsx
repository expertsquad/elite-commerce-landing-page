"use client";
import React from "react";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";

const BehindContainer = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[60] = el;
      }}
      className={`absolute transition-transform duration-1000 delay-10 ease-in-out ${
        visibleSection === 60 ? "md:rotate-0" : "  md:-rotate-90 "
      }`}
    >
      <div className="bg-gradient-primary rounded-[20px] md:w-[430px] w-[300px] md:h-[670px] h-[452px] inset-0 group-hover/form:rotate-0  transition-all duration-300 md:-rotate-6 relative "></div>
    </div>
  );
};

export default BehindContainer;
