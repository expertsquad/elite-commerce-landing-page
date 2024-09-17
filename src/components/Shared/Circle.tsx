import { ICircle } from "@/type/circle.interface";
import React from "react";

const Circle = ({ spinText, className, icon }: ICircle) => {
  return (
    <div className={`relative ${className} rounded-full`}>
      {/* Spinning text */}

      {/* Main circle with icon */}

      <div className="border border-white rounded-full p-1 text-white">
        {icon}
      </div>
    </div>
  );
};

export default Circle;
