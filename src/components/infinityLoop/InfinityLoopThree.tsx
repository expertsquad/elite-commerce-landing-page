import Image from "next/image";
import React from "react";
import infinity09 from "@/assets/images/infinity/infinity09.png";
import infinity10 from "@/assets/images/infinity/infinity10.png";
import infinity11 from "@/assets/images/infinity/infinity11.png";
import infinity12 from "@/assets/images/infinity/infinity12.png";

const InfinityLoopThree = () => {
  const images = [infinity09, infinity10, infinity11, infinity12];

  return (
    <div className="relative overflow-hidden w-[150%] md:w-full space-x-1">
      {/* First scrolling container */}
      <div className="flex space-x-0.5 animate-right-Slow-scroll w-[150%] md:w-[100%]">
        {images.map((imgSrc, index) => (
          <div key={index}>
            <Image
              src={imgSrc}
              alt="carousel Image"
              quality={80}
              // className="w-[400px] h-[90px] sm:w-[450px] sm:h-[100px] md:w-[450px] md:h-[180px] lg:w-[450px] lg:h-[180px] xl:w-[500px] xl:h-[190px] 2xl:w-[500px] 2xl:h-[250px] "
              className="w-full h-full shrink-0"
            />
          </div>
        ))}
      </div>

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex space-x-0.5 animate-right-Slow-scroll w-[150%] md:w-[100%] left-[150%] md:left-full"
        // style={{ left: "100%" }} // Start from the right for left scroll
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="">
            <Image
              src={imgSrc}
              alt="Carousel Image"
              quality={80}
              // className="w-[400px] h-[90px] sm:w-[450px] sm:h-[100px] md:w-[450px] md:h-[180px] lg:w-[450px] lg:h-[180px] xl:w-[500px] xl:h-[190px] 2xl:w-[500px] 2xl:h-[250px] "
              className="w-full h-full shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityLoopThree;
