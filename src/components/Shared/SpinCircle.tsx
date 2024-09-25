"use client";
import React, { useEffect, useState } from "react";

const SpinCircle = ({
  spinText,
  className,
  icon,
  iconClassName,
}: {
  spinText?: string;
  className?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}) => {
  const [translateY, setTranslateY] = useState("50px");

  // Function to update translateY based on screen size
  useEffect(() => {
    const updateTranslateY = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setTranslateY("30px"); // For small screens
      } else {
        setTranslateY("50px"); // For medium and larger screens
      }
    };

    updateTranslateY(); // Initial check
    window.addEventListener("resize", updateTranslateY); // Update on window resize

    return () => window.removeEventListener("resize", updateTranslateY);
  }, []);

  const characters = spinText.split("");

  // Create spinning text by applying a rotate for each character
  const spinTextStyle = characters
    .map(
      (char, i) =>
        `<span class="spin-char" style="transform: rotate(${
          i * (-360 / characters.length)
        }deg) translateY(${translateY});">${char}</span>`
    )
    .join("");

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${className} relative rounded-full flex items-center justify-center md:w-[150px] md:h-[150px] h-[100px] w-[100px]`}
      >
        {/* Spinning text around the circle */}
        <div className="circle-text absolute text-white">
          <div dangerouslySetInnerHTML={{ __html: spinTextStyle }} />
        </div>

        {/* Icon in the center */}
        <div
          className={`${
            iconClassName
              ? iconClassName
              : "border border-white rounded-full p-2 text-white hover:scale-125 transition-all duration-300 ease-in-out"
          } relative z-10 flex items-center justify-center `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SpinCircle;
