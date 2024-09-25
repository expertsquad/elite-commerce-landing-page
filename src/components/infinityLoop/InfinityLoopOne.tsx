import Image from "next/image";
import React from "react";
import anqular from "@/assets/images/infinity05.png";
import infinity01 from "@/assets/images/infinity/infinity01.png";
import infinity02 from "@/assets/images/infinity/infinity02.png";
import infinity03 from "@/assets/images/infinity/infinity03.png";
import infinity04 from "@/assets/images/infinity/infinity04.png";

const InfinityLoopOne = () => {
  const images = [infinity01, infinity02, infinity03, infinity04];

  return (
    <div className="relative overflow-hidden w-full space-x-1">
      {/* First scrolling container */}
      <div className="flex space-x-0.5 animate-left-scroll w-[100%]">
        {images.map((imgSrc, index) => (
          <div key={index}>
            <Image
              src={imgSrc}
              alt=""
              quality={80}
              className="w-[400px] h-[90px] sm:w-[450px] sm:h-[100px] md:w-[450px] md:h-[180px] lg:w-[450px] lg:h-[180px] xl:w-[500px] xl:h-[190px] 2xl:w-[500px] 2xl:h-[250px] "
            />
          </div>
        ))}
      </div>

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex  space-x-0.5 animate-left-scroll w-[100%]"
        style={{ left: "100%" }} // Start from the right for left scroll
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="">
            <Image
              src={imgSrc}
              alt=""
              quality={80}
              className="w-[400px] h-[90px] sm:w-[450px] sm:h-[100px] md:w-[450px] md:h-[180px] lg:w-[450px] lg:h-[180px] xl:w-[500px] xl:h-[190px] 2xl:w-[500px] 2xl:h-[250px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityLoopOne;
