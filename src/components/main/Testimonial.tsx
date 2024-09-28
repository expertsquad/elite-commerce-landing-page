"use client";
import React from "react";
import TestimonialCarousel from "../ui/TestimonialCarousel";
import Image from "next/image";
import testimonialBtnBG from "@/assets/images/testimonialBtnBg.svg";
import { useMultipleVisibleSection } from "../Shared/useMultipleVisibleSection";
const Testimonial = () => {
  const sectionCount = 1; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <section
      ref={(el) => {
        sectionRefs.current[14] = el; // Assign to ref
      }}
      className={`relative duration-500 md:duration-1000 transition-transform   ease-in-out ${
        visibleSections[14]
          ? "opacity-100 translate-y-0"
          : " opacity-0  translate-y-[40px]"
      }`}
    >
      <div className="h-[150px] w-[150px] bg-primary blur-[230px] absolute top-0 left-0"></div>
      <div className="main-container">
        {/* section heading and description */}
        <div className=" flext items-center justify-center gap-7 text-center">
          <div className="h-[40px] w-[160px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2">
            <span className="z-20  absolute text-sm text-white pl-2 ">
              Testimonial
            </span>
            <Image
              src={testimonialBtnBG}
              alt="Testimonial Button Background"
              fill
              className="object-cover top-0 left-0 w-full h-full"
            />
          </div>
          <h2 className="[font-size:clamp(20px,3.5vw,30px)] font-bold text-center my-3">
            Our Customer Say About Our{" "}
            <span className="text-primary">product</span>
          </h2>
          <p>
            Choose us for dedicated customer support, regular updates and
            extended documentation.
          </p>
        </div>
        <div>
          <TestimonialCarousel />
        </div>
      </div>
      <div className="h-[180px] w-[180px] bg-primary blur-[230px] absolute bottom-0 right-0   "></div>
    </section>
  );
};

export default Testimonial;
