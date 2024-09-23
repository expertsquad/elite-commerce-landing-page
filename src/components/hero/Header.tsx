"use client";
import Image from "next/image";
import React, { useState } from "react";
import mainLogo from "@/assets/images/mainLogo.png";
import { header } from "@/constants/header.constants";
import CustomLink from "./CustomLink";
import Button from "../Shared/Button";
import purchase from "@/assets/images/purchase.svg";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconMenu2,
} from "@tabler/icons-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="main-container flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handleToggle}
            className=" md:hidden block" // Removed absolute positioning
          >
            <IconMenu2 size={20} />
          </button>

          <div className="relative w-24 h-7 md:h-11 md:w-40">
            <Image
              src={mainLogo}
              alt="Home Page design"
              fill
              className="object-contain w-full h-full top-0 left-0"
            />
          </div>
        </div>

        <div
          className={`bg-white md:bg-transparent md:bg-gradient-to-r md:from-[#ffffff88] md:via-[#f0f0f0aa] md:to-[#ffffff88] md:backdrop-blur-lg h-[190vh] md:h-auto overflow-hidden flex-col md:flex-row flex items-center mt-32 md:mt-0 justify-center md:justify-between gap-3 md:gap-6 z-50 md:shadow-none shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-300 ease-in-out ${
            open
              ? "w-[250px] md:w-auto -translate-x-[15%] fixed md:relative"
              : "-translate-x-[150%] md:w-auto overflow-hidden fixed md:relative"
          } md:translate-x-0`}
        >
          <div className="block md:hidden py-5 mt-5 border-b border-b-black-10 w-[250px] ">
            <div className="relative h-[30px] w-[110px]  pl-60">
              <Image
                src={mainLogo}
                alt="Home Page design"
                fill
                className="object-contain w-full h-full top-0"
              />
            </div>
          </div>
          {/* Close Button */}
          <button
            onClick={handleToggle}
            className="block md:hidden fixed top-3/4 rounded-full px-4 py-2 border border-black-70 z-[51]"
          >
            X
          </button>

          {header?.map((menu) => (
            <CustomLink key={menu?.id} path={menu?.path}>
              {menu?.title}
            </CustomLink>
          ))}
        </div>
        <div className="flex items-center justify-center flex-row gap-9">
          {/* button one */}
          <div className="hidden md:block">
            <Button
              mainClass="font-medium text-white border border-black-10 px-5 py-2"
              stripHoverEffect={true}
              animatationOne={true}
              animatationOneClass="bg-gradient-secondary"
              iconThreeTrue={true}
              iconThree={<IconArrowUpRight stroke={1} />}
              iconThreeClass={`group-hover:rotate-45 transition-all duration-300 ease-in-out pl-1 text-black-50 group-hover:text-white`}
              buttonText="Support"
              buttonTextClass="text-black-50 text-[clamp(12px,3vw,16px)] group-hover:text-white"
            />
          </div>
          {/* button two */}
          <div>
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
              buttonText="Purchase"
              buttonTextClass="text-white text-[clamp(12px,3vw,16px)] group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
