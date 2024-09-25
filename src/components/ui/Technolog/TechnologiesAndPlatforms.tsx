"use client";
import HighlightText from "@/components/Shared/HighlightText";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import { technologiesData } from "@/constants/technologiesData";
import Image from "next/image";
import React from "react";

const TechnologiesAndPlatforms = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[58] = el;
      }}
      className={`space-y-5 px-5 py-10 shadow-md rounded-[10px] `}
    >
      <div className="text-center font-semibold [font-size:_clamp(14px,2.5vw,18px)]">
        {" "}
        <HighlightText>Technologies & platforms</HighlightText>
      </div>
      <div
        className={`bg-white flex items-center justify-center flex-wrap overflow-hidden }`}
      >
        {technologiesData?.map((tech, index) => (
          <div
            key={index}
            className={`border border-black-10 flex items-center flex-col gap-[clamp(4px,2.5vw,8px)] justify-center   rounded-full md:w-[180px] md:h-[180px] w-[110px] h-[110px] -ml-5 hover:bg-[#F8f8f8]  transition-all ease-in-out duration-700 }`}
          >
            <div className="relative md:w-[75px] md:h-[75px] w-[47px] h-[47px] ">
              <Image
                src={tech?.image}
                alt="react"
                fill
                className="w-full h-full top-0 left-0 object-contain"
              />
            </div>
            <span className="[font-family:sansation] [font-size:_clamp(12px,2.5vw,18px)]">
              {tech?.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesAndPlatforms;
