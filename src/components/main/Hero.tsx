"use client";
import React, { useEffect, useRef } from "react";
import Button3d from "../Shared/Button3d";
import Videos from "../hero/Videos";
import CursorHover from "../Shared/CursorHover";
import videoHover from "@/assets/images/videosHover.png";
import Image from "next/image";

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
      drop.style.animationDuration = `20s`;

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
      ref={heroRef}
      className="hero-container relative min-h-screen bg-white-15 "
    >
      <div className="absolute inset-0 bg-grid-pattern">
        <div className="space-y-6 md:space-y-14 pt-11 z-20">
          <div className="flex items-center justify-center w-full h-full flex-col gap-8">
            <CursorHover
              hoverScale={6}
              cursorSize="w-20 h-20 -mt-10 -ml-10"
              customClass="bg-[#ffff] mix-blend-difference p-10 pointer-events-none"
              customCursorContent={
                <div className="bg-[#ffff] w-full h-full rounded-full"></div>
              }
            >
              <h1 className="text-center mx-auto text-[clamp(18px,3vw,50px)] font-semibold text-black-80">
                Innovative Solutions For Your <br /> E-Commerce{" "}
                <span className="text-primary">Success.</span>
              </h1>
            </CursorHover>

            <p className="[letter-spacing:0.4px] text-center text-black-70 text-[clamp(12px,3vw,17px)]">
              The Best <i className="text-secondary">E-Commerce</i> Marketplace
              Solution. You Can Operate And{" "}
              <i className="text-primary">Control</i> Your <br /> Businesses In
              Every Place With{" "}
              <i className="text-secondary font-bold">Elite Commerce.</i>
            </p>
            <Button3d
              button3dMainClass="perspective-180"
              buttonText="Buy Now"
              showHoverText={true}
              background3dclass={`rotate-y-20 bg-white border border-[#ff1810] group-hover:rotate-y-23 rounded-[5px]`}
              textClasss="text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px]"
              mainButtonDiv="rotate-y-23 group-hover:rotate-y-23 rounded-[5px]"
              boldText="$90"
              boldTextClass="font-bold text-[clamp(12px,3vw,16px)] "
            />
          </div>
          <div className="flex items-center justify-center w-full rounded-md overflow-hidden">
            <CursorHover
              hoverScale={1}
              cursorSize="w-20 h-20 flex -ml-10 -mt-10"
              customClass="bg-transparent"
              customCursorContent={
                <div>
                  <Image
                    src={videoHover}
                    loading="lazy"
                    alt="Hover Video Icon"
                    className="w-20 h-20"
                  />
                </div>
              }
            >
              <Videos />
            </CursorHover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
