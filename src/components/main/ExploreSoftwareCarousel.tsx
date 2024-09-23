import React from "react";
<<<<<<< HEAD

const ExploreSoftwareCarousel = () => {
  return <div>Explore Software Carousel</div>;
=======
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
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
};

export default ExploreSoftwareCarousel;
