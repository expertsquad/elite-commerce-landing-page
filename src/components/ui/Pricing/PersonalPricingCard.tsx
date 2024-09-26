"use client";
import IconShoppingBag from "@/assets/icons/IconShoppingBag";
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
      className={`border border-black-10 rounded-[20px] p-[clamp(20px,2.5vw,30px)] flex justify-between flex-col  w-[310px] h-[580px] transition-transform duration-700 ease-in-out delay-200 bg-white -z-1
      ${
        visibleSection === 2
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[300px]  "
      }`}
    >
      <div className="space-y-[clamp(15px,2.5vw,20px)]">
        <div className="flex gap-2 items-end">
          <span className="font-bold [font-size:_clamp(30px,2.5vw,45px)]">
            $50
          </span>
          <span className="text-black-70 line-through [font-size:_clamp(15px,2.5vw,20px)]">
            $60
          </span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)] ">
          <div className="space-y-2.5">
            <h1 className="font-semibold [font-size:_clamp(20px,2.5vw,27px)]">
              Personal
            </h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)] text-black-70">
              For most businesses that want to otpimize web queries
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Customer Panel</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Mega Menu</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Quick View</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Quick Order</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Live Message</span>
          </div>
        </div>
      </div>

      <Button
        mainClass="font-medium  text-white bg-gradient-primary py-2"
        stripHoverEffect={true}
        iconOne={<IconArrowRight stroke={2} />}
        iconTwo={<IconArrowRight stroke={2} />}
        animatationOne={true}
        animatationOneClass="bg-gradient-secondary"
        animationSevenClass="bg-gradient-secondary"
        buttonText="Purchase Now"
        buttonTextClass="text-white text-[clamp(12px,3vw,16px)]"
      />
    </div>
  );
};

export default PersonalPricingCard;
