"use client";
import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBg.png";
import HighlightText from "../Shared/HighlightText";
import SMSGatewayAndMailConfig from "../ui/Technolog/SMSGatewayAndMailConfig";
import PaymentGateways from "../ui/Technolog/PaymentGateways";
import TechnologiesAndPlatforms from "../ui/Technolog/TechnologiesAndPlatforms";
import CustomEllipse from "../Shared/CustomEllipse";
import { useMultipleVisibleSection } from "../Shared/useMultipleVisibleSection";

const Technology = () => {
  const sectionCount = 2; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <section
      ref={(el) => {
        sectionRefs.current[11] = el; // Assign to ref
      }}
      id="technology"
      className={`relative duration-500 md:duration-1000 transition-transform   ease-in-out ${
        visibleSections[11]
          ? "opacity-100 translate-y-0"
          : " opacity-0  translate-y-[40px]"
      }`}
    >
      <CustomEllipse className="absolute top-[50%] left-0  bg-gradient-primary md:block hidden" />
      <CustomEllipse className="absolute top-[50%] right-0  bg-gradient-primary md:block hidden" />
      <div className="main-container my-10">
        <div className="space-y-[clamp(20px,2.5vw,30px)]">
          <div className="flex flex-col gap-[clamp(15px,2.5vw,30px)]">
            <div className="h-[40px] w-[230px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-3">
              <span className="z-50  absolute text-sm text-white">
                Technology Gateway
              </span>
              <Image
                src={sectionBg}
                alt="Section Background"
                fill
                className="object-cover top-0 left-0 w-full h-full"
              />
            </div>
          </div>
          <p className="text-center font-semibold [font-size:_clamp(20px,2.5vw,30px)]">
            Elite Commerce Scripts For{" "}
            <HighlightText>Cross-Platform</HighlightText> Excellence
          </p>
        </div>
        <div className="space-y-10 mt-10 ">
          <TechnologiesAndPlatforms />
          <PaymentGateways />
        </div>
      </div>
    </section>
  );
};

export default Technology;
