<<<<<<< HEAD
import PanelContent from "../ui/PanelContent";

const TopFeature = () => {
  return (
    <div className="main-container my-10 text-center">
      {/* Feature section header and description */}
      <h2 className="text-3xl mb-4 ">
        Solution-wise Features of Elite Commerce
      </h2>
      <h4>
        Meet the dynamic features of Elite Commerce that comes with Customer
        Panel, Admin Panel, and other solutions.
      </h4>

      <PanelContent />
=======
import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBg.png";
import topFeaturesImage from "@/assets/images/topFeaturesSvg.svg";
import HighlightText from "../Shared/HighlightText";
import { topFeatureCardData } from "@/constants/topFeaturesData";
import TopFeatureCard from "../Shared/TopFeatureCard";

const TopFeature = () => {
  return (
    <div className="main-container py-10">
      <div className="space-y-[clamp(20px,2.5vw,30px)]">
        <div className="h-[30px] w-[160px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2">
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
        <p className="text-center  font-semibold [font-size:_clamp(15px,2.5vw,40px)]">
          Product Design Online feature will help your{" "}
          <HighlightText>Customer easy</HighlightText> customize and design
          product online.
        </p>
      </div>
      <div className="w-full h-96 relative mt-10">
        <Image
          src={topFeaturesImage}
          alt="top features"
          fill
          className="top-0 left-0  object-contain h-full w-full"
        />
      </div>

      {/* Top Feature Card Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-x-[clamp(14px,2.5vw,20px)] gap-y-[clamp(14px,2.5vh,20px)]">
        {topFeatureCardData?.map((card) => (
          <TopFeatureCard
            key={card._id}
            data={card}
            className="bg-gradient-primary  border border-black-10"
          />
        ))}
      </div>
>>>>>>> 0b184e60c79e35cd50a367812182af326ae098cb
    </div>
  );
};

export default TopFeature;
