"use client";
import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBg.png";
import topFeaturesGif from "@/assets/images/featuresTop.svg";
import HighlightText from "../Shared/HighlightText";
import { topFeatureCardData } from "@/constants/topFeaturesData";
import TopFeatureCard from "../Shared/TopFeatureCard";
import { useVisibleSection } from "../Shared/useVisibleSection";

const TopFeature = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div className="main-container my-10 overflow-hidden">
      <div className="space-y-[clamp(20px,2.5vw,30px)]">
        <div className="h-[30px] w-[160px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2 ">
          <span className="z-50  absolute text-sm text-white">
            Top Features
          </span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>
        <p
          className={`text-center  font-semibold [font-size:_clamp(15px,2.5vw,40px)]`}
        >
          Product Design Online feature will help your{" "}
          <HighlightText>Customer easy</HighlightText> customize and design
          product online.
        </p>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[38] = el;
        }}
        className={`flex items-center justify-center transition-transform ease-in-out duration-700 ${
          visibleSection === 38
            ? "opacity-100 translate-y-0"
            : "opacity-60 translate-y-[30px]"
        }`}
      >
        <Image
          src={topFeaturesGif}
          alt="top features"
          className="mt-20 select-none  image-select-none"
        />
      </div>

      {/* Top Feature Card Section */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 place-items-center gap-x-[clamp(10px,2.5vw,20px)] gap-y-[clamp(10px,2.5vh,20px)] transition-transform ease-in-out duration-300  overflow-hidden `}
      >
        {topFeatureCardData?.map((card, index) => (
          <TopFeatureCard
            index={index}
            key={card._id}
            data={card}
            className=" border border-black-10"
          />
        ))}
      </div>
    </div>
  );
};

export default TopFeature;
