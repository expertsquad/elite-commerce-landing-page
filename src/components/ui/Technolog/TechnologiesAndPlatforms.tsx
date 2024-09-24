import HighlightText from "@/components/Shared/HighlightText";
import { technologiesData } from "@/constants/technologiesData";
import Image from "next/image";
import React from "react";

const TechnologiesAndPlatforms = () => {
  return (
    <div className="space-y-5 px-5 py-10 shadow-md rounded-[10px] ">
      <div className="text-center font-semibold [font-size:_clamp(14px,2.5vw,18px)]">
        {" "}
        <HighlightText>Technologies & platforms</HighlightText>
      </div>
      <div className="bg-white flex items-center justify-center flex-wrap  ">
        {technologiesData?.map((tech) => (
          <div
            key={tech?._id}
            className="border border-black-10 flex items-center flex-col gap-[clamp(4px,2.5vw,8px)] justify-center   rounded-full md:w-[180px] md:h-[180px] w-[110px] h-[110px] -ml-5 "
          >
            <div className="relative md:w-[75px] md:h-[75px] w-[47px] h-[47px]">
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
