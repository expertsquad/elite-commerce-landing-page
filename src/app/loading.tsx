import Typewriter from "@/components/Shared/TypeWriter";
import React from "react";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-98px)] w-full flex justify-center items-center flex-col gap-5">
      <Typewriter />
    </div>
  );
};

export default Loading;
