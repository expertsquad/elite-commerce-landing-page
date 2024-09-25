"use client";
import React from "react";
import Image from "next/image";
import sectionBg from "@/assets/images/sectionBgForResponsive.png";
import HighlightText from "../Shared/HighlightText";
import { showResponsiveData } from "@/constants/showResponsiveData";
import { useVisibleSection } from "../Shared/useVisibleSection";

const ShowResponsive = () => {
  const [selected, setSelected] = React.useState(showResponsiveData[0]);
  const [previousImage, setPreviousImage] = React.useState(selected?.image);
  const [visibleImage, setVisibleImage] = React.useState(true);
  const [transitioning, setTransitioning] = React.useState(false);
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  const handleMenuClick = (item: any) => {
    if (item?.title !== selected?.title && !transitioning) {
      setTransitioning(true);

      // Set the current image as the previous image
      setPreviousImage(selected?.image);

      // Delay the appearance of the new image to create a smooth transition
      setTimeout(() => {
        setSelected(item);
        setVisibleImage(false); // Hide previous image
      }, 300);

      // Show the new image after the transition period
      setTimeout(() => {
        setVisibleImage(true); // Show new image
        setTransitioning(false); // End transition
      }, 700);
    }
  };

  return (
    <section id="desktop-mobile-optimized" className="main-container my-10">
      <div className="space-y-[clamp(20px,2.5vw,30px)]">
        <div className="h-[30px] w-[300px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2">
          <span className="z-20 absolute text-sm text-white">
            Desktop Mobile Optimized
          </span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>
        <p className="text-center">
          <span className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Furthermore, The Elite Commerce is Mobile-friendly
          </span>{" "}
          <HighlightText className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Design
          </HighlightText>{" "}
        </p>
      </div>

      <div className="md:border md:border-black-10 rounded-[20px] px-[clamp(10px,2.5vw,30px)] py-[clamp(25px,2.5vw,40px)] md:bg-[#0CE47F0D] grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
        <div className="md:h-[510px] md:w-auto w-full md:overflow-y-auto overflow-x-auto scrollbar-x-remove flex md:flex-col flex-row gap-[clamp(10px,2.5vw,20px)] md:pr-4">
          {showResponsiveData?.map((item) => (
            <div
              onClick={() => handleMenuClick(item)}
              key={item?.id}
              className={`md:w-full min-w-[270px] rounded-[10px] border hover:border-primary group transition-all duration-300 px-[clamp(6px,2.5vw,20px)] py-[clamp(8px,2.5vw,16px)] bg-white cursor-pointer flex flex-col gap-[clamp(3px,2.5vw,10px)] ${
                selected?.title === item?.title
                  ? "border-primary"
                  : "md:border-white border-black-10"
              }`}
            >
              <span
                className={`font-medium [font-size:_clamp(16px,2.5vw,18px)] transition-all duration-300 ${
                  selected?.title === item?.title
                    ? "text-primary"
                    : "text-black-50 group-hover:text-primary"
                }`}
              >
                {item?.title}
              </span>
              <p
                className={`[font-size:_clamp(14px,2.5vw,16px)] transition-all duration-300 md:line-clamp-none line-clamp-3 ${
                  selected?.title === item?.title
                    ? "text-primary"
                    : "group-hover:text-primary text-black-50"
                }`}
              >
                {item?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="md:bg-transparent bg-[#0CE47F0D] md:border-none border border-black-10 rounded-[20px] md:rounded-none overflow-hidden">
          <div
            ref={(el) => {
              sectionRefs.current[41] = el;
            }}
            className={`relative w-full h-96 transition-transform duration-700 ease-in-out ${
              visibleSection === 41
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[300px]"
            }`}
          >
            {/* Previous Image (moves up) */}
            <div
              className={`absolute w-full h-full transition-transform duration-700  ease-in-out ${
                !visibleImage
                  ? "-translate-y-[100%] opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <Image
                key={previousImage as any}
                src={previousImage}
                alt="Previous"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>

            {/* Current Image (moves in from bottom) */}
            <div
              className={`absolute w-full h-full transition-transform duration-700  ease-in-out ${
                visibleImage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[100%] opacity-0"
              }`}
            >
              <Image
                key={selected?.image as any}
                src={selected?.image}
                alt={selected?.title}
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowResponsive;
