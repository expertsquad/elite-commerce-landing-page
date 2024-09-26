"use client";
import videoHover from "@/assets/images/videosHover.png";
import Image from "next/image";
import chooseOne from "@/assets/images/chooseOne.png";
import chooseTwo from "@/assets/images/chooseTwo.png";
import exloresvg from "@/assets/images/exploresvg.svg";
import star from "@/assets/images/startSvg.svg";
import enjoyOne from "@/assets/images/enjoyThesvgOne.svg";
import enjoyTwo from "@/assets/images/enjoyThesvgTwo.svg";
import Button from "../Shared/Button";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useMultipleVisibleSection } from "../Shared/useMultipleVisibleSection";
const WhyChooseElite = () => {
  // const { visibleSection, sectionRefs } = useVisibleSection(100, 110);
  const sectionCount = 1; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <div className="main-container space-y-10" id="demo">
      {/* Header Section */}
      <div className="flex items-start md:items-center justify-between gap-6 flex-col md:flex-row">
        <div
          ref={(el) => {
            sectionRefs.current[3] = el; // Assign to ref
          }}
          className={`space-y-2 transition-transform duration-500 md:duration-700 ease-in-out ${
            visibleSections[3]
              ? "opacity-100 translate-x-0 "
              : "opacity-0 translate-x-[100%]  md:translate-x-[20px] " // Change to a fixed value if necessary
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            <div className=" w-[16px] h-[16px] md:w-[25px] md:h-[25px]  ">
              <Image
                src={star}
                alt="Hover Video Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-secondary italic text-[clamp(20px,3vw,32px)]">
              Why Choose Elite Commerce?
            </span>
          </div>
          <h4 className="text-[clamp(20px,3vw,32px)] text-black-80 font-semibold">
            Stand out From the Crowd <br /> With{" "}
            <span className="text-primary">Premium Features.</span>
          </h4>
        </div>
        <div
          className="relative"
          ref={(el) => {
            sectionRefs.current[4] = el; // Assign to ref
          }}
        >
          <div
            className={`absolute w-[40px] h-[38px] md:w-[58.7px] md:h-[49.92px] 
              transition-all duration-500 md:duration-700 ease-in-out
              ${
                visibleSections[4]
                  ? "translate-x-0 translate-y-0 rotate-[75deg] opacity-100 md:right-40 md:top-14" // Final position
                  : "-translate-y-20 translate-x-10 rotate-0 opacity-0 md:-right-5 md:-top-5" // Starting position with rotation
              }`}
          >
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
          <p
            className={`italic text-black-80 text-[clamp(17px,3vw,20px)] font-medium transition-transform duration-500 md:duration-700 ease-in-out ${
              visibleSections[3]
                ? "opacity-100 translate-x-0 "
                : "opacity-0 translate-x-[100%]  md:translate-x-[20px] " // Change to a fixed value if necessary
            }`}
          >
            Enjoy the Excusive Features That Make <br /> Building Your Pages A
            JoyFok Monents <br /> all is One Things,
          </p>
        </div>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-8 gap-5 h-auto md:h-[400px] overflow-hidden">
        {/* First Box */}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el; // Assign to ref
          }}
          className={`col-span-2 flex items-center justify-between flex-row md:flex-col border border-black-10 rounded-[10px] py-5 md:py-2 px-5 overflow-hidden transition-transform duration-500 md:duration-700 ease-in-out
      ${
        visibleSections[0]
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
          ref={(el) => {
            sectionRefs.current[1] = el; // Assign to ref
          }}
          className={`group/secondbox flex justify-between flex-col gap-2.5 md:gap-0.5 lg:gap-0.5 col-span-3 border border-black-10 rounded-[10px] overflow-hidden py-2.5 px-[15px] transition-transform duration-500 md:duration-700 ease-in-out ${
            visibleSections[1]
              ? "opacity-100 translate-x-0 "
              : "opacity-0 translate-x-[100%]  md:translate-x-[170px] " // Change to a fixed value if necessary
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="space-x-2">
            <span
              className="inline-block w-2 h-2 rounded-full  bg-[#D9D9D9] group-hover/secondbox:bg-[#D70101]"
              // style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] group-hover/secondbox:bg-[#FCC201]"
              // style={{ animationDelay: "0.5s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] group-hover/secondbox:bg-[#0DE37F]"
              // style={{ animationDelay: "1s" }}
            ></span>
          </div>
          <div className="overflow-hidden relative">
            <span className="group-hover/secondbox:absolute group-hover/secondbox:bottom-0 group-hover/secondbox:left-0 w-full h-[150px] group-hover/secondbox:bg-white/10 backdrop-blur-[2px] group-hover/secondbox:shadow-[2px] le"></span>

            <button className="absolute text-primary bg-white border border-primary rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5 hidden group-hover/secondbox:flex group-hover/secondbox:items-center group-hover/secondbox:justify-center group-hover/secondbox:gap-0.5 group-hover/secondbox:left-[40%] group-hover/secondbox:bottom-[40px] transition-all duration-300 ease-in-out hover:bg-gradient-secondary hover:text-white hover:border-none ">
              <IconArrowUpRight stroke={1} /> Demo
            </button>
            <div className="">
              <Image
                alt="Hover Video Icon"
                src={chooseOne}
                className=" w-full h-[295px] object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-[clamp(16px,3vw,12px)] font-semibold text-black-70">
              Elite Commerce
            </h5>
            <Button
              mainClass="font-medium  text-white bg-white border border-black-15 rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5"
              stripHoverEffect={true}
              animatationFour={true}
              animatationFourClass="bg-gradient-secondary group-hover/secondbox:bg-gradient-secondary"
              buttonText="Customer Panel"
              buttonTextClass="text-black-70 text-[clamp(12px,3vw,16px)] group-hover:text-white"
            />
          </div>
        </div>

        {/* Third Box */}
        <div
          ref={(el) => {
            sectionRefs.current[2] = el; // Assign to ref
          }}
          className={`group/thardbox flex justify-between flex-col gap-2 md:gap-0.5 col-span-3 border border-black-10 rounded-[10px] overflow-hidden py-2.5 px-[15px] transition-transform duration-500 md:duration-700 ease-in-out ${
            visibleSections[2]
              ? "opacity-100 m:translate-x-0 scale-100"
              : "opacity-0 scale-75 md:translate-x-[150px] lg:translate-x-[100%]" // Change to a fixed value if necessary
          }`}
          // style={{ transitionDelay: "0.3s" }}
        >
          <div className="space-x-2">
            <span
              className="inline-block w-2 h-2 rounded-full  bg-[#D9D9D9] group-hover/thardbox:bg-[#D70101]"
              // style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] group-hover/thardbox:bg-[#FCC201]"
              // style={{ animationDelay: "0.5s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#D9D9D9] group-hover/thardbox:bg-[#0DE37F]"
              // style={{ animationDelay: "1s" }}
            ></span>
          </div>
          <div className="overflow-hidden relative">
            <span className="group-hover/thardbox:absolute group-hover/thardbox:bottom-0 group-hover/thardbox:left-0 w-full h-[130px] group-hover/thardbox:bg-white/10 backdrop-blur-[2px] group-hover/thardbox:shadow-[2px]"></span>

            <button className=" relative text-secondary bg-white border border-secondary rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5 group-hover/thardbox:absolute hidden  group-hover/thardbox:left-[40%] group-hover/thardbox:bottom-[40px] transition-all duration-300 ease-in-out hover:bg-gradient-primary hover:text-white hover:border-none group-hover/thardbox:flex group-hover/thardbox:items-center group-hover/thardbox:gap-0.5">
              <IconArrowUpRight stroke={1} /> Demo
            </button>
            <div className="">
              <Image
                src={chooseTwo}
                alt="Hover Video Icon"
                className=" w-full h-[295px]  object-cover "
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-[clamp(16px,3vw,12px)] font-semibold text-black-70">
              Elite Commerce
            </h5>
            <Button
              mainClass="font-medium  text-white bg-white border border-black-15 rounded-full text-[clamp(15px,3vw,12px)] px-2.5 py-1.5"
              stripHoverEffect={true}
              animatationSix={true}
              animatationSixClass="bg-gradient-secondary group-hover/thardbox:bg-gradient-secondary"
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
