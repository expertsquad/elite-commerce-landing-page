"use client";
import Button from "@/components/Shared/Button";
import React, { useState } from "react";
import CustomerPanel from "./CustomerPanel";
import AdminPanel from "./AdminPanel";
import Button3d from "@/components/Shared/Button3d";

const ShowFeatures = () => {
  const [showFeature, setShowFeture] = useState("Customer Panel");
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-5">
        <div onClick={() => setShowFeture("Customer Panel")}>
          <Button3d
            button3dMainClass="perspective-180"
            buttonText="Customer Panel"
            showHoverText
            background3dclass={`rotate-y-20  bg-white border border-primary group-hover:rotate-y-23 rounded-[5px]`}
            textClasss="text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px] whitespace-nowrap"
            mainButtonDiv="rotate-y-23 group-hover:rotate-y-23 rounded-[5px] !bg-gradient-primary"
          />
        </div>
        <div onClick={() => setShowFeture("Admin Panel")}>
          <Button3d
            button3dMainClass="perspective-170"
            buttonText="Admin Panel"
            showHoverText
            background3dclass={`rotate-y-20  bg-white border border-primary group-hover:rotate-y-22 rounded-[5px]`}
            textClasss="text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px] whitespace-nowrap"
            mainButtonDiv="rotate-y-22 group-hover:rotate-y-23 rounded-[5px] !bg-gradient-primary"
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
