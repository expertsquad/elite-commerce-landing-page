"use client";
import CursorHover from "@/components/Shared/CursorHover";
import HighlightText from "@/components/Shared/HighlightText";
import { paymentGatewayData } from "@/constants/paymentGatewayData";
import tooltip from "@/assets/images/tooltip.png";
import Image from "next/image";
import React from "react";

const PaymentGateways = () => {
  return (
    <div className="space-y-5 px-5 py-10 shadow-md rounded-[10px] ">
      <div className="text-center font-semibold [font-size:_clamp(14px,2.5vw,18px)]">
        <HighlightText>Payment Gateways</HighlightText>
      </div>
      <div className="flex items-center justify-center flex-wrap  ">
        {paymentGatewayData?.map((gate) => (
          <CursorHover
            hoverScale={6} // Adjust scale as per your design
            // cursorSize="w-20 h-20 -mt-10 -ml-10 " // Example size for the custom cursor
            customClass={` ${
              gate?.status === "inactive" && "px-5 w-[100px] h-[50px]"
            }  py-2 pointer-events-none !rounded-[5px] ${
              gate?.status === "inactive" && "bg-gradient-primary text-white"
            }`} // Custom style for the cursor
            customCursorContent={
              gate?.status === "inactive" && (
                <div className="text-sm flex items-center justify-center mt-1.5 whitespace-nowrap">
                  Coming Soon..
                </div>
              )
            }
          >
            <div
              key={gate?._id}
              // title={gate?.status === "inactive" ? "Coming Soon" : ""}
              className={`border border-black-10 flex flex-col gap-[clamp(4px,2.5vw,8px)] items-center justify-center  rounded-full md:w-[180px] md:h-[180px] w-[110px] h-[110px] cursor-pointer -ml-5 ${
                gate?.status === "active" &&
                "hover:bg-[#F8f8f8] transition-all ease-in duration-300"
              } ${gate?.status === "inactive" ? "opacity-25 " : ""}`}
            >
              <div className="relative md:w-[74px] md:h-[74px] w-[43px] h-[43px]">
                <Image
                  src={gate?.image}
                  alt="react"
                  className="w-full h-full top-0 left-0 object-contain image-select-none"
                />
              </div>
              <span className="[font-family:_Sansation] font-bold text-black-70 [font-size:_clamp(12px,2.5vw,18px)]">
                {gate?.name}
              </span>
            </div>
          </CursorHover>
        ))}
      </div>
    </div>
  );
};

export default PaymentGateways;
