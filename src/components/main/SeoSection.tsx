import Image from "next/image";
import seoImg from "@/assets/images/seo.svg";
import SeoCollapsibleItem from "../ui/SeoCollapsibleItem";

const SeoSection = () => {
  return (
    <section className="relative">
      {/* blur ball */}
      <div className="h-[180px] w-[180px] bg-primary blur-[230px] absolute top-0 left-0"></div>
      <div className="main-container flex items-center justify-center flex-col-reverse lg:gap-12 md:gap-6 gap-10 md:flex-row">
        {/* left div */}
        <div className="lg:w-5/12 md:w-1/2 w-full h-[500px]">
          <h2 className="[font-size:clamp(20px,4.5vw,30px)] font-bold text-start py-5">
            Optimum Online Impact with Precision{" "}
            <span className="text-primary">SEO</span>
          </h2>
          <SeoCollapsibleItem />
        </div>
        {/* right div with wave animation */}
        <div className="">
          <Image
            alt="seo"
            src={seoImg}
            width={500}
            height={500}
            className="animate-wave"
          />
        </div>
      </div>
      {/* blur ball */}
      <div className="h-[180px] w-[180px] bg-primary blur-[230px] absolute bottom-0 right-0"></div>
    </section>
  );
};

export default SeoSection;
