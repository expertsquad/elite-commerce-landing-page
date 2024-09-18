import Adjusments from "@/assets/icons/Adjusments";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import ArrowUpRight from "@/assets/icons/ArrowUpRight";
import BagFileIcon from "@/assets/icons/BagFileIcon";
import BestPriceIcon from "@/assets/icons/BestPriceIcon";
import BostaIcon from "@/assets/icons/BostaIcon";
import ColorPaletteIcon from "@/assets/icons/ColorPaletteIcon";
import ComputerIcon from "@/assets/icons/ComputerIcon";
import EasyToUseIcon from "@/assets/icons/EasyToUseIcon";
import EyeIcon from "@/assets/icons/EyeIcon";
import HighPerformanceIcon from "@/assets/icons/HighPerformanceIcon";
import HumbergerMenuIcon from "@/assets/icons/HumbergerMenuIcon";
import IconBolt from "@/assets/icons/IconBolt";
import IconHeart from "@/assets/icons/IconHeart";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import IconStar from "@/assets/icons/IconStar";
import KnowledgePowerIcon from "@/assets/icons/KnowledgePowerIcon";
import LoveIcon from "@/assets/icons/LoveIcon";
import MagnifyIcon from "@/assets/icons/MagnifyIcon";
import OpenEyeIcon from "@/assets/icons/OpenEyeIcon";
import PremiumIcon from "@/assets/icons/PremiumIcon";
import ResponsiveIcon from "@/assets/icons/ResponsiveIcon";
import RightArrow from "@/assets/icons/RightArrow";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";
import SupportIcon from "@/assets/icons/SupportIcon";
import UnboxIcon from "@/assets/icons/UnboxIcon";
import UniqueDesignIcon from "@/assets/icons/UniqueDesignIcon";
import Circle from "@/components/Shared/Circle";
import HighlightText from "@/components/Shared/HighlightText";
import TopFeatureCard from "@/components/Shared/TopFeatureCard";
import React from "react";

const Shariful = () => {
  return (
    <div className="space-y-4 py-10">
      <div className="w-36 h-12 bg-gradient-primary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary-light rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-primary-light rounded-md"></div>
      {/* <div className="flex items-center justify-center gap-5 flex-wrap">
        <BagFileIcon />
        <ComputerIcon />
        <KnowledgePowerIcon />
        <ResponsiveIcon />
        <UnboxIcon />
        <HumbergerMenuIcon />
        <OpenEyeIcon />
        <ColorPaletteIcon />
        <BostaIcon />
        <RightArrow />
        <ArrowUpRight />
        <Adjusments />
        <MagnifyIcon />
        <EyeIcon />
        <IconBolt />
        <IconHeart />
        <IconStar />
        <IconShoppingBag />
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <PremiumIcon />
        <HighPerformanceIcon />
        <EasyToUseIcon />
        <BestPriceIcon />
        <UniqueDesignIcon />
        <SupportIcon />
        <LoveIcon />
        <SatisfiedEmoji />
      </div> */}
      <div className=" flex items-center justify-center">
        <Circle
          bgColor="bg-gradient-secondary-reverse"
          className="w-[200px] h-[200px]"
          icon={<ArrowDownIcon width={16} height={16} />}
          spinText="EXPERT SQUAD, ELITE COMMERCE."
        />
      </div>
      <HighlightText text="Shariful Islam" className="font-bold" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <TopFeatureCard
            key={i}
            iconContainerStyle="border border-secondary"
            className="bg-gradient-primary  border border-black-10"
            featureIcon={<PremiumIcon />}
            featureTitle="Premium Features"
            featureDescription="Equipped with many advanced features for an online store!"
          />
        ))}
      </div>
    </div>
  );
};

export default Shariful;
