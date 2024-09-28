"use client";
import LoveIcon from "@/assets/icons/LoveIcon";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";

import CustomGlobalInput from "@/components/Shared/CustomGlobalInput";
import HighlightText from "@/components/Shared/HighlightText";
import Image from "next/image";
import React from "react";
import ring from "@/assets/images/ring.png";
import butterfly from "@/assets/images/butterfly.png";
import Button from "@/components/Shared/Button";
import { useVisibleSection } from "@/components/Shared/useVisibleSection";
import { IconArrowUpRight } from "@tabler/icons-react";

const GetHelpForm = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[53] = el;
      }}
      className={`relative transition-transform duration-1000 delay-10 ease-in-out group/form ${
        visibleSection === 53 ? " opacity-100 scale-100" : " opacity-0 scale-0"
      }`}
    >
      <div className="bg-white shadow-get-help-form-shadow md:w-[430px] w-[300px] md:h-[670px] h-min rounded-2xl p-[clamp(15px,2.5vw,25px)]   shadow-lg space-y-[clamp(15px,2.5vw,28px)]  ">
        <div className="absolute lg:-top-5 md:-top-2 md:-left-20 lg:-left-20 -left-10 -top-0 -z-1 animate-[spin: 10s_linear_infinite]">
          <Image
            src={ring}
            alt=""
            className="w-[57px] h-[38px] md:w-[100px] md:h-[69px]  lg:w-[134px] lg:h-[87px] image-select-none group-hover/form:rotate-180 transition-all ease-in duration-300"
          />
        </div>
        <div className="absolute lg:-top-[60px] -top-10 -right-8 rotate-[20deg] lg:-right-[60px] md:-top-[50px] md:-right-[70px] lg:rotate-[30deg] md:rotate-[20deg] animate-pulse   -z-10">
          <Image
            src={butterfly}
            alt=""
            className="w-[66px] h-[48px] md:w-[114px] md:h-[84px] lg:w-[135px] lg:h-[100px] image-select-none"
          />
        </div>
        <div className="absolute md:-left-16 -left-12 top-10  group-hover/form:top-48 transition-all ease-in duration-300">
          <LoveIcon />
        </div>
        <div className="absolute md:-right-16 -right-12 bottom-10 group-hover/form:bottom-48 transition-all ease-in duration-300">
          <SatisfiedEmoji />
        </div>
        <div className="absolute animate-pulse lg:-bottom-[40px] lg:-left-[70px] md:-left-[50px] md:-bottom-8 -left-8 -bottom-4 rotate-[200deg] -z-10">
          <Image
            src={butterfly}
            alt=""
            className="w-[66px] h-[48px] md:w-[114px] md:h-[84px] lg:w-[135px] lg:h-[100px] image-select-none"
          />
        </div>
        <div className="absolute lg:-bottom-8 lg:-right-20 md:-right-16 -bottom-3 -right-8 md:-bottom-5 -z-1 group-hover/form:rotate-180 transition-all ease-in duration-300">
          <Image
            src={ring}
            alt=""
            className="w-[57px] h-[38px] md:w-[100px] md:h-[69px]  lg:w-[134px] lg:h-[87px] image-select-none"
          />
        </div>
        <div className="">
          <p className="text-black-70 font-medium [font-size:_clamp(11px,2.5vw,20px)]">
            <span className="font-bold [font-size:_clamp(20px,2.5vw,26px)] ">
              <HighlightText>Get Help?</HighlightText>
            </span>{" "}
            Please Write Your Subject, Message & Notify Your Email.
          </p>
        </div>
        <form className="md:space-y-[clamp(10px,2.5vh,16px)] space-y-[clamp(12px,2.5vw,16px)]">
          <CustomGlobalInput
            type="text"
            label="Full Name*"
            placeholder="Type Name"
            name="fullName"
          />
          <CustomGlobalInput
            type="email"
            label="Email*"
            placeholder="Type Your Email"
            name="email"
          />
          <CustomGlobalInput
            type="text"
            label="Subject*"
            placeholder="Type Here"
            name="subject"
          />
          <CustomGlobalInput
            type="textarea"
            label="Your message*"
            placeholder="Type Here"
            name="subject"
            className="max-h-20"
          />

          <div className="py-[clamp(15px,2.5vh,20px)] w-full">
            <button className="relative px-5 py-[10px] overflow-hidden font-medium  bg-white border border-black-10 rounded-full shadow-inner group w-full">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary-light group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary-light group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-primary group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-primary group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-primary opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-black-80 [font-size:_clamp(12px,2.5vw,14px)]">
                Send Message
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetHelpForm;
