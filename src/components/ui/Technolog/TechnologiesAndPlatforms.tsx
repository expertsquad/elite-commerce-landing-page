import HighlightText from "@/components/Shared/HighlightText";
import { technologiesData } from "@/constants/technologiesData";
import Image from "next/image";
import React from "react";

const TechnologiesAndPlatforms = () => {
  return (
    <div className="space-y-5 px-5 py-10 lg:shadow-2xl md:shadow-xl shadow-lg rounded-[10px] lg:order-none order-3">
      <div className="text-center font-semibold [font-size:_clamp(14px,2.5vw,18px)]">
        {" "}
        <HighlightText>Technologies & platforms</HighlightText>
      </div>
      <div className="grid grid-cols-3 gap-3 bg-white  ">
        {technologiesData?.map((tech) => (
          <div
            key={tech?._id}
            className="border border-black-10 flex items-center justify-center px-3.5 rounded-[10px] "
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={tech?.image}
                alt="react"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesAndPlatforms;
