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
  console.log(selected);
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
      <div className="border border-black-10 rounded-[20px] md:px-[30px] py-10 bg-[#0CE47F0D] flex items-center gap-5 mt-10">
        <div className="h-[510px] overflow-y-auto space-y-5 flex-1 ">
          {showResponsiveData?.map((item) => (
            <div
              onClick={() => setSelected(item?.title)}
              key={item?.id}
              className={`rounded-[10px] border border-white hover:border-primary group transition-all duration-300 md:px-5 md:py-4 bg-white cursor-pointer flex flex-col gap-2.5 ${
                selected === item?.title ? "border-primary" : ""
              }`}
            >
              <span
                className={`   font-medium text-lg transition-all duration-300 ${
                  selected === item?.title
                    ? "text-primary"
                    : "text-black-50 group-hover:text-primary"
                }`}
              >
                {item?.title}
              </span>
              <p
                className={`text-base  transition-all duration-300 ${
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
        <div className="flex-1">
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
