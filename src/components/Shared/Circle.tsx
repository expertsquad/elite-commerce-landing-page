"use client";
import { ICircle } from "@/type/circle.interface";
import React, { useEffect, useRef } from "react";

const Circle = ({ spinText, className, icon, bgColor }: ICircle) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const characters = textElement.innerText.split("");
      textElement.innerHTML = characters
        .map(
          (char, i) =>
            `<span class="absolute text- left-[50%] text-xs  origin-custom" style="transform:rotate(${
              i * 8.2
            }deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className={`rounded-full p-2 ${bgColor}`}>
      <div
        className={`relative rounded-full  flex items-center justify-center ${className}`}
      >
        {/* Spinning circle wrapper */}
        <div
          ref={textRef}
          className="absolute w-full h-full animate-spin-rotate-text text-white select-none "
        >
          {spinText}
        </div>
        {/* Circle center content */}
        <div className=" animate-bounce absolute p-[3px] border border-white  rounded-full  flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Circle;
