import Image from "next/image";
import earthLineLeft from "@/assets/images/earthLineLeft.svg";
import eartLeft from "@/assets/images/earthLeft.svg";
import earthLineRight from "@/assets/images/earthLineRight.svg";
import earthRight from "@/assets/images/earthRight.svg";

const page = () => {
  return (
    <div className="w-full h-screen bg-blue-light p-40 ">
      {/* left animation */}
      <div className="relative ">
        <div className="w-fit absolute">
          <Image
            alt="Hero amination"
            src={earthLineLeft}
            height={190}
            width={190}
            className="custom-animation-rotate"
          />
        </div>
        <div className="w-fit absolute top-0 left-12 ">
          <Image
            alt="Hero amination"
            src={eartLeft}
            height={80}
            width={80}
            className="custom-animation-360deg-opacity"
          />
        </div>
      </div>
      {/* animation right */}

      <div className="relative ">
        <div className="w-fit absolute top-0 right-0">
          <Image
            alt="Hero amination"
            src={earthLineRight}
            height={190}
            width={190}
            className="custom-animation-rotate"
          />
        </div>
        <div className="w-fit absolute top-0 right-12 ">
          <Image
            alt="Hero amination"
            src={earthRight}
            height={80}
            width={80}
            className="custom-animation-360deg-opacity-right"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
