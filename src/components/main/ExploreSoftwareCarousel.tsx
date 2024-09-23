import React from "react";
import InfinityLoopFour from "../infinityLoop/InfinityLoopFour";
import InfinityLoopTwo from "../infinityLoop/InfinityLoopTwo";
import InfinityLoopThree from "../infinityLoop/InfinityLoopThree";

const ExploreSoftwareCarousel = () => {
  return (
    <div className="space-y-3">
      {" "}
      <InfinityLoopFour />
      <InfinityLoopTwo />
      <InfinityLoopThree />
      <InfinityLoopTwo />
    </div>
  );
};

export default ExploreSoftwareCarousel;
