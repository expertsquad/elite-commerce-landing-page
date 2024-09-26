"use client";
import React from "react";
import HighlightText from "@/components/Shared/HighlightText";
import SpinCircle from "@/components/Shared/SpinCircle";
import { IconArrowDown } from "@tabler/icons-react";
import { useMultipleVisibleSection } from "@/components/Shared/useMultipleVisibleSection";

const AllFeaturesBanner = () => {
  const sectionCount = 2; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[6] = el; // Assign to ref
      }}
      className={`all-feature w-full lg:h-[450px] md:h-[290px] h-[200px] rounded-[20px] flex items-start justify-center  py-[clamp(20px,2.5vh,30px)] px-3.5 relative duration-500 md:duration-1000 transition-transform   ease-in-out ${
        visibleSections[6]
          ? "opacity-100 translate-y-0"
          : " opacity-0  translate-y-[40px]"
      }`}
    >
      <span
        className={`absolute z-10 right-0 w-full h-full -mt-6 bg-white opacity-50  duration-1000 transition-transform     ease-in-out ${
          visibleSections[6] ? "translate-x-full" : "-translate-x-full"
        }`}
      ></span>
      <div className="flex flex-col items-center gap-[clamp(10px,2.5vw,30px)] max-w-[600px]">
        <span className="text-gradient-secondary [font-size:_clamp(14px,2.5vw,26px)]">
          Our Feature
        </span>
        <h1 className="font-bold [font-size:_clamp(18px,2.5vw,44px)] text-center">
          Powerful Must-Have <HighlightText> Features for</HighlightText>{" "}
          Megastores
        </h1>
        <p className="[font-size:_clamp(12px,2.5vw,18px)] text-black-80 font-medium text-center">
          Enhance your digital venture with top-tier performance, smart
          recommendations, & limitless settings.
        </p>
      </div>
      <div className="absolute -bottom-14">
        <SpinCircle
          className="bg-gradient-primary text-white"
          icon={<IconArrowDown />}
          spinText="EXPERT SQUAD | ELITE COMMERCE."
        />
      </div>
    </div>
  );
};

export default AllFeaturesBanner;
