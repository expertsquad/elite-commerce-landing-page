<<<<<<< HEAD
=======
import Infinity from "@/components/hero/Infinity";
import BtnButton from "@/components/Shared/BtnButton";
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
import Button from "@/components/Shared/Button";
import Button3d from "@/components/Shared/Button3d";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const Nizam = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 bg-black-70 py-12">
      <Button3d
        button3dMainClass="perspective-180"
        buttonText="hello me"
        showHoverText={true}
        background3dclass={`rotate-y-20  bg-white border border-[#ff1810] group-hover:rotate-y-23`}
        textClasss="text-white text-[clamp(12px,3vw,16px)]"
        mainButtonDiv="rotate-y-23 group-hover:rotate-y-23"
        boldText="$90"
        boldTextClass="font-bold text-[clamp(12px,3vw,16px)]"
      />
      <Button
        mainClass="font-medium  text-white bg-gradient-primary"
        stripHoverEffect={true}
        iconOne={<IconArrowRight stroke={2} />}
        iconTwo={<IconArrowRight stroke={2} />}
<<<<<<< HEAD
        buttonText="my Name is nizam"
        buttonTextClass="text-white text-[clamp(12px,3vw,16px)]"
      />
=======
        // animatationOne={true}
        // animatationOneClass="bg-gradient-secondary"
        // animatationTwo={true}
        // animatationTwoClass=" bg-gradient-secondary"
        // animatationThree={true}
        // animatationThreeClss="bg-gradient-primary"
        // animatationFour={true}
        // animatationFourClass="bg-gradient-secondary"
        // animatationFive={true}
        // animatationFiveClass="bg-gradient-secondary"
        // animatationSix={true}
        // animatationSixClass="bg-gradient-secondary"
        animationSeven={true}
        animationSevenClass="bg-gradient-secondary"
        buttonText="my name is nizam"
        buttonTextClass="text-white text-[clamp(12px,3vw,16px)]"
      />

      <BtnButton />

      <Infinity />
>>>>>>> 2716a2abf474b7ed667d7a33a29716bde4b90774
    </div>
  );
};

export default Nizam;
