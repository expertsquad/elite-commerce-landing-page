"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import Image from "next/image";
import React from "react";
import purchase from "@/assets/images/purchase.svg";
import { IconArrowUpRight, IconShoppingBagPlus } from "@tabler/icons-react";

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

      <Button
        mainClass="font-medium text-white bg-white border  px-5 py-2 mt-3
        "
        stripHoverEffect={true}
        animatationOne={true}
        animatationOneClass="bg-gradient-primary"
        iconThreeTrue={true}
        iconThree={<IconShoppingBagPlus stroke={1} />}
        iconThreeClass={` transition-all duration-300 ease-in-out pl-1 text-black-50 group-hover:text-white`}
        buttonText="Purchase Now"
        buttonTextClass="text-black-50 text-[clamp(12px,3vw,16px)] group-hover:text-white"
      />
    </div>
  );
};

export default CommercialPricingCard;
