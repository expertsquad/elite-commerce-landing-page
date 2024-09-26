"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import errorImg from "@/assets/images/error.svg";

const Error = () => {
  return (
    <div className="h-[calc(100vh-98px)] w-full flex justify-center items-center flex-col gap-5">
      <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
        <Image
          src={errorImg}
          alt="error image"
          className="w-full h-full top-0 left-0 object-contain"
          fill
        />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className="font-bold [font-size:_clamp(30px,2.5vw,50px)]">
          Internal Server Error!
        </span>
        <p>
          It's like an error happening on server or Network related. Plese check
          your modem or router. And Try again after sometime.
        </p>
      </div>
    </div>
  );
};

export default Error;
