import Image from "next/image";
import seoImg from "@/assets/images/seo.png";
import SeoCollapsibleItem from "../ui/SeoCollapsibleItem";

const SeoSection = () => {
  return (
    <div className="main-container flex items-center justify-center flex-col-reverse gap-12 md:flex-row">
      {/* left div */}
      <div className="md:w-1/2 w-full ">
        <h2 className="[font-size:clamp(20px,4.5vw,30px)] font-bold text-start py-5">
          Optimum Online Impact with Precision SEO
        </h2>

        <SeoCollapsibleItem />
      </div>
      {/* right div */}
      <div>
        <Image alt="seo" src={seoImg} width={500} height={500} />
      </div>
    </div>
  );
};

export default SeoSection;
