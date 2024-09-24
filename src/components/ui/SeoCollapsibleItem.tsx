"use client";
import React, { useState } from "react";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { SeoCollapsibleItems } from "@/ulits/seoCollapsibleItems";

const SeoCollapsibleItem = () => {
  const [openSection, setOpenSection] = useState(0);
  console.log(openSection);

  // Toggle the clicked section
  const handleToggle = (index: number) => {
    setOpenSection((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="w-full">
      {SeoCollapsibleItems?.map((section, index) => (
        <div
          key={index}
          className={`mb-4 ${
            openSection === index &&
            "bg-gradient-primary p-4 rounded-lg text-white transition-all duration-300 ease-in-out"
          } `}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-start cursor-pointer gap-3  ${
              openSection !== index && "border border-black-10 p-4 rounded-lg"
            }`}
            onClick={() => handleToggle(index)}
          >
            <IconCircleDashedCheck size={18} />

            <h3 className="text-lg font-bold">{section?.header}</h3>
          </div>

          {/* Description (only visible if the section is open) */}
          {openSection === index && (
            <div className="p-4 ">
              <p>{section?.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeoCollapsibleItem;
