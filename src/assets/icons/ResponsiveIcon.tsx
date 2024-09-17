import Image from "next/image";
import React from "react";
import ResponsiveIconImage from "@/assets/images/responsiveIcon.svg";

const ResponsiveIcon = () => {
  return (
    <Image
      src={ResponsiveIconImage}
      alt="responsiveIcon"
      width={30}
      height={30}
    />
  );
};

export default ResponsiveIcon;
