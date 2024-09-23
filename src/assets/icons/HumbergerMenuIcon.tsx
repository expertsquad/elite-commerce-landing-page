import Image from "next/image";
import React from "react";
import HumbergerMenu from "@/assets/images/humburgerMenuIcon.svg";

const HumbergerMenuIcon = () => {
  return <Image src={HumbergerMenu} alt="menu" height={30} width={30} />;
};

export default HumbergerMenuIcon;
