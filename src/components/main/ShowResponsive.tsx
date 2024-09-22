"use client";
import Image from "next/image";
import React from "react";
import sectionBg from "@/assets/images/sectionBgForResponsive.png";
import HighlightText from "../Shared/HighlightText";
import { showResponsiveData } from "@/constants/showResponsiveData";
import homepage from "@/assets/images/homepage.png";
import dashboard from "@/assets/images/dashboard.png";
import productView from "@/assets/images/productView.png";
import posOrder from "@/assets/images/posOrder.png";
import quickOrder from "@/assets/images/quickOrder.png";

const ShowResponsive = () => {
  const [selected, setSelected] = React.useState("Home Page");

  return (
    <div className="main-container my-10">
      <div className="space-y-[clamp(20px,2.5vw,30px)]">
        <div className="h-[30px] w-[300px] relative rounded-l-full overflow-hidden mx-auto flex items-center justify-start pl-2">
          <span className="z-20  absolute text-sm text-white">
            Desktop Mobile Optimized
          </span>
          <Image
            src={sectionBg}
            alt=""
            fill
            className="object-cover top-0 left-0 w-full h-full"
          />
        </div>
        <p className="text-center  ">
          <span className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Furthermore, Elite Commerce is the Mobile-first
          </span>{" "}
          <HighlightText className="font-bold [font-size:_clamp(18px,2.5vw,40px)]">
            Design
          </HighlightText>{" "}
        </p>
      </div>
      <div className="md:border md:border-black-10 rounded-[20px] px-[clamp(10px,2.5vw,30px)] py-[clamp(25px,2.5vw,40px)] md:bg-[#0CE47F0D] grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
        <div className="md:h-[510px] md:w-auto w-full md:overflow-y-auto overflow-x-auto scrollbar-x-remove   flex md:flex-col flex-row gap-[clamp(10px,2.5vw,20px)]  ">
          {showResponsiveData?.map((item) => (
            <div
              onClick={() => setSelected(item?.title)}
              key={item?.id}
              className={`md:w-full min-w-[270px] rounded-[10px] border  hover:border-primary group transition-all duration-300 px-[clamp(6px,2.5vw,20px)] py-[clamp(8px,2.5vw,16px)] bg-white cursor-pointer flex flex-col gap-[clamp(3px,2.5vw,10px)] ${
                selected === item?.title
                  ? "border-primary"
                  : "md:border-white border-black-10"
              }`}
            >
              <span
                className={`   font-medium [font-size:_clamp(16px,2.5vw,18px)] transition-all duration-300 ${
                  selected === item?.title
                    ? "text-primary"
                    : "text-black-50 group-hover:text-primary"
                }`}
              >
                {item?.title}
              </span>
              <p
                className={`[font-size:_clamp(14px,2.5vw,16px)] transition-all duration-300 md:line-clamp-none line-clamp-3 ${
                  selected === item?.title
                    ? "text-primary"
                    : "group-hover:text-primary text-black-50"
                }`}
              >
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:bg-transparent bg-[#0CE47F0D] md:border-none border border-black-10 rounded-[20px] md:rounded-none ">
          <div className="relative w-full h-96 ">
            {selected === "Home Page" ? (
              <Image
                src={homepage}
                alt="Home Page design"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            ) : selected === "Dashboard" ? (
              <Image
                src={dashboard}
                alt="Dashboard Page design"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            ) : selected === "Product View" ? (
              <Image
                src={productView}
                alt="Product View Page design"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            ) : selected === "Pos Order" ? (
              <Image
                src={posOrder}
                alt="Pos Order Page design"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            ) : selected === "Quick Order" ? (
              <Image
                src={quickOrder}
                alt="Quick Page design"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowResponsive;
