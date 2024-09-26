import Image from "next/image";
import React from "react";
import HighlightText from "../Shared/HighlightText";
import sectionBg from "@/assets/images/sectionBgforPricing.png";
import PersonalPricingCard from "../ui/Pricing/PersonalPricingCard";
import CommercialPricingCard from "../ui/Pricing/CommercialPricingCard";

const PricingTable = () => {
  return (
    <section id="pricing" className="main-container py-10 overflow-hidden">
      <div className="space-y-[clamp(20px,2.5vw,30px)]">
        <div className="h-[30px] w-[115px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2">
          <span className="z-20  absolute text-sm text-white">Pricing</span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>
        <p className="text-center  ">
          <span className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Elite Commerce{" "}
          </span>
          <HighlightText className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Pricing
          </HighlightText>{" "}
          <span className="text-secondary italic [font-size:_clamp(12px,2.5vw,20px)]">
            (Life Time Deals)
          </span>
        </p>
        <p className="text-center text-black-70 [font-size:_clamp(12px,2.5vw,18px)] font-medium">
          Choose the right package that fits your E-Commerce business and dive
          into the action right now. personal and Commercial packages Enjoy!
        </p>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:items-end items-center md:gap-0 gap-5 justify-center ">
        <PersonalPricingCard />
        <CommercialPricingCard />
      </div>
    </section>
  );
};

export default PricingTable;
