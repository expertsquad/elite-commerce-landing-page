"use client";
import React, { useState } from "react";

const PanelContent = () => {
  const [activePanel, setActivePanel] = useState("customer");

  return (
    <>
      {/* Feature buttons */}
      <div className="my-5 flex text-center justify-center gap-4">
        <button
          className={`${
            activePanel === "customer"
              ? "font-bold bg-primary-light px-3 py-2 text-white rounded-xl"
              : "px-3 py-2 "
          }`}
          onClick={() => setActivePanel("customer")}
        >
          Customer Panel
        </button>
        <button
          className={`${
            activePanel === "admin"
              ? "font-bold bg-primary-light px-3 py-2 text-white rounded-xl"
              : " px-3 py-2  "
          }`}
          onClick={() => setActivePanel("admin")}
        >
          Admin Panel
        </button>
      </div>

      {/* Panel content */}
      <div>
        {activePanel === "customer" ? (
          <div>
            {/* Left div */}
            <div>{/* All Button */}</div>
            {/* Right Div */}
            <div>{/* content */}</div>
          </div>
        ) : (
          <div>Admin Panel content</div>
        )}
      </div>
    </>
  );
};

export default PanelContent;
