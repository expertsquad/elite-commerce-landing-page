"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import WhiteCheckMarkIcon from "@/assets/icons/WhiteCheckMarkIcon";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import React from "react";

const PersonalPricingCard = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  return (
    <div
      ref={(el) => {
        sectionRefs.current[2] = el; // Assign to ref
      }}
      className={`md:-ml-5 border border-black-10 rounded-[20px] p-[clamp(20px,2.5vw,30px)] flex justify-between flex-col  w-[310px] h-[580px] transition-transform duration-700 ease-in-out delay-200 bg-gradient-primary 
      ${
        visibleSection === 2
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[300px]  "
      }`}
    >
      <div className="space-y-[clamp(8px,2.5vw,10px)] text-white">
        <div className="flex gap-2 items-center">
          <span className="font-bold [font-size:_clamp(30px,2.5vw,45px)]">
            $50
          </span>
          <span className=" line-through [font-size:_clamp(15px,2.5vw,20px)]">
            $60
          </span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)] ">
          <div className="space-y-2.5">
            <h1 className="font-semibold [font-size:_clamp(20px,2.5vw,27px)]">
              Personal
            </h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)] ">
              For most businesses that want to otpimize web queries
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Customer Panel</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Mega Menu</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Quick View</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Quick Order</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Live Message</span>
          </div>
        </div>
      </div>

      <button className="relative px-5 py-[10px] overflow-hidden font-medium  bg-white border border-black-10 rounded-full shadow-inner group w-full">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-secondary-light group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-secondary-light group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-secondary group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-secondary group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-secondary opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-black-80 font-medium [font-size:_clamp(12px,2.5vw,14px)]">
          Purchase Now
        </span>
      </button>
    </div>
  );
};

export default PersonalPricingCard;
