import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBgMobileOptimized.png";
import MobileView from "../ui/MobileView/MobileView";
import BehindContainer from "../ui/GetHelp/BehindContainer";
import GetHelpForm from "../ui/GetHelp/GetHelpForm";

const MobileOptimized = () => {
  return (
    <div className="main-container flex flex-col gap-20  my-10 ">
      <div className="flex flex-col gap-10">
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
      <div className="get-help flex items-center justify-center relative ">
        <BehindContainer />
        <GetHelpForm />
      </div>
    </div>
  );
};

export default MobileOptimized;
