import Image from "next/image";
import React from "react";
import demo from "@/assets/images/mobileView/dashboardMenu.png";

const PrivacyPolicy = () => {
  return (
    <div className="main-container h-[calc(100vh-75px)] overflow-y-auto scrollbar-y-remove">
      <h1 className="text-center font-bold [font-size:_clamp(30px,2.5vw,50px)]">
        Privacy Policy Of Elite Commerce
      </h1>

      <div className="mt-10 flex items-center gap-5 overflow-x-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="relative w-[200px] h-[420px]">
              <Image
                src={demo}
                alt="Mobile View"
                className="w-full h-full top-0 left-0 object-contain"
              />
            </div>
            <span className="[font-size:_clamp(14px,2.5vw,18px)] text-black-80 font-semibold  ">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
