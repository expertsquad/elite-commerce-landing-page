import HighlightText from "@/components/Shared/HighlightText";
import { customerPanelFeatures } from "@/constants/featuresData";
import React from "react";
import FeaturesMenuItem from "./FeaturesMenuItem";
import Image from "next/image";
import FeaturesCard from "./FeaturesCard";

const CustomerPanel = () => {
  const [activeFeature, setActiveFeature] = React.useState(
    customerPanelFeatures[0]
  );

  return (
    <div className="grid lg:grid-cols-[350px_auto] md:grid-cols-[250px_auto] grid-cols-1 gap-5">
      <div className="bg-gradient-primary-light p-5 border border-black-10 rounded-[10px]">
        <div className="space-y-8">
          <HighlightText className="font-semibold text-base">
            All Feature
          </HighlightText>
          <div className="flex md:flex-col flex-row gap-3.5 overflow-x-auto ">
            {customerPanelFeatures?.map((feature) => (
              <FeaturesMenuItem
                className={`${
                  activeFeature?.title === feature?.title
                    ? "bg-gradient-primary text-white"
                    : "bg-[#119F5B0D] text-black-80 "
                } md:whitespace-normal whitespace-nowrap`}
                onClick={() => setActiveFeature(feature)}
                key={feature?._id}
                title={feature?.title}
                icon={""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border border-black-10 rounded-[10px] p-8 flex  gap-10 md:flex-row flex-col ">
        <div>
          <FeaturesCard
            cardTitle="Minimal Design Content For"
            data={activeFeature}
            bottomHighlight
          />
        </div>
        <div className="md:mt-24">
          <FeaturesCard cardTitle="" second data={activeFeature} topHighlight />
        </div>
      </div>
    </div>
  );
};

export default CustomerPanel;
