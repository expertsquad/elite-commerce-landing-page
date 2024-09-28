"use client";
import React, { useState } from "react";
import CustomerPanel from "./CustomerPanel";
import AdminPanel from "./AdminPanel";
import Button3d from "@/components/Shared/Button3d";
import { useMultipleVisibleSection } from "@/components/Shared/useMultipleVisibleSection";

const ShowFeatures = () => {
  const sectionCount = 1; // Adjust based on the number of sections
  const { visibleSections, sectionRefs } =
    useMultipleVisibleSection(sectionCount);
  const [showFeature, setShowFeture] = useState("Customer Panel");
  const customerPanelBtnClass =
    showFeature === "Customer Panel" && "bg-gradient-primary text-white";
  const adminPanelBtnClass =
    showFeature === "Admin Panel" && "bg-gradient-primary text-white";
  return (
    <div
      ref={(el) => {
        sectionRefs.current[7] = el; // Assign to ref
      }}
      className={`space-y-10 transition-transform duration-500 md:duration-1000 ease-in-out ${
        visibleSections[7]
          ? "opacity-100 translate-y-2"
          : " opacity-10  translate-y-[40px]"
      }`}
    >
      <div className="flex items-center justify-center gap-5">
        <div onClick={() => setShowFeture("Customer Panel")}>
          <Button3d
            button3dMainClass="perspective-180"
            buttonText="Customer Panel"
            showHoverText
            background3dclass={`rotate-y-20  bg-white border group-hover:border-primary group-hover:rotate-y-23 rounded-[5px] shadow-2xl border-transparent border-primary shadow-button-shadow`}
            textClasss={`text-black-80 group-hover:text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px] whitespace-nowrap ${customerPanelBtnClass}`}
            mainButtonDiv={`rotate-y-23 group-hover:rotate-y-23 rounded-[5px] !bg-white group-hover:bg-gradient-primary ${customerPanelBtnClass}`}
          />
        </div>
        <div onClick={() => setShowFeture("Admin Panel")}>
          <Button3d
            button3dMainClass="perspective-180"
            buttonText="Admin Panel"
            showHoverText={true}
            background3dclass={`rotate-y-24  bg-white border group-hover:border-primary shadow-2xl border-transparent border-primary shadow-button-shadow group-hover:rotate-y-25 rounded-[5px]`}
            textClasss={`text-black-80 group-hover:text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px] whitespace-nowrap ${adminPanelBtnClass}`}
            mainButtonDiv={`rotate-y-25 group-hover:rotate-y-25 rounded-[5px] !bg-white group-hover:bg-gradient-primary ${adminPanelBtnClass}`}
          />
        </div>
      </div>
      {showFeature === "Customer Panel" ? (
        <CustomerPanel />
      ) : showFeature === "Admin Panel" ? (
        <AdminPanel />
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowFeatures;
