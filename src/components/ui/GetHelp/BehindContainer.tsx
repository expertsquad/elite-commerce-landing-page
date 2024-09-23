import React from "react";
import ring from "@/assets/images/ring.png";
import butterfly from "@/assets/images/butterfly.png";
import Image from "next/image";
import LoveIcon from "@/assets/icons/LoveIcon";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";

const BehindContainer = () => {
  return (
    <div className="absolute">
      <div className="bg-gradient-primary rounded-[20px] md:w-[430px] w-[300px]   md:h-[670px] h-[452px] inset-0 group-hover:rotate-0 transition-all duration-300 -rotate-6 relative "></div>
    </div>
  );
};

export default BehindContainer;
