"use client";
import React from "react";
import videoHover from "@/assets/images/videosHover.png";
import Image from "next/image";
import chooseOne from "@/assets/images/chooseOne.png";
import chooseTwo from "@/assets/images/chooseTwo.png";
import exloresvg from "@/assets/images/exploresvg.svg";
import star from "@/assets/images/startSvg.svg";
import enjoyOne from "@/assets/images/enjoyThesvgOne.svg";
import enjoyTwo from "@/assets/images/enjoyThesvgTwo.svg";
import { useVisibleSection } from "../Shared/useVisibleSection";
import Button from "../Shared/Button";
const WhyChooseElite = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  return (
    <div className="main-container space-y-10">
      {/* Header Section */}
      <div className="flex items-start md:items-center justify-between gap-6 flex-col md:flex-row">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute w-[14px] h-[14px] md:w-[20px] md:h-[20px] left-0">
              <Image
                src={star}
                alt="Hover Video Icon"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
            <span className="text-secondary italic text-[clamp(13px,3vw,15px)] pl-6">
              Why Choose Elite Commerce?
            </span>
          </div>
          <h4 className="text-[clamp(16px,3vw,10px)] text-black-80 font-semibold">
            Stand out From the Crowd <br /> With{" "}
            <span className="text-primary">Premium Features.</span>
          </h4>
        </div>
        <div className="relative">
          <div className="absolute w-[40px] h-[38px] md:w-[58.7px] md:h-[49.92px] -right-5 -top-5 md:-right-7 md:-top-6">
            <Image
              src={enjoyOne}
              alt="Hover Video Icon"
              fill
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
          <div className="absolute w-[22px] h-[23px] md:w-[28px] md:h-[30.5px] -left-4 md:-left-7 -top-3">
            <Image
              src={enjoyTwo}
              alt="Hover Video Icon"
              fill
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
          <p className="italic text-black-80 text-[clamp(13px,3vw,15px)] font-medium">
            Enjoy the Excusive Features That Make <br /> Building Your Pages A
            JoyFok Monents <br /> all is One Things,
          </p>
        </div>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4 h-auto md:h-[370px] overflow-hidden">
        {/* First Box */}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el; // Assign to ref
          }}
          className={` col-span-2 flex items-center justify-between flex-row md:flex-col border border-black-10 rounded-[10px] py-5 md:py-2 px-5 overflow-hidden transition-transform duration-700 ease-in-out
      ${
        visibleSection === 0
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[-100%]"
      }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="bg-[#0CE47F] absolute -right-1 w-[100px] h-[120px] filter blur-[120px] "></div>
          <div className="bg-[#FF1810] absolute -left-1 -bottom-1 w-[100px] h-[120px] filter blur-[120px] "></div>
          <div className="absolute w-[22px] h-[23px] md:w-[26px] md:h-[29px] left-20 top-4 md:left-28 md:top-1.5">
            <Image
              src={exloresvg}
              alt="Hover Video Icon"
              fill
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
          <div className="text-start w-full space-y-3 md:space-y-3.5">
            <h1 className="font-bold text-[clamp(16px,3vw,26px)] text-secondary pb-2">
              Explore
            </h1>

            <span className="text-[clamp(14px,3vw,17px)] text-black-70">
              Our High-Quality <br /> Demos
            </span>
          </div>
          <div className="relative w-20 h-20">
            <Image
              src={videoHover}
              alt="Hover Video Icon"
              fill
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
        </div>

        {/* Second Box */}
        <div
          className={`col-span-3 border border-black-10 rounded-[10px]  overflow-hidden py-2.5 px-[15px] space-y-3 transition-transform duration-700 ease-in-out   ${
            visibleSection === 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-100%]"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="space-x-2">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "0.5s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
          <div className="overflow-hidden">
            <div className="relative w-full md:w-96 h-64">
              <Image
                src={chooseOne}
                alt="Hover Video Icon"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-[clamp(16px,3vw,12px)] font-semibold text-black-70">
              Elite Commerce
            </h5>
            {/* <button className="px-2.5 py-1.5 border border-black-30 rounded-full text-[clamp(15px,3vw,12px)]">
              Customer Panel
            </button> */}
            <Button
              mainClass="font-medium  text-white bg-white border border-black-15 rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5"
              stripHoverEffect={true}
              // iconOne={<IconArrowRight stroke={2} />}
              // iconTwo={<IconArrowRight stroke={2} />}
              // animatationOne={true}
              // animatationOneClass="bg-gradient-secondary"
              // animatationTwo={true}
              // animatationTwoClass=" bg-gradient-secondary"
              // animatationThree={true}
              // animatationThreeClss="bg-gradient-primary"
              animatationFour={true}
              animatationFourClass="bg-gradient-secondary"
              // animatationFive={true}
              // animatationFiveClass="bg-gradient-secondary"
              // animatationSix={true}
              // animatationSixClass="bg-gradient-secondary"
              // animationSeven={true}
              // animationSevenClass="bg-gradient-secondary"
              buttonText="Customer Panel"
              buttonTextClass="text-black-70 text-[clamp(12px,3vw,16px)] group-hover:text-white"
            />
          </div>
        </div>

        {/* Third Box */}
        <div
          className={`col-span-3 border border-black-10 rounded-[10px] overflow-hidden py-2.5 px-[15px] space-y-3 transition-transform duration-700 ease-in-out ${
            visibleSection === 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 md:translate-x-[150px] lg:translate-x-[100%]" // Change to a fixed value if necessary
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="space-x-2">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "0.5s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] animate-pulseColor"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
          <div className="overflow-hidden">
            <div className="relative w-full md:w-96 h-64">
              <Image
                src={chooseTwo}
                alt="Hover Video Icon"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-[clamp(16px,3vw,12px)] font-semibold text-black-70">
              Elite Commerce
            </h5>
            {/* <button className="px-2.5 py-1.5 border border-black-30 rounded-full text-[clamp(15px,3vw,12px)]">
              Admin Panel
            </button> */}
            <Button
              mainClass="font-medium  text-white bg-white border border-black-15 rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5"
              stripHoverEffect={true}
              // iconOne={<IconArrowRight stroke={2} />}
              // iconTwo={<IconArrowRight stroke={2} />}
              // animatationOne={true}
              // animatationOneClass="bg-gradient-secondary"
              // animatationTwo={true}
              // animatationTwoClass=" bg-gradient-secondary"
              // animatationThree={true}
              // animatationThreeClss="bg-gradient-primary"
              // animatationFour={true}
              // animatationFourClass="bg-gradient-secondary"
              // animatationFive={true}
              // animatationFiveClass="bg-gradient-secondary"
              animatationSix={true}
              animatationSixClass="bg-gradient-secondary"
              // animationSeven={true}
              // animationSevenClass="bg-gradient-secondary"
              buttonText="Admin Panel"
              buttonTextClass="text-black-70 text-[clamp(12px,3vw,16px)] group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseElite;
