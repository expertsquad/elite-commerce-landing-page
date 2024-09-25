import Image from "next/image";
import React from "react";
import primaryEllipse from "@/assets/images/primaryColorEllipse.svg";
import secondaryEllipse from "@/assets/images/secondaryEllipse.svg";
import highlight from "@/assets/images/Highlight_04.svg";
import highlight2 from "@/assets/images/Highlight_09.svg";
import arrow from "@/assets/images/arrowRight.svg";

const FeaturesCard = ({
  cardTitle,
  second,
  first,
  data,
  bottomHighlight,
  topHighlight,
}: {
  cardTitle?: string;
  second?: boolean;
  first?: boolean;
  data?: {
    description?: string;
    images?: any;
    title?: string;
    _id?: string;
  };
  bottomHighlight?: boolean;
  topHighlight?: boolean;
}) => {
  return (
    <div className="relative md:max-w-[260px] lg:max-w-[400px] max-w-[330px]">
      {bottomHighlight && (
        <div className="absolute lg:-bottom-10 lg:-left-5 md:-bottom-6 md:-left-3 -bottom-4 -left-1 ">
          <Image
            src={highlight}
            alt="highlight"
            className="lg:w-[70px] lg:h-[50px] md:w-[44px] md:h-[31px] w-[22px] h-[17px] animate-ping"
          />
        </div>
      )}
      {topHighlight && (
        <div className="absolute lg:-top-10 lg:-right-12 -top-4 -right-6 z-20">
          <Image
            src={highlight2}
            alt="highlight"
            className="lg:w-[135px] lg:h-[100px] w-[70px] h-[51px] animate-pulse"
          />
        </div>
      )}
      {first && (
        <div className="absolute -right-24 -top-6">
          <Image src={arrow} alt="arrow" className="w-[130px] h-[130px]" />
        </div>
      )}

      <div className="bg-white p-5  relative  shadow-sm rounded-[20px] overflow-hidden  flex flex-col gap-5">
        <div className="absolute -left-2 -top-2">
          <Image src={primaryEllipse} alt="primaryEllipse" />
        </div>
        <div className="absolute -right-2 -top-2">
          <Image src={secondaryEllipse} alt="primaryEllipse" />
        </div>
        <div className="relative   w-full h-[260px] rounded-md overflow-hidden">
          <Image
            src={second ? data?.images?.[0] : data?.images?.[1]}
            alt="feature-image"
            fill
            className="w-full h-full object-contain top-0 left-0"
          />
        </div>

        <div className="flex flex-col gap-3.5">
          <span className="font-semibold [font-size:_clamp(14px,2.5vw,16px)] text-black-70">
            {cardTitle}{" "}
            <span className="text-secondary italic underline cursor-pointer">
              {data?.title}
            </span>
          </span>
          <span className="text-black-50 [font-size:_clamp(12px,2.5vw,14px)] font-medium line-clamp-2">
            {second
              ? data?.description
              : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
