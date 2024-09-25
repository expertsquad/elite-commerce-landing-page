import { IconArrowUpRight } from "@tabler/icons-react";
import React from "react";
import Button from "../Shared/Button";
import SpinCircle from "../Shared/SpinCircle";

const Glassmorphism = () => {
  return (
    <section className="main-container ">
      <div className=" md:w-8/12 w-full mx-auto flex items-center justify-center flex-col gap-4 bg-primary-light/30 p-7 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl shadow-md border border-black-10">
        <p className="py-4 bg-secondary-light w-full">Element is coming</p>
        <div className="h-[160px] w-[160px] bg-secondary/50 rounded-full flex items-center justify-center mx-auto ">
          <SpinCircle
            icon={<IconArrowUpRight stroke={1} />}
            className="bg-gradient-secondary"
            spinText="Elite Commerce - Expert Squad ."
          />
          {/* <Circle spinText="Hello Bangladesh Companigonj" /> */}
        </div>
        <h2 className="text-black-80 [font-size:clamp(1.5rem,4vw,3rem)] font-semibold">
          Grab Elite Commerce now before <br />
          <p className="text-gradient-secondary text-center">Price increase</p>
        </h2>
        <Button
          mainClass="font-medium text-white border border-black-10 px-5 py-2"
          stripHoverEffect={true}
          animatationOne={true}
          animatationOneClass="bg-gradient-secondary"
          iconThreeTrue={true}
          iconThree={<IconArrowUpRight stroke={1} />}
          iconThreeClass="group-hover:rotate-45 transition-all duration-300 ease-in-out pl-1 text-black-50 group-hover:text-white"
          buttonText="Support"
          buttonTextClass="text-black-50 text-[clamp(12px,3vw,16px)] group-hover:text-white"
        />
      </div>
    </section>
  );
};

export default Glassmorphism;
