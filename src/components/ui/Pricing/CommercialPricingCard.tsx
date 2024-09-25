"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import WhiteCheckMarkIcon from "@/assets/icons/WhiteCheckMarkIcon";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import React from "react";

const CommercialPricingCard = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  return (
    <div
      ref={(el) => {
        sectionRefs.current[8] = el;
      }}
      className={`md:-ml-5 border border-black-10 rounded-[20px] p-[clamp(20px,2.5vw,30px)] flex justify-between flex-col  w-[310px]  bg-gradient-primary transition-transform ease-in-out duration-700 delay-200 ${
        visibleSection === 8
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[-300px]"
      }`}
    >
      <div className="space-y-[clamp(15px,2.5vw,20px)] text-white">
        <div className="flex gap-2 items-end ">
          <span className="font-bold text-3xl">$95</span>
          <span className=" line-through ">$100</span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)]  ">
          <div className="space-y-2.5">
            <h1 className="font-bold text-3xl">Commercial</h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)]">
              For most businesses that want to otpimize web queries
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Store Panel</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Customer App</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Web app</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Landing Page</span>
          </div>
          <div className="bg-primary rounded-full flex items-center justify-center py-0.5 px-4 w-min">
            Included
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Web app</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Landing Page</span>
          </div>
        </div>
      </div>
      <button className=" mt-5 outline-none hover:scale-105 transition-all duration-300  flex items-center justify-center gap-1.5 bg-white rounded-full py-1.5 px-10 text-primary text-base">
        <IconShoppingBag />
        Purchase Now
      </button>
    </div>
  );
};

export default CommercialPricingCard;
