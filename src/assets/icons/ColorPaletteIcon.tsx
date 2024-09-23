import React from "react";
import colorPallete from "@/assets/images/colorPaletteIcon.svg";
import Image from "next/image";
const ColorPaletteIcon = () => {
  return (
    <Image src={colorPallete} alt="color pallete" height={30} width={30} />
  );
};

export default ColorPaletteIcon;
