import React from "react";
import Button from "./Button";
import Image from "next/image";
import purchase from "@/assets/images/purchase.svg";

const BuyNow = () => {
  return (
    <div className="fixed bottom-10 left-10 z-50">
      {" "}
      <Button
        mainClass="font-medium text-white border border-black-10 px-[10px] py-[5px] md:px-5 md:py-2 bg-gradient-primary"
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
        buttonTextClass="text-white text-[clamp(12px,3vw,16px)] group-hover:text-white"
      />
    </div>
  );
};

export default BuyNow;
