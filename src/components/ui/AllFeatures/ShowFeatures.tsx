"use client";
import React, { useState } from "react";
import CustomerPanel from "./CustomerPanel";
import AdminPanel from "./AdminPanel";
import Button3d from "@/components/Shared/Button3d";

const ShowFeatures = () => {
  const [showFeature, setShowFeture] = useState("Customer Panel");
  console.log(showFeature);
  const customerPanelBtnClass =
    showFeature === "Customer Panel" && "bg-gradient-primary text-white";
  const adminPanelBtnClass =
    showFeature === "Admin Panel" && "bg-gradient-primary text-white";
  return (
    <div className="space-y-10">
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
