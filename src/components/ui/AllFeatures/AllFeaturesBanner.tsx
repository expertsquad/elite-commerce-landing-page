import React from "react";
import bannerBg from "@/assets/images/allFeatureBannerBg.svg";
import HighlightText from "@/components/Shared/HighlightText";
import Circle from "@/components/Shared/Circle";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import Image from "next/image";
import demo from "@/assets/images/circleRound.png";
import SpinCircle from "@/components/Shared/SpinCircle";
import { IconArrowDown } from "@tabler/icons-react";

const AllFeaturesBanner = () => {
  return (
    <div className="all-feature w-full lg:h-[450px] md:h-[290px] h-[200px] rounded-[20px] flex items-start justify-center  py-[clamp(20px,2.5vh,30px)] px-3.5 relative">
      <div className="flex flex-col items-center gap-[clamp(10px,2.5vw,30px)] max-w-[600px]">
        <span className="text-gradient-secondary [font-size:_clamp(14px,2.5vw,26px)]">
          Our Feature
        </span>
        <h1 className="font-bold [font-size:_clamp(18px,2.5vw,44px)] text-center">
          Powerful Must-Have <HighlightText> Features for</HighlightText>{" "}
          Megastores
        </h1>
        <p className="[font-size:_clamp(12px,2.5vw,18px)] text-black-80 font-medium text-center">
          Enhance your digital venture with top-tier performance, smart
          recommendations, & limitless settings.
        </p>
      </div>
      <div className="absolute -bottom-14">
        <SpinCircle
          className="bg-gradient-primary"
          icon={<IconArrowDown />}
          spinText="EXPERT SQUAD | ELITE COMMERCE."
        />
      </div>
    </div>
  );
};

export default AllFeaturesBanner;
