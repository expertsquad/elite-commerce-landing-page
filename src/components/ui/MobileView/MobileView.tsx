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
        sectionRefs.current[91] = el;
      }}
      className={` overflow-x-auto transition-transform ease-in-out duration-700 scrollbar-x-remove flex items-center justify-center gap-10 w-full  ${
        visibleSection
          ? "opacity-100 translate-x-0"
          : "opacity-0 md:-translate-y-0 md:translate-x-[500px] -translate-y-[500px]"
      }`}
    >
      {mobileOptimizedData?.map((data) => (
        <div key={data?.id} className="flex flex-col items-center gap-3">
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
