"use client";
import React, { useEffect } from "react";

const BgNionLine = () => {
  useEffect(() => {
    let currentDrops = 0;
    let currentHorizontalDrops = 0;

    const createVerticalNeonDrop = () => {
      if (currentDrops >= 5) return;

      const drop = document.createElement("div");
      drop.classList.add("neon-drop");

      const gridWidth = 50;
      const randomLeftPosition =
        Math.floor(Math.random() * (window.innerWidth / gridWidth)) * gridWidth;
      drop.style.left = `${randomLeftPosition}px`;

      drop.style.animationDuration = `${Math.random() * 9 + 9}s`;

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
      if (currentHorizontalDrops >= 5) return; // Limit the number of horizontal drops to 5

      const drop = document.createElement("div");
      drop.classList.add("neon-drop-horizontal");

      // Align the drop with the grid lines (multiples of 50px)
      const gridHeight = 50;
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

    // Create neon drops at intervals
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
    <div className="hero-container relative min-h-screen ">
      <div className="absolute inset-0 bg-grid-pattern opacity-20">
        Hero componets
      </div>
    </div>
  );
};

export default BgNionLine;
