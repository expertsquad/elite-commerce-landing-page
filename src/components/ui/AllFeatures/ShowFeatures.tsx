"use client";
import Button from "@/components/Shared/Button";
import React, { useState } from "react";
import CustomerPanel from "./CustomerPanel";
import AdminPanel from "./AdminPanel";

const ShowFeatures = () => {
  const [showFeature, setShowFeture] = useState("Customer Panel");
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-5">
        <Button
          onClick={() => setShowFeture("Customer Panel")}
          className={`${
            showFeature === "Customer Panel"
              ? "bg-gradient-primary text-white"
              : "bg-transparent text-black-80"
          } border border-black-10 rounded-md px-5 py-3.5`}
        >
          Customer Panel
        </Button>
        <Button
          onClick={() => setShowFeture("Admin Panel")}
          className={`${
            showFeature === "Admin Panel"
              ? "bg-gradient-primary text-white"
              : "bg-transparent text-black-80"
          } border border-black-10 rounded-md px-5 py-3.5`}
        >
          Admin Panel
        </Button>
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
