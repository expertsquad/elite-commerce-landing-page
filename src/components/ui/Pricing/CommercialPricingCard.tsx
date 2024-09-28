"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import Image from "next/image";
import React from "react";
import purchase from "@/assets/images/purchase.svg";
import { IconArrowUpRight, IconShoppingBagPlus } from "@tabler/icons-react";
import WhiteCheckMarkIcon from "@/assets/icons/WhiteCheckMarkIcon";

const CommercialPricingCard = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  return (
    <div
      ref={(el) => {
        sectionRefs.current[8] = el;
      }}
      className={` border border-black-10 rounded-[20px] p-[clamp(20px,2.5vw,30px)] flex justify-between flex-col  w-[310px]  bg-white transition-transform ease-in-out duration-700 delay-200 ${
        visibleSection === 8
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[-300px]"
      }`}
    >
      <div className="space-y-[clamp(8px,2.5vw,10px)]">
        <div className="flex gap-2 items-center ">
          <span className="font-bold [font-size:_clamp(30px,2.5vw,45px)] text-black">
            $95
          </span>
          <span className=" line-through  [font-size:_clamp(15px,2.5vw,20px)] text-black-70">
            $100
          </span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)]  ">
          <div className="space-y-2.5">
            <h1 className="font-semibold [font-size:_clamp(20px,2.5vw,27px)]">
              Commercial
            </h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)] text-black-70">
              For most businesses that want to otpimize web queries
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Customer Panel</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">Mega Menu</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">Quick View</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">Quick Order</span>
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">Live Message</span>
          </div>
          <div className="bg-gradient-primary rounded-full flex items-center text-white justify-center py-0.5 px-4 w-min">
            Included
          </div>
          <div className="flex items-center gap-2.5 text-white">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className=" text-black-70 text-base">
              Commercial use permission
            </span>
          </div>
        </div>
      </div>

      <Button
        mainClass="font-medium mt-5 text-white border border-black-10 px-[10px] py-[5px] md:px-5 md:py-2 bg-gradient-primary"
        stripHoverEffect={true}
        animatationOne
        animatationOneClass="bg-gradient-secondary"
        iconFourTrue={true}
        iconFour={
          <div className="mr-1.5">
            <IconShoppingBagPlus stroke={1.5} size={18} />
          </div>
        }
        buttonText="Purchase Now"
        buttonTextClass="text-gradeint-primary text-[clamp(12px,2.5vw,16px)] group-hover:text-white"
      />
    </div>
  );
};

export default CommercialPricingCard;
