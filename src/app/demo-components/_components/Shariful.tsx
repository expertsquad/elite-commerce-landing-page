import BagFileIcon from "@/assets/icons/BagFileIcon";
import BestPriceIcon from "@/assets/icons/BestPriceIcon";
import BostaIcon from "@/assets/icons/BostaIcon";
import ColorPaletteIcon from "@/assets/icons/ColorPaletteIcon";
import ComputerIcon from "@/assets/icons/ComputerIcon";
import EasyToUseIcon from "@/assets/icons/EasyToUseIcon";
import HighPerformanceIcon from "@/assets/icons/HighPerformanceIcon";
import HumbergerMenuIcon from "@/assets/icons/HumbergerMenuIcon";
import KnowledgePowerIcon from "@/assets/icons/KnowledgePowerIcon";
import LoveIcon from "@/assets/icons/LoveIcon";
import OpenEyeIcon from "@/assets/icons/OpenEyeIcon";
import PremiumIcon from "@/assets/icons/PremiumIcon";
import ResponsiveIcon from "@/assets/icons/ResponsiveIcon";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";
import SupportIcon from "@/assets/icons/SupportIcon";
import UnboxIcon from "@/assets/icons/UnboxIcon";
import UniqueDesignIcon from "@/assets/icons/UniqueDesignIcon";
import React from "react";

const Shariful = () => {
  return (
    <div className="space-y-4">
      <div className="w-36 h-12 bg-gradient-primary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary-light rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-primary-light rounded-md"></div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <BagFileIcon />
        <ComputerIcon />
        <KnowledgePowerIcon />
        <ResponsiveIcon />
        <UnboxIcon />
        <HumbergerMenuIcon />
        <OpenEyeIcon />
        <ColorPaletteIcon />
        <BostaIcon />
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
      </div>
    </div>
  );
};

export default Shariful;
