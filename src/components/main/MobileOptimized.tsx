import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBgMobileOptimized.png";
import MobileView from "../ui/MobileView/MobileView";

const MobileOptimized = () => {
  return (
    <div className="main-container space-y-[clamp(20px,2.5vw,50px)] my-10">
      <div className="space-y-[clamp(20px,2.5vw,30px)] items-center flex flex-col">
        <div className="h-[40px] w-[220px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-4">
          <span className="z-20  absolute text-sm text-white">
            Mobile Optimized
          </span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>

        <span className="font-semibold [font-size:_clamp(18px,2.5vw,30px)] text-center">
          Elite Commerce Customer Panel & Admin Panel Design .
        </span>
      </div>
      <div>
        <MobileView />
      </div>
    </div>
  );
};

export default MobileOptimized;
