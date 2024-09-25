import React from "react";

const CustomEllipse = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} w-[180px] h-[180px]  opacity-[0.8] blur-[200px]`}
    ></div>
  );
};

export default CustomEllipse;
