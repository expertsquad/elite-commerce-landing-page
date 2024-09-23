import BestPriceIcon from "@/assets/icons/BestPriceIcon";
import EasyToUseIcon from "@/assets/icons/EasyToUseIcon";
import HighPerformanceIcon from "@/assets/icons/HighPerformanceIcon";
import PremiumIcon from "@/assets/icons/PremiumIcon";
import SupportIcon from "@/assets/icons/SupportIcon";
import UniqueDesignIcon from "@/assets/icons/UniqueDesignIcon";
import React from "react";

const TopFeatureCard = ({
  className,
  data,
}: {
  className?: string;
  data: any;
}) => {
  return (
    <div
      className={`md:max-w-[350px] max-w-[250px] border border-black-10 w-full md:h-[300px] h-[250px]   p-[clamp(10px,2.5vw,20px)] flex items-center justify-center rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl ${
        data?.title === "Premium Features"
          ? "bg-gradient-primary"
          : data?.title === "High-Performance"
          ? "bg-gradient-primary-light"
          : data?.title === "Easy to Use"
          ? "bg-violet-light"
          : data?.title === "Unique Design"
          ? "bg-blue-light"
          : data?.title === "Dedicated Support"
          ? "bg-danger-light"
          : data?.title === "Best of Price"
          ? "bg-yellow-light"
          : ""
      } `}
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className={`bg-white rounded-full p-4  border ${
            data?.title === "Premium Features"
              ? "border-primary"
              : data?.title === "High-Performance"
              ? "border-primary"
              : data?.title === "Easy to Use"
              ? "border-violet"
              : data?.title === "Unique Design"
              ? "border-blue"
              : data?.title === "Dedicated Support"
              ? "border-danger"
              : data?.title === "Best of Price"
              ? "border-yellow"
              : ""
          } flex items-center justify-center w-auto `}
        >
          {data?.title === "Premium Features" ? (
            <PremiumIcon />
          ) : data?.title === "High-Performance" ? (
            <HighPerformanceIcon />
          ) : data?.title === "Easy to Use" ? (
            <EasyToUseIcon />
          ) : data?.title === "Unique Design" ? (
            <UniqueDesignIcon />
          ) : data?.title === "Dedicated Support" ? (
            <SupportIcon />
          ) : data?.title === "Best of Price" ? (
            <BestPriceIcon />
          ) : null}
        </div>
        <div
          className={`text-center flex flex-col gap-[clamp(8px,2.5vh,12px)] `}
        >
          <span
            className={`font-semibold [font-size:_clamp(14px,2.5vw,20px)] ${
              data?.title === "Premium Features"
                ? "text-white"
                : "text-black-80"
            }`}
          >
            {data?.title}
          </span>
          <p
            className={`font-medium [font-size:_clamp(12px,2.5vw,14px)] ${
              data?.title === "Premium Features"
                ? "text-white"
                : "text-black-70"
            }`}
          >
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFeatureCard;
