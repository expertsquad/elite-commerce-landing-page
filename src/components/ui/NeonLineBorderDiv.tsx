import React from "react";

const NeonLineBorderDiv = () => {
  return (
    <div className="relative h-64 w-64 p-4 bg-black">
      <div className="absolute inset-0 border-t-4 border-l-4 border-neon border-opacity-100 animate-pulse"></div>
      <p className="text-white text-lg">Neon Border Div</p>
    </div>
  );
};

export default NeonLineBorderDiv;
