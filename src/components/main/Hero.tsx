"use client";
import React, { useEffect } from "react";
<<<<<<< HEAD
=======
import Button3d from "../Shared/Button3d";
import Videos from "../hero/Videos";
import CursorHover from "../Shared/CursorHover";
import videoHover from "@/assets/images/videosHover.png";
import Image from "next/image";
// Import your custom CursorHover component
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774

const Hero = () => {
  useEffect(() => {
    let currentDrops = 0;
    let currentHorizontalDrops = 0;

    const createVerticalNeonDrop = () => {
<<<<<<< HEAD
      if (currentDrops >= 5) return; // Limit the number of vertical drops to 5
=======
      if (currentDrops >= 5) return;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774

      const drop = document.createElement("div");
      drop.classList.add("neon-drop");

<<<<<<< HEAD
      // Position on the grid lines (multiples of 100px)
      const gridWidth = 100;
=======
      const gridWidth = 250;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
      const randomLeftPosition =
        Math.floor(Math.random() * (window.innerWidth / gridWidth)) * gridWidth;
      drop.style.left = `${randomLeftPosition}px`;

<<<<<<< HEAD
      drop.style.animationDuration = `${Math.random() * 9 + 9}s`; // Randomize the animation duration
=======
      drop.style.animationDuration = `${Math.random() * 9 + 9}s`;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774

      const heroContainer = document.querySelector(".hero-container");
      if (heroContainer) {
        heroContainer.appendChild(drop);
        currentDrops += 1;

        setTimeout(() => {
          drop.remove();
          currentDrops -= 1;
        }, 12000);
      }
    };

    const createHorizontalNeonDrop = () => {
<<<<<<< HEAD
      if (currentHorizontalDrops >= 5) return; // Limit the number of horizontal drops to 5
=======
      if (currentHorizontalDrops >= 5) return;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774

      const drop = document.createElement("div");
      drop.classList.add("neon-drop-horizontal");

<<<<<<< HEAD
      // Align the drop with the grid lines (multiples of 100px)
      const gridHeight = 100;
=======
      const gridHeight = 250;
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
      const randomTopPosition =
        Math.floor(Math.random() * (window.innerHeight / gridHeight)) *
        gridHeight;
      drop.style.top = `${randomTopPosition}px`;

      drop.style.animationDuration = `20s`;
      const heroContainer = document.querySelector(".hero-container");
      if (heroContainer) {
        heroContainer.appendChild(drop);
        currentHorizontalDrops += 1;

        setTimeout(() => {
          drop.remove();
          currentHorizontalDrops -= 1;
        }, 20000);
      }
    };

<<<<<<< HEAD
    // Create neon drops at intervals
=======
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
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
<<<<<<< HEAD
    <div className="hero-container relative min-h-screen bg-gradient-primary">
      <div className="absolute inset-0 bg-grid-pattern ">
        <div className="text-5xl text-center text-black-70 mx-auto z-10">
          Bangladesh 2.0
        </div>
      </div>
    </div>
=======
    <section
      id="home"
      className="hero-container relative min-h-screen bg-white-15 "
    >
      <div className="absolute inset-0 bg-grid-pattern">
        <div className="space-y-14 pt-11 z-20">
          <div className="flex items-center justify-center w-full h-full flex-col gap-8">
            {/* Custom Cursor Hover Effect for the h1 tag */}
            <CursorHover
              hoverScale={6} // Adjust scale as per your design
              cursorSize="w-20 h-20 -mt-10 -ml-10 " // Example size for the custom cursor
              customClass="bg-[#ffff] mix-blend-difference p-10 pointer-events-none" // Custom style for the cursor
              customCursorContent={
                <div className="bg-[#ffff] w-full h-full rounded-full "></div>
              }
            >
              <h1 className="text-center mx-auto text-[clamp(18px,3vw,50px)] font-semibold text-black-80">
                Innovative Solutions For Your <br /> E- Commerce{" "}
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
              background3dclass={`rotate-y-20  bg-white border border-[#ff1810] group-hover:rotate-y-23 rounded-[5px]`}
              textClasss="text-white text-[clamp(12px,3vw,16px)] font-normal [letter-spacing:1px]"
              mainButtonDiv="rotate-y-23 group-hover:rotate-y-23 rounded-[5px]"
              boldText="$90"
              boldTextClass="font-bold text-[clamp(12px,3vw,16px)] "
            />
          </div>
          <div className="flex items-center justify-center w-full rounded-md overflow-hidden">
            <CursorHover
              hoverScale={1} // Adjust the scale for the cursor
              cursorSize="w-20 h-20 flex -ml-10 -mt-10" // Example size for the custom cursor
              customClass="bg-transparent" // Optional custom style
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
              {/* The content that will trigger the hover */}
            </CursorHover>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
  );
};

export default Hero;
