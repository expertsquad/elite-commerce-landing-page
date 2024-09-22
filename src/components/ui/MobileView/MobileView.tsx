import Image from "next/image";
import React from "react";
import demo from "@/assets/images/mobileView/dashboardMenu.png";
import { mobileOptimizedData } from "@/constants/mobileOptimizedData";

const MobileView = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 md:gap-5 gap-3.5">
      {mobileOptimizedData?.map((data) => (
        <div key={data?.id} className="flex flex-col items-center  gap-3">
          <div className="relative w-[200px] h-[420px]">
            <Image
              src={data?.image}
              alt="Mobile View"
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
          <span className="[font-size:_clamp(14px,2.5vw,18px)] text-black-80 font-semibold  ">
            {data?.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MobileView;
