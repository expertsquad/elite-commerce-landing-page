import React from "react";

const FeaturesMenuItem = ({
  onClick,
  className,
  title,
  icon,
}: {
  onClick?: () => void;
  className?: string;
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className}  py-[clamp(10px,2.5vw,16px)] rounded-full px-[clamp(12px,2.5vw,20px)] flex items-center justify-center md:justify-start gap-[clamp(6px,2.5vw,6px)] font-medium [font-size:_clamp(12px,2.5vw,16px)] border cursor-pointer border-white bg-[#119F5B0D ] duration-300 transition-all hover:bg-gradient-primary hover:text-white`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default FeaturesMenuItem;
