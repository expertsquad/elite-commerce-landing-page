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
import MobileOptimized from "@/components/main/MobileOptimized";
import Circle from "@/components/Shared/Circle";
import HighlightText from "@/components/Shared/HighlightText";
import TopFeatureCard from "@/components/Shared/TopFeatureCard";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import React from "react";

const Shariful = () => {
  return (
    <div className="space-y-4 py-10">
      <div className="w-36 h-12 bg-gradient-primary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary-light rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-secondary rounded-md"></div>
      <div className="w-36 h-12 bg-gradient-primary-light rounded-md"></div>
      <div className="flex items-center justify-center">
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black-80 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white-15"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black-70 group-hover:-rotate-180 ease"></span>
            <span className="relative">Button Text</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black-70 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>

        <button className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden    bg-white rounded-full group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
          <span className="relative flex items-center gap-1.5 text-gradient-primary group-hover:text-white text-base">
            <IconShoppingBagPlus
              size={18}
              stroke={1.5}
              className="text-primary group-hover:text-white"
            />
            Purchase Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Shariful;
