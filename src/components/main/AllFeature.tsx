import React from "react";
import AllFeaturesBanner from "../ui/AllFeatures/AllFeaturesBanner";
import HighlightText from "../Shared/HighlightText";
import ShowFeatures from "../ui/AllFeatures/ShowFeatures";

const AllFeature = () => {
  return (
    <section className="main-container my-10 space-y-[70px]">
      <AllFeaturesBanner />
      <div className="space-y-10" id="features">
        <div className="flex flex-col gap-[clamp(10px,2.5vw,20px)]">
          <h1 className="text-center [font-size:_clamp(18px,2.5vw,30px)] font-semibold">
            Solution-wise Features of{" "}
            <HighlightText>Elite Commerce</HighlightText>
          </h1>
          <p className="text-center [font-size:_clamp(14px,2.5vw,16px)] text-black-70 ">
            Meet the dynamic features of{" "}
            <HighlightText className="font-semibold">
              Elite Commerce
            </HighlightText>{" "}
            that comes with Customer Panel, admin panel, and other solutions.
          </p>
        </div>
        <ShowFeatures />
      </div>
    </section>
  );
};

export default AllFeature;
