import LoveIcon from "@/assets/icons/LoveIcon";
import SatisfiedEmoji from "@/assets/icons/SatisfiedEmoji";
import Button from "@/components/Shared/Button";
import CustomGlobalInput from "@/components/Shared/CustomGlobalInput";
import HighlightText from "@/components/Shared/HighlightText";
import Image from "next/image";
import React from "react";
import ring from "@/assets/images/ring.png";
import butterfly from "@/assets/images/butterfly.png";

const GetHelpForm = () => {
  return (
    <div className="z-50 relative">
      <div className="bg-white md:w-[430px] w-[300px] md:h-[670px] h-min rounded-2xl p-[clamp(10px,2.5vw,20px)]   shadow-lg space-y-[clamp(15px,2.5vw,28px)]  ">
        <div className="absolute lg:-top-5 md:-top-2 md:-left-20 lg:-left-20 -left-10 -top-0 -z-1">
          <Image
            src={ring}
            alt=""
            className="w-[57px] h-[38px] md:w-[100px] md:h-[69px]  lg:w-[134px] lg:h-[87px] "
          />
        </div>
        <div className="absolute lg:-top-[60px] -top-10 -right-8 rotate-[20deg] lg:-right-[60px] md:-top-[50px] md:-right-[70px] lg:rotate-[30deg] md:rotate-[20deg]   -z-10">
          <Image
            src={butterfly}
            alt=""
            className="w-[66px] h-[48px] md:w-[114px] md:h-[84px] lg:w-[135px] lg:h-[100px]"
          />
        </div>
        <div className="absolute md:-left-16 -left-12 top-48">
          <LoveIcon />
        </div>
        <div className="absolute md:-right-16 -right-12 bottom-48">
          <SatisfiedEmoji />
        </div>
        <div className="absolute lg:-bottom-[40px] lg:-left-[70px] md:-left-[50px] md:-bottom-8 -left-8 -bottom-4 rotate-[200deg] -z-10">
          <Image
            src={butterfly}
            alt=""
            className="w-[66px] h-[48px] md:w-[114px] md:h-[84px] lg:w-[135px] lg:h-[100px]"
          />
        </div>
        <div className="absolute lg:-bottom-8 lg:-right-20 md:-right-16 -bottom-3 -right-8 md:-bottom-5 -z-1">
          <Image
            src={ring}
            alt=""
            className="w-[57px] h-[38px] md:w-[100px] md:h-[69px]  lg:w-[134px] lg:h-[87px] "
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
          />
          <Button className="outline-none hover:scale-105 transition-all duration-300 hover:bg-gradient-primary-reverse flex items-center justify-center gap-1.5 bg-gradient-primary rounded-full py-3.5 px-10 text-white text-base w-full ">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetHelpForm;
