import React, { useEffect, useState } from "react";
import HighlightText from "@/components/Shared/HighlightText";
import { adminPanelFeatures } from "@/constants/featuresData";
import FeaturesMenuItem from "./FeaturesMenuItem";
import FeaturesCard from "./FeaturesCard";

const AdminPanel = () => {
  const [activeFeature, setActiveFeature] = useState(adminPanelFeatures[0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === adminPanelFeatures.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);
  useEffect(() => {
    setActiveFeature(adminPanelFeatures[currentIndex]);
  }, [currentIndex]);

  const handleMenuItemClick = (index: number) => {
    setCurrentIndex(index);
    setActiveFeature(adminPanelFeatures[index]);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid md:grid-cols-3  grid-cols-1 md:gap-5"
    >
      <div className="md:bg-[#0CE47F0D] p-5 md:border border-black-10 rounded-[10px]">
        <div className="space-y-8 md:text-start text-center">
          <HighlightText className="font-semibold text-base ">
            All Feature
          </HighlightText>
          <div className="flex md:flex-col flex-row gap-3.5 overflow-x-auto scrollbar-x-remove">
            {adminPanelFeatures?.map((feature, index) => (
              <FeaturesMenuItem
                className={`${
                  activeFeature?.title === feature?.title
                    ? "bg-gradient-primary text-white"
                    : "bg-[#119F5B0D] text-black-80"
                } md:whitespace-normal whitespace-nowrap`}
                onClick={() => handleMenuItemClick(index)}
                key={feature?._id}
                title={feature?.title}
                icon={""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border border-black-10 rounded-[10px] p-[clamp(16px,2.5vw,32px)] flex gap-[clamp(20px,2.5vw,40px)] md:flex-row flex-col md:justify-normal md:items-start justify-center items-center bg-[#0CE47F0D] col-span-2">
        <div>
          <FeaturesCard
            first
            cardTitle="Minimal Design Content For"
            data={activeFeature}
            bottomHighlight
          />
        </div>
        <div className="md:mt-24">
          <FeaturesCard
            cardTitle="Dead Simple"
            second
            data={activeFeature}
            topHighlight
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
