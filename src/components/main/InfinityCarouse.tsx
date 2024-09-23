import React from "react";
import InfinityLoopTwo from "../infinityLoop/InfinityLoopTwo";
import InfinityLoopThree from "../infinityLoop/InfinityLoopThree";
import InfinityLoopFour from "../infinityLoop/InfinityLoopFour";

const InfinityCarouse = () => {
  return (
    <div className="space-y-2  md:space-y-4 main-container">
      <InfinityLoopFour />
      <InfinityLoopTwo />
      <InfinityLoopThree />
      <InfinityLoopTwo />
    </div>
  );
};

export default InfinityCarouse;
