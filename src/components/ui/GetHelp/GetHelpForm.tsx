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
      <div className="bg-white md:w-[430px] w-[300px] md:h-[670px] h-min rounded-2xl p-[clamp(10px,2.5vw,20px)]   shadow-lg space-y-[clamp(15px,2.5vw,28px)]  ">
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
            Please Write Your Subject, Massage & Notify Your Email.
          </p>
        </div>
        <form className="space-y-4">
          <CustomGlobalInput
            type="text"
            label="Full Name*"
            placeholder="Enter Your Name"
            name="fullName"
          />
          <CustomGlobalInput
            type="email"
            label="Email*"
            placeholder="Enter Your Email"
            name="email"
          />
          <CustomGlobalInput
            type="text"
            label="Subject*"
            placeholder="write your subject"
            name="subject"
          />
          <CustomGlobalInput
            type="textarea"
            label="Your message*"
            placeholder="Type your message here"
            name="subject"
            className="max-h-20"
          />

          <Button
            mainClass="font-medium text-white border border-black-10 w-full py-2"
            stripHoverEffect={true}
            // animatationOne={true}
            // animatationFive
            animatationSix
            animatationSixClass="bg-gradient-primary"
            // animatationFiveClass="bg-gradient-secondary"
            // animatationOneClass="bg-gradient-secondary"
            // iconThreeTrue={true}
            // iconThree={<IconArrowUpRight stroke={1} />}
            iconThreeClass={`group-hover:rotate-45 transition-all duration-300 ease-in-out pl-1 text-black-50 group-hover:text-white`}
            buttonText="Send Message"
            buttonTextClass="text-black-50 text-[clamp(12px,3vw,16px)] group-hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default GetHelpForm;
