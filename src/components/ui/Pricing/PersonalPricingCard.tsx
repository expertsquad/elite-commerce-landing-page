import IconShoppingBag from "@/assets/icons/IconShoppingBag";
import WhiteCheckMarkIcon from "@/assets/icons/WhiteCheckMarkIcon";
import React from "react";

const PersonalPricingCard = () => {
  return (
    <div className="border border-black-10 rounded-[20px] p-[clamp(20px,2.5vw,30px)] flex justify-between flex-col  w-[310px] h-[580px]">
      <div className="space-y-[clamp(15px,2.5vw,20px)]">
        <div className="flex gap-2 items-end">
          <span className="font-bold text-3xl">$50</span>
          <span className="text-black-70 line-through">$60</span>
        </div>
        <div className="space-y-[clamp(15px,2.5vw,20px)] ">
          <div className="space-y-2.5">
            <h1 className="font-bold text-3xl">Personal</h1>
            <p className="[font-size:_clamp(12px,2.5vw,15px)] text-black-70">
              For most businesses that want to otpimize web queries
            </p>
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
            <span className="text-black-70 text-base">Store Panel</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Customer App</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Web app</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="rounded-full w-[18px] h-[18px] bg-gradient-primary flex items-center justify-center">
              <WhiteCheckMarkIcon />
            </div>
            <span className="text-black-70 text-base">Landing Page</span>
          </div>
        </div>
      </div>
      <button className=" outline-none hover:scale-105 transition-all duration-300 hover:bg-gradient-primary-reverse flex items-center justify-center gap-1.5 bg-gradient-primary rounded-full py-1.5 px-10 text-white text-base">
        <IconShoppingBag />
        Purchase Now
      </button>
    </div>
  );
};

export default PersonalPricingCard;
