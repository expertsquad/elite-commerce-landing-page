import {
  IconBoltFilled,
  IconCheck,
  IconShoppingBag,
} from "@tabler/icons-react";
import React from "react";
import Button from "../Shared/Button";
import SpinCircle from "../Shared/SpinCircle";
import { commitment } from "@/ulits/commitment";
import Image from "next/image";
import glassMorPhism from "@/assets/images/glaamorphismLine.svg";

const Glassmorphism = () => {
  return (
    <section className="main-container ">
      <div className=" lg:w-[870px] w-full mx-auto flex items-center justify-center flex-col gap-4  p-7 rounded-lg backdrop-filter backdrop-blur-xl shadow-md border border-black-10">
        {/* commitment */}
        <div className="flex items-center justify-center lg:gap-2 md:gap-1 gap-0.5 py-2 rounded-full backdrop-filter backdrop-blur-3xl shadow-lg border border-white-15 w-full">
          {commitment?.map((item, i) => (
            <div
              className="flex justify-center items-center lg:gap-1.5 md:gap-1 gap-0.5"
              key={i}
            >
              <div className="bg-gradient-primary-reverse p-1 rounded-full text-white">
                <IconCheck size={14} stroke={2} />
              </div>
              <p className="text-black-80 font-medium text-center md:text-sm text-[10px] ">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="h-[160px] w-[160px] bg-secondary/50 rounded-full flex items-center justify-center mx-auto ">
          <SpinCircle
            icon={
              <IconBoltFilled stroke={1} size={28} className="text-secondary" />
            }
            className="text-black-80"
            spinText="Elite Commerce - Expert Squad ."
            iconClassName="border border-2 border-secondary rounded-full md:p-5 p-2 text-white hover:scale-125 transition-all duration-300 ease-in-out"
          />
          {/* <Circle spinText="Hello Bangladesh Companigonj" /> */}
        </div>
        <h2 className="text-black-80 [font-size:clamp(1.5rem,4vw,2.3rem)] font-semibold">
          Grab Elite Commerce now before <br />
          <p className="text-gradient-secondary text-center">Price increase</p>
        </h2>

        <Image
          alt="elite commerce"
          src={glassMorPhism}
          width={200}
          height={80}
        />

        <Button
          mainClass="font-medium text-white border border-black-10 px-[10px] py-[5px] md:px-5 md:py-2 bg-gradient-secondary"
          stripHoverEffect={true}
          animatationThree={true}
          animatationThreeClss="bg-gradient-primary"
          iconFourTrue={true}
          iconFour={<IconShoppingBag stroke={1} />}
          buttonText="Purchase Now $00"
          buttonTextClass="text-white text-[clamp(12px,3vw,16px)] group-hover:text-white"
        />
      </div>
    </section>
  );
};
export default Glassmorphism;
