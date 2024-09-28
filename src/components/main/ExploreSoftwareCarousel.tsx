"use client";
import React from "react";
import InfinityLoopFour from "../infinityLoop/InfinityLoopFour";
import InfinityLoopTwo from "../infinityLoop/InfinityLoopTwo";
import InfinityLoopThree from "../infinityLoop/InfinityLoopThree";
import InfinityLoopOne from "../infinityLoop/InfinityLoopOne";
import sectionBg from "@/assets/images/sectionBg.png";
import Image from "next/image";
import Glassmorphism from "../ui/Glassmorphism";
import { useMultipleVisibleSection } from "../Shared/useMultipleVisibleSection";

const ExploreSoftwareCarousel = () => {
  const sectionCount = 2; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[18] = el; // Assign to ref
      }}
      className={`bg-black-80 pt-5 pb-80 md:pb-64 lg:pb-32 md:py-10  relative duration-500 md:duration-1000 transition-transform   ease-in-out ${
        visibleSections[18]
          ? "opacity-100 translate-y-0"
          : " opacity-0  translate-y-[50px]"
      }`}
    >
      <div className="space-y-2.5 md:space-y-5 text-center w-full">
        <div className="h-[30px] w-[160px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2 ">
          <span className="z-50  absolute text-sm text-white">Screenshot</span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>
        <h1 className="font-bold text-[clamp(20px,3vw,40px)] text-white">
          Explore Our Software Beautifull{" "}
          <span className="text-primary">Screenshort.</span>
        </h1>
        <p className="text-white text-[clamp(14px,3vw,17px)]">
          You deserve real flexibility while building your website and we are
          giving it!
        </p>
      </div>
      <div className="space-y-0.5 pt-5 md:pt-14">
        <InfinityLoopOne />
        <InfinityLoopTwo />
        <InfinityLoopThree />
        <InfinityLoopFour />
      </div>
      {/* glassmorphism  */}
      <div className="absolute left-0 right-0  bottom-5">
        <Glassmorphism />
      </div>
    </div>
  );
};

export default ExploreSoftwareCarousel;
