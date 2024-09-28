"use client";
import Image from "next/image";
import React from "react";
import demo from "@/assets/images/mobileView/dashboardMenu.png";
import { mobileOptimizedData } from "@/constants/mobileOptimizedData";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";

const MobileView = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[58] = el;
      }}
      className={`flex items-center gap-5 overflow-x-auto scrollbar-x-remove transition-transform ease-in-out duration-700 ${
        visibleSection === 58
          ? "opacity-100 md:translate-x-0 translate-y-0"
          : "md:translate-x-[500px] translate-x-0 translate-y-[500px] md:translate-y-0 opacity-0"
      }`}
    >
      {mobileOptimizedData?.map((data, i) => (
        <div key={i} className="flex flex-col items-center gap-3 shrink-0">
          <div className="relative w-[200px] h-[420px]">
            <Image
              src={data?.image}
              alt="Mobile View"
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
          <span className="[font-size:_clamp(14px,2.5vw,18px)] text-black-80 font-semibold  ">
            {data?.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MobileView;
