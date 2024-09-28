"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import PrimaryCheckMarkIcon from "@/assets/icons/PrimaryCheckMarkIcon";
import WhiteCheckMarkIcon from "@/assets/icons/WhiteCheckMarkIcon";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconShoppingBagPlus,
} from "@tabler/icons-react";
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

      <Button
        mainClass="font-medium mt-5 text-white px-[10px] py-[5px] md:px-5 md:py-2 bg-white"
        stripHoverEffect={true}
        animatationOne
        animatationOneClass="bg-gradient-secondary"
        iconFourTrue={true}
        iconFour={
          <div className="mr-1.5">
            <IconShoppingBagPlus
              stroke={1.5}
              size={18}
              className="text-primary group-hover:text-white"
            />
          </div>
        }
        buttonText="Purchase Now"
        buttonTextClass="text-primary text-[clamp(12px,2.5vw,16px)] group-hover:text-white"
      />
    </div>
  );
};

export default PersonalPricingCard;
