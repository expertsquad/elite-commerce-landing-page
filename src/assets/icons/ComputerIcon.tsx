import Image from "next/image";
import React from "react";
import ComputerIconImage from "@/assets/images/computerIcon.svg";

const ComputerIcon = () => {
  return (
    <Image
      src={ComputerIconImage}
      alt="Computer Icon"
      width={30}
      height={30}
      className="object-cover"
    />
  );
};

export default ComputerIcon;
