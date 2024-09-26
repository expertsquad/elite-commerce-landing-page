"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import Image from "next/image";
import React from "react";
import purchase from "@/assets/images/purchase.svg";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconShoppingBagPlus,
} from "@tabler/icons-react";

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
          <span className="font-bold [font-size:_clamp(30px,2.5vw,45px)]">
            $95
          </span>
          <span className=" line-through [font-size:_clamp(15px,2.5vw,20px)]">
            $100
          </span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)]  ">
          <div className="space-y-2.5">
            <h1 className="font-semibold [font-size:_clamp(20px,2.5vw,27px)]">
              Commercial
            </h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)]">
              For most businesses that want to otpimize web queries
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Customer Panel</span>
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
            <span className=" text-base">Mega Menu</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Quick View</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Quick Order</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Live Message</span>
          </div>
          <div className="bg-primary rounded-full flex items-center justify-center py-0.5 px-4 w-min">
            Included
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center">
              <PrimaryCheckMarkIcon />
            </div>
            <span className=" text-base">Commercial use permission</span>
          </div>
        </div>
      </div>
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
  );
};

export default CommercialPricingCard;
