"use client";
import React, { useEffect, useRef } from "react";
import Button3d from "../Shared/Button3d";
import Videos from "../hero/Videos";
import CursorHover from "../Shared/CursorHover";
import videoHover from "@/assets/images/videosHover.png";
import Image from "next/image";
import HeroLeftAnimation from "../ui/HeroLeftAnimation";
import HeroSmallAnimation from "../ui/HeroSmallAnimation";
import heroCircle from "@/assets/images/heroCircle.svg";
import heroCross from "@/assets/images/heroCross.svg";
import heroDashedRound from "@/assets/images/heroDashedRound.svg";
import heroHeart from "@/assets/images/heroHeart.svg";
import heroImoji from "@/assets/images/heroline.svg";
import heroGittu from "@/assets/images/heroGittu.svg";
import SpinCircle from "../Shared/SpinCircle";
import ElitMiniIcon from "@/assets/elitminiIcon.svg";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import VideosSection from "../hero/VideosSection";
// import VideosSection from "../hero/Videos";
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let currentDrops = 0;
    let currentHorizontalDrops = 0;

    const createVerticalNeonDrop = () => {
      if (currentDrops >= 5) return;

      const drop = document.createElement("div");
      drop.classList.add("neon-drop");

      const gridWidth = 250;
      const randomLeftPosition =
        Math.floor(Math.random() * (window.innerWidth / gridWidth)) * gridWidth;
      drop.style.left = `${randomLeftPosition}px`;
      drop.style.animationDuration = `${Math.random() * 9 + 9}s`;

      if (heroRef.current) {
        heroRef.current.appendChild(drop);
        currentDrops += 1;

        setTimeout(() => {
          drop.remove();
          currentDrops -= 1;
        }, 12000);
      }
    };

    const createHorizontalNeonDrop = () => {
      if (currentHorizontalDrops >= 5) return;

      const drop = document.createElement("div");
      drop.classList.add("neon-drop-horizontal");

      const gridHeight = 250;
      const randomTopPosition =
        Math.floor(Math.random() * (window.innerHeight / gridHeight)) *
        gridHeight;
      drop.style.top = `${randomTopPosition}px`;
      drop.style.animationDuration = ` 20s`;

      if (heroRef.current) {
        heroRef.current.appendChild(drop);
        currentHorizontalDrops += 1;

        setTimeout(() => {
          drop.remove();
          currentHorizontalDrops -= 1;
        }, 20000);
      }
    };

    const interval = setInterval(() => {
      const activeDrops = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < activeDrops; i++) {
        createVerticalNeonDrop();
        createHorizontalNeonDrop();
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // animate-[spin_linear_10s_infinite]
      ref={heroRef}
      className="hero-container relative min-h-screen bg-white-15 bg-grid-pattern"
    >
      <div className="relative inset-0  ">
        {/* <span className="bg-primary absolute left-0 w-[100px] h-[120px] filter blur-[120px] top-11"></span> */}

        {/* left animation  */}
        <HeroLeftAnimation />
        <HeroSmallAnimation
          className="animate-bounce absolute top-60 left-[10%] "
          src={heroCircle}
        />
        <HeroSmallAnimation
          className="custom-animation-360deg-opacity-right absolute top-10 left-[80%] "
          src={heroGittu}
        />
        <HeroSmallAnimation
          className="custom-animation-rotate absolute top-48 left-[26%] "
          src={heroImoji}
        />
        <HeroSmallAnimation
          className="animate-bounce absolute top-28 left-[60%] "
          src={heroHeart}
        />
        <HeroSmallAnimation
          className="custom-animation-360deg-opacity-right absolute top-20 left-[90%] "
          src={heroDashedRound}
        />
        <HeroSmallAnimation
          className="custom-animation-360deg-opacity-right absolute top-36 left-[10%] "
          src={heroCross}
        />

        <HeroSmallAnimation
          className="custom-animation-360deg-opacity-right absolute top-48 left-[90%] "
          src={heroHeart}
        />
        <div className="space-y-6 md:space-y-14 pt-11 ">
          <div className="flex items-center justify-center w-full h-[max(350px,calc(100vh-430px))] flex-col gap-8">
            <h1 className="uppercase font-[1000] text-center mx-auto text-[clamp(22px,3vw,50px)] text-black-80 z-20 ">
              Innovative Solutions For Your <br /> E-Commerce{" "}
              <span className="text-primary">Success.</span>
            </h1>

            <p className="[letter-spacing:0.4px] text-center text-black-70 text-[clamp(12px,3vw,17px)] z-20 w-8/12">
              The Best <i className="text-secondary">E-Commerce</i> Marketplace
              Solution. You Can Operate And{" "}
              <i className="text-primary">Control</i> Your <br /> Businesses In
              Every Place With{" "}
              <i className="text-secondary font-bold">Elite Commerce.</i>
            </p>
            <Button3d
              button3dMainClass="perspective-180 z-20"
              buttonText="Buy Now"
              showHoverText={true}
              background3dclass={`rotate-y-20 bg-white border border-[#ff1810] group-hover:rotate-y-23 rounded-[5px]`}
              textClasss="text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px] text-white group-hover:black-80"
              mainButtonDiv="rotate-y-23 group-hover:rotate-y-23 rounded-[5px] bg-gradient-secondary group-hover:bg-gradient-primary"
              boldText="$90"
              boldTextClass="font-bold text-[clamp(12px,3vw,16px)] "
            />
          </div>

          <div className="flex items-center justify-center w-full rounded-md overflow-hidden relative">
            <CursorHover
              hoverScale={1}
              cursorSize="w-20 h-20 flex -ml-[79px] -mt-10 "
              customClass="bg-transparent"
              customCursorContent={
                <SpinCircle
                  spinText="  & ADMIN PANEL. CUSTOMER PANEL"
                  className="bg-gradient-secondary text-white "
                  icon={
                    <div className="">
                      <IconPlayerPlayFilled />
                    </div>
                  }
                />
              }
            >
              <Videos />
            </CursorHover>

            {/* <VideosSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
