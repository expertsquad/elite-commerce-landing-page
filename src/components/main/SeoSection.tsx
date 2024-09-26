"use client";
import Image from "next/image";
import seoImg from "@/assets/images/seo.svg";
import SeoCollapsibleItem from "../ui/SeoCollapsibleItem";
import { useMultipleVisibleSection } from "../Shared/useMultipleVisibleSection";

const SeoSection = () => {
  const sectionCount = 2; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  return (
    <section
      ref={(el) => {
        sectionRefs.current[13] = el; // Assign to ref
      }}
      className={`relative duration-500 md:duration-1000 transition-transform  ease-in-out ${
        visibleSections[13]
          ? "opacity-100 translate-y-0"
          : " opacity-0  translate-y-[40px]"
      }`}
    >
      {/* blur ball */}
      <div className="h-[180px] w-[180px] bg-primary blur-[230px] absolute top-0 left-0"></div>
      <div className="main-container flex items-center md:justify-start justify-center flex-col-reverse lg:gap-12 md:gap-6 gap-10 md:flex-row">
        {/* left div */}
        <div className="lg:w-5/12 md:w-1/2 w-full h-[500px]">
          <h2 className="[font-size:clamp(20px,4.5vw,30px)] font-bold text-start py-5">
            Optimum Online Impact with Precision{" "}
            <span className="text-primary">SEO</span>
          </h2>
          <SeoCollapsibleItem />
        </div>
        {/* right div with wave animation */}
        <div className="">
          <Image
            alt="seo"
            src={seoImg}
            width={500}
            height={500}
            className="animate-wave"
          />
        </div>
      </div>
      {/* blur ball */}
      <div className="h-[180px] w-[180px] bg-primary blur-[230px] absolute bottom-0 right-0"></div>
    </section>
  );
};

export default SeoSection;
