import Image from "next/image";
import earthLineLeft from "@/assets/images/earthLineLeft.svg";
import eartLeft from "@/assets/images/earthLeft.svg";

const HeroLeftAnimation = () => {
  return (
    <div className="absolute top-28 lg:left-[15%] left-[10%] hidden md:block  ">
      <div className="w-fit relative ">
        <Image
          alt="Hero animation"
          src={earthLineLeft}
          height={180}
          width={180}
          className="custom-animation-rotate"
        />
        <div className="w-fit absolute top-0 left-10 ">
          <Image
            alt="Hero animation"
            src={eartLeft}
            height={80}
            width={80}
            className="custom-animation-360deg-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLeftAnimation;
