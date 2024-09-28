"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/mainLogoWhite.svg";
import Link from "next/link";
import ArrowUpRight from "@/assets/icons/ArrowUpRight";
import singleLogo from "@/assets/images/expertSquadSingle.svg";
import footerCircle from "@/assets/images/FooterCircle.gif";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TwitterXIcon from "@/assets/icons/TwitterXIcon";
import Button from "../Shared/Button";
import { IconArrowUpRight } from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#131313] footer-main  overflow-hidden ">
      <div className=" py-10  main-container">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-[30px] items-center justify-between w-full">
          <div className="space-y-5 md:col-span-2 flex flex-col md:items-start items-center">
            <div className="relative w-[160px] h-[45px]">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain w-full h-full top-0 left-0 image-select-none"
              />
            </div>
            <div className="flex items-center gap-[30px] text-white md:flex-nowrap flex-wrap">
              <Link
                className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                href={`#`}
              >
                Home
              </Link>
              <Link
                className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                href={`https://elite-commerce.vercel.app/`}
                target="_blank"
              >
                Demo
              </Link>
              <Link
                className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                href={`#features`}
              >
                Features
              </Link>
              <Link
                className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                href={`#Pricing`}
              >
                Pricing
              </Link>
              <Link
                className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                href={`#Get-help`}
              >
                Get Help
              </Link>
            </div>

            <div className="">
              <p className="[font-size:_clamp(12px,2.5vw,18px)] text-[#a7a4a4] md:text-start text-center">
                Expert Squad is a leader in innovative eCommerce solutions,
                offering Elite Commerce, an all-in-one platform designed to
                simplify online business operations. Our mission is to empower
                businesses to grow, streamline processes, and succeed in the
                digital marketplace with powerful, user-friendly tools.
              </p>
            </div>

            <Link
              className="text-white font-medium [font-size:_clamp(12px,2.5vw,16px)] flex items-center justify-center gap-1 italic px-5 py-3  bg-[#FFFFFF33]  rounded-full w-full max-w-[240px] whitespace-nowrap"
              target="_blank"
              href={`www.expertsquad.net`}
            >
              <Image src={singleLogo} alt="single-logo" />
              Visit Expert Squad.net
              <ArrowUpRight color="#fff" height={20} width={20} />
            </Link>
          </div>
          <div className=" flex md:items-end items-center flex-col justify-center md:justify-end gap-[clamp(10px,2.5vw,40px)]">
            <div className="relative md:w-[150px] md:h-[150px] w-[80px] h-[80px] ">
              <Image
                src={footerCircle}
                alt=""
                fill
                className="object-contain w-full h-full top-0 left-0 image-select-none"
              />
            </div>
            <span className="text-white font-bold [font-size:_clamp(18px,2.5vw,24px)] italic [font-family:_'Sansita_One']">
              Elite-Commerce
            </span>
          </div>
        </div>
      </div>
      <div className="md:bg-[#242424]">
        <div className="main-container mx-auto flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
          <div className=" w-full md:rounded-tr-full flex items-center md:justify-start  justify-center   md:order-none order-3  lg:col-span-2">
            <span className="[font-size:_clamp(12px,2.5vw,16px)] text-white  ">
              © {currentYear} Elite Commerce Exertsquad.net
            </span>
          </div>
          <div className="w-full flex items-center gap-3.5 justify-center md:order-none order-1">
            <Link
              target="_blank"
              href={`https://www.youtube.com/expertsquad.com`}
            >
              <Button
                mainClass=" text-white border-[1.5px] border-black-50 w-[34px] h-[34px] rounded-full flex items-center justify-center"
                stripHoverEffect={true}
                animatationOne={true}
                animatationOneClass="bg-gradient-secondary"
                iconThreeTrue={true}
                iconThree={<YoutubeIcon />}
                iconThreeClass={`group-hover:rotate-[360deg] transition-all duration-700 ease-in-out`}
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.instagram.com/expertsquad.com`}
            >
              <Button
                mainClass=" text-white border-[1.5px] border-black-50 w-[34px] h-[34px] rounded-full flex items-center justify-center"
                stripHoverEffect={true}
                animatationOne={true}
                animatationOneClass="bg-gradient-secondary"
                iconThreeTrue={true}
                iconThree={<InstagramIcon />}
                iconThreeClass={`group-hover:rotate-[360deg] transition-all duration-700 ease-in-out`}
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.facebook.com/expertsquads`}
            >
              <Button
                mainClass=" text-white border-[1.5px] border-black-50 w-[34px] h-[34px] rounded-full flex items-center justify-center"
                stripHoverEffect={true}
                animatationOne={true}
                animatationOneClass="bg-gradient-secondary"
                iconThreeTrue={true}
                iconThree={<FacebookIcon />}
                iconThreeClass={`group-hover:rotate-[360deg] transition-all duration-700 ease-in-out`}
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/expertsquads`}
            >
              <Button
                mainClass=" text-white border-[1.5px] border-black-50 w-[34px] h-[34px] rounded-full flex items-center justify-center"
                stripHoverEffect={true}
                animatationOne={true}
                animatationOneClass="bg-gradient-secondary"
                iconThreeTrue={true}
                iconThree={<LinkedInIcon />}
                iconThreeClass={`group-hover:rotate-[360deg] transition-all duration-700 ease-in-out`}
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.twitter.com/expertsquad.com`}
            >
              <Button
                mainClass=" text-white border-[1.5px] border-black-50 w-[34px] h-[34px] rounded-full flex items-center justify-center"
                stripHoverEffect={true}
                animatationOne={true}
                animatationOneClass="bg-gradient-secondary"
                iconThreeTrue={true}
                iconThree={<TwitterXIcon />}
                iconThreeClass={`group-hover:rotate-[360deg] transition-all duration-700 ease-in-out`}
              />
            </Link>
          </div>
          <div className=" gap-5  w-full flex md:items-end md:justify-end items-center justify-center  md:py-4  [font-size:_clamp(12px,2.5vw,16px)] md:order-none order-2 lg:col-span-2 ">
            <Link href={`*`} className="underline text-white">
              Privacy Policy{""}
            </Link>
            <Link href={`*`} className="underline text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
