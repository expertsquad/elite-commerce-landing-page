import React from "react";
import Button from "./Button";
import Image from "next/image";
import purchase from "@/assets/images/purchase.svg";

const BuyNow = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="fixed md:bottom-10 bottom-3 md:left-10 z-[1000] md:w-auto w-[95%]">
        {" "}
        <Button
          mainClass="font-medium text-white border border-black-10  px-[10px] py-[10px] md:px-5 md:py-2 bg-gradient-primary w-full md:w-auto"
          stripHoverEffect={true}
          animatationThree={true}
          animatationThreeClss="bg-gradient-secondary"
          iconFourTrue={true}
          iconFour={
            <div className="relative h-5 w-5 mr-1">
              <Image
                src={purchase}
                alt="purchase"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
          }
          buttonText="Buy $99"
          buttonTextClass="text-white text-[clamp(15px,3vw,16px)] group-hover:text-white"
        />
      </div>
    </div>
  );
};

export default BuyNow;
