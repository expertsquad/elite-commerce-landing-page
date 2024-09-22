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
        buttonText="my Name is nizam"
        buttonTextClass="text-white text-[clamp(12px,3vw,16px)]"
      />
    </div>
  );
};

export default Nizam;
