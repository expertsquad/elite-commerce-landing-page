import { IconArrowRight, icons } from "@tabler/icons-react";
import React from "react";
interface ButtonProps {
  mainClass?: string;
  stripHoverEffect?: boolean;
  iconOne?: React.ReactNode;
  iconTwo?: React.ReactNode;
  buttonTextClass?: string;
  buttonText?: string;
}

const Button = ({
  mainClass,
  stripHoverEffect,
  iconOne,
  iconTwo,
  buttonTextClass,
  buttonText,
}: ButtonProps) => {
  return (
    <button
      className={`${mainClass} relative inline-flex items-center justify-center px-8 py-2 overflow-hidden   rounded-full group text-center`}
    >
      {/* Background Effect */}
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
      {/* <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#A020F0]"></span> */}

      {/* White Strip Effect */}
      {stripHoverEffect && (
        <span className="absolute z-10 right-0 w-8 h-32 -mt-1 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      )}

      {/* Left Icon */}
      <span className="absolute left-1.5  transform  group-hover:-translate-x-12 transition-transform duration-200 ease-out">
        {iconOne}
      </span>

      {/* Right Icon */}
      <span className="absolute right-1.5 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-200 ease-out ">
        {iconTwo}
      </span>

      {/* Button Text */}
      <span className={` z-20 ${buttonTextClass}`}>{buttonText}</span>
    </button>
  );
};

export default Button;
