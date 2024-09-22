import React from "react";
import ring from "@/assets/images/ring.png";
import butterfly from "@/assets/images/butterfly.png";
import Image from "next/image";
import LoveIcon from "@/assets/icons/LoveIcon";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";

const BehindContainer = () => {
  return (
    <div className="absolute">
      <div className="bg-gradient-primary rounded-[20px] md:w-[430px] w-[300px]   md:h-[670px] h-[452px] inset-0 -rotate-6 relative ">
        <div className="absolute -top-12 -left-14 -z-1">
          <Image src={ring} alt="" width={130} height={130} />
        </div>
        <div className="absolute -top-[24px] -right-[80px] rotate-6 -z-10">
          <Image src={butterfly} alt="" width={130} height={130} />
        </div>
        <div className="absolute -left-12 top-48">
          <LoveIcon />
        </div>
        <div className="absolute -right-12 bottom-48">
          <SatisfiedEmoji />
        </div>
        <div className="absolute -bottom-[20px] -left-[90px] rotate-[200deg] -z-10">
          <Image src={butterfly} alt="" width={130} height={130} />
        </div>
        <div className="absolute -bottom-12 -right-14 -z-1">
          <Image src={ring} alt="" width={130} height={130} />
        </div>
      </div>
    </div>
  );
};

export default BehindContainer;
