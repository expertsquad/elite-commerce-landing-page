import Image from "next/image";
import React from "react";
import anqular from "@/assets/images/angular-icon.png";
import ts from "@/assets/images/Ts.jpg";
import cplus from "@/assets/images/c++.png";
import c from "@/assets/images/c.png";
import face from "@/assets/images/facebook.png";
import farmer from "@/assets/images/framer.png";
import guthub from "@/assets/images/guthub.png";
import js from "@/assets/images/js.png";
import python from "@/assets/images/python.png";
import tail from "@/assets/images/tail.png";
import whatsapp from "@/assets/images/whatsapp.png";

const Infinity = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Scrolling container */}
      <div className="flex space-x-16 animate-loop-scroll">
        {/* First loop */}
        {[face, tail, c, whatsapp, ts, anqular].map((imgSrc, index) => (
          <div key={index} className="relative h-11 w-40">
            <Image
              src={imgSrc}
              alt="Carousel Image"
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
        ))}
      </div>

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex space-x-16 animate-loop-scroll"
        style={{ left: "100%" }}
      >
        {[face, tail, c, whatsapp, ts, anqular].map((imgSrc, index) => (
          <div key={index} className="relative h-11 w-40">
            <Image
              src={imgSrc}
              alt="Carousel Image"
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infinity;
