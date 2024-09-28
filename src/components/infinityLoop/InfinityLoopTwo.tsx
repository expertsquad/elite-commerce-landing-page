import Image from "next/image";
import React from "react";
import infinity05 from "@/assets/images/infinity/infinity05.png";
import infinity06 from "@/assets/images/infinity/infinity06.png";
import infinity07 from "@/assets/images/infinity/infinity07.png";
import infinity08 from "@/assets/images/infinity/infinity08.png";

const InfinityLoopTwo = () => {
  const images = [infinity05, infinity06, infinity07, infinity08];

  return (
    <div className="relative overflow-hidden w-[150%] md:w-full space-x-1">
      {/* First scrolling container */}
      <div className="flex space-x-0.5 animate-right-scroll w-[150%] md:w-[100%]">
        {images.map((imgSrc, index) => (
          <div key={index}>
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

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex space-x-0.5 animate-right-scroll w-[150%] md:w-[100%] right-full overflow-hidden"
        // style={{ right: "100%" }}
      >
        {images.map((imgSrc, index) => (
          <div key={index}>
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

export default InfinityLoopTwo;
