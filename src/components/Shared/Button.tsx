import { IconArrowRight, icons } from "@tabler/icons-react";
import React from "react";
interface ButtonProps {
  mainClass?: string;
  stripHoverEffect?: boolean;
<<<<<<< HEAD
=======
  animatationOne?: boolean;
  animatationOneClass?: string;
  animatationTwo?: boolean;
  animatationTwoClass?: string;
  animatationThree?: boolean;
  animatationThreeClss?: string;
  animatationFour?: boolean;
  animatationFourClass?: string;
  animatationFive?: boolean;
  animatationFiveClass?: string;
  animatationSix?: boolean;
  animatationSixClass?: string;
  animationSeven?: boolean;
  animationSevenClass?: string;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
  iconOne?: React.ReactNode;
  iconTwo?: React.ReactNode;
  buttonTextClass?: string;
  buttonText?: string;
<<<<<<< HEAD
=======
  iconThree?: React.ReactNode;
  iconThreeClass?: string;
  iconThreeTrue?: boolean;
  iconFour?: React.ReactNode;
  iconFourClass?: string;
  iconFourTrue?: boolean;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
}

const Button = ({
  mainClass,
  stripHoverEffect,
  iconOne,
  iconTwo,
  buttonTextClass,
<<<<<<< HEAD
  buttonText,
}: ButtonProps) => {
  return (
    <button
      className={`${mainClass} relative inline-flex items-center justify-center px-8 py-2 overflow-hidden   rounded-full group text-center`}
    >
      {/* Background Effect */}
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
      {/* <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#A020F0]"></span> */}

=======
  animatationOne,
  animatationOneClass,
  animatationTwo,
  animatationTwoClass,
  animatationThree,
  animatationThreeClss,
  animatationFour,
  animatationFourClass,
  animatationFive,
  animatationFiveClass,
  animatationSix,
  animatationSixClass,
  animationSeven,
  animationSevenClass,
  buttonText,
  iconThree,
  iconThreeClass,
  iconThreeTrue,
  iconFour,
  iconFourClass,
  iconFourTrue,
}: ButtonProps) => {
  return (
    <button
      className={`${mainClass} relative inline-flex items-center justify-center  overflow-hidden rounded-full group text-center`}
    >
      {/* Background Effect */}

      {animatationOne && (
        <span
          className={`absolute w-0 h-0 transition-all duration-500 ease-out ${animatationOneClass}  rounded-full group-hover:w-56 group-hover:h-56`}
        ></span>
      )}

      {/* <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#A020F0]"></span> */}
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
      {/* White Strip Effect */}
      {stripHoverEffect && (
        <span className="absolute z-10 right-0 w-8 h-32 -mt-1 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      )}
<<<<<<< HEAD

=======
      {animatationTwo && (
        <span
          className={`w-48 h-48 rounded rotate-[-40deg] ${animatationTwoClass}  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0`}
        ></span>
      )}
      {animatationThree && (
        <span
          className={`absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 ${animatationThreeClss}  opacity-100 group-hover:-translate-x-8`}
        ></span>
      )}
      {animatationFour && (
        <span
          className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${animatationFourClass}  group-hover:h-full opacity-90`}
        ></span>
      )}
      {animatationFive && (
        <span
          className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out ${animatationFiveClass}  group-hover:h-full`}
        ></span>
      )}
      {animatationSix && (
        <div>
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-[3px] border-black-80 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-[3px] border-black-80 group-hover:w-full ease"></span>
          <span
            className={`absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${animatationSixClass}   group-hover:h-full ease`}
          ></span>
          <span
            className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${animatationSixClass} group-hover:h-full ease`}
          ></span>
          <span
            className={`absolute inset-0 w-full h-full duration-300 delay-300 ${animatationSixClass}  opacity-0 group-hover:opacity-100`}
          ></span>
        </div>
      )}
      {animationSeven && (
        <span
          className={`absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-[72px] ${animationSevenClass}  opacity-100 group-hover:-translate-x-8`}
        ></span>
      )}
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
      {/* Left Icon */}
      <span className="absolute left-1.5  transform  group-hover:-translate-x-12 transition-transform duration-200 ease-out">
        {iconOne}
      </span>
<<<<<<< HEAD

=======
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
      {/* Right Icon */}
      <span className="absolute right-1.5 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-200 ease-out ">
        {iconTwo}
      </span>
<<<<<<< HEAD

      {/* Button Text */}
      <span className={` z-20 ${buttonTextClass}`}>{buttonText}</span>
=======
      {iconFourTrue && (
        <span className={` z-20 ${iconFourClass}`}>{iconFour}</span>
      )}
      {/* Button Text */}
      <span className={` z-20 ${buttonTextClass}`}>{buttonText}</span>
      {iconThreeTrue && (
        <span className={` z-20 group ${iconThreeClass}`}>{iconThree}</span>
      )}
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
    </button>
  );
};

export default Button;
