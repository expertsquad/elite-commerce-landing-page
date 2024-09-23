import Image from "next/image";
import React from "react";
import KnowledgePowerIconImage from "@/assets/images/knowledgePowerIcon.svg";

const KnowledgePowerIcon = () => {
  return (
    <Image
      src={KnowledgePowerIconImage}
      alt="knowledgePowerIcon"
      width={30}
      height={30}
    />
  );
};

export default KnowledgePowerIcon;
