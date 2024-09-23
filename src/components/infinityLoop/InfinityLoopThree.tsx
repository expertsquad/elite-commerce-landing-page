import Image from "next/image";
import React from "react";
import anqular from "@/assets/images/infinity05.png";
import ts from "@/assets/images/infinity04.png";
import face from "@/assets/images/infinity01.png";
import tail from "@/assets/images/infinity02.png";
import whatsapp from "@/assets/images/infinity03.png";

const InfinityLoopThree = () => {
  const images = [face, tail, whatsapp, ts, anqular];

  return (
    <div className="relative overflow-hidden w-full">
      {/* First scrolling container */}
      <div className="flex space-x-16 animate-rightSlow-scroll w-[200%]">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative h-28 w-52  md:h-48 md:w-80">
            <Image
              src={imgSrc}
              loading="lazy"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex space-x-16 animate-rightSlow-scroll w-[200%]"
        style={{ left: "100%" }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="relative h-28 w-52  md:h-48 md:w-80">
            <Image
              src={imgSrc}
              loading="lazy"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityLoopThree;
