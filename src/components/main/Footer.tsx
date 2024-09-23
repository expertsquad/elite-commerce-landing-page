import Image from "next/image";
import React from "react";
import logo from "@/assets/images/mainLogoWhite.svg";
import Link from "next/link";
import ArrowUpRight from "@/assets/icons/ArrowUpRight";
import singleLogo from "@/assets/images/expertSquadSingle.svg";
import footerCircle from "@/assets/images/footerCircle.png";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TwitterXIcon from "@/assets/icons/TwitterXIcon";

const Footer = () => {
  return (
    <div className="bg-[#171717] footer-main ">
      <div className="main-container  py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-[30px] items-center justify-between w-full">
          <div className="space-y-5 md:col-span-2 flex flex-col md:items-start items-center">
            <div className="relative w-[160px] h-[45px]">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
            <div className="flex items-center gap-[30px] text-white md:flex-nowrap flex-wrap">
              {[...Array(5)].map((_, i) => (
                <Link
                  className="underline [font-size:_clamp(12px,2.5vw,18px)] "
                  href={``}
                >
                  Home
                </Link>
              ))}
            </div>

            <div className="">
              <p className="[font-size:_clamp(12px,2.5vw,18px)] text-[#DDDDDD] md:text-start text-center">
                Lorem ipsum dolor sit amet consectetur. Commodo mollis urna
                dictum at tellus ultricies nunc aliquam. Vitae placerat amet
                adipiscing in tempor convallis.Lorem ipsum dolor sit amet
                consectetur. Commodo mollis urna dictum at tellus ultricies nunc
                aliquam. Vitae placerat amet adipiscing in tempor convallis.
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
          <div className=" flex items-center flex-col justify-center md:justify-end gap-[clamp(10px,2.5vw,40px)]">
            <div className="relative md:w-[150px] md:h-[150px] w-[80px] h-[80px] animate-spin-custom">
              <Image
                src={footerCircle}
                alt=""
                fill
                className="object-contain w-full h-full top-0 left-0"
              />
            </div>
            <span className="text-white font-bold [font-size:_clamp(18px,2.5vw,24px)] italic [font-family:_'Sansita_One']">
              Elite-Commerce
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-4 items-center md:justify-between justify-center ">
        <div className="md:bg-[#242424] w-full md:rounded-tr-full flex items-center justify-center md:py-5 md:px-5  md:order-none order-3 ">
          <span className="text-xs md:text-base lg:text-lg text-white">
            © 2024 Elite Commerce Exertsquad.net
          </span>
        </div>
        <div className="w-full flex items-center gap-3.5 justify-center md:order-none order-1">
          <div className="rounded-full border-[1.5px] flex items-center justify-center border-black-50  h-[34px] w-[34px]">
            <YoutubeIcon />
          </div>
          <div className="rounded-full border-[1.5px] flex items-center justify-center border-black-50  h-[34px] w-[34px]">
            <InstagramIcon />
          </div>
          <div className="rounded-full border-[1.5px] flex items-center justify-center border-black-50  h-[34px] w-[34px]">
            <FacebookIcon />
          </div>
          <div className="rounded-full border-[1.5px] flex items-center justify-center border-black-50  h-[34px] w-[34px]">
            <LinkedInIcon />
          </div>
          <div className="rounded-full border-[1.5px] flex items-center justify-center border-black-50  h-[34px] w-[34px]">
            <TwitterXIcon />
          </div>
        </div>
        <div className="md:bg-[#242424] gap-5  w-full md:rounded-tl-full flex items-center justify-center md:py-5 md:px-5 text-xs md:text-base lg:text-lg md:order-none order-2">
          <Link href={`*`} className="underline text-white">
            Privacy Policy{" "}
          </Link>
          <Link href={`*`} className="underline text-white">
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
