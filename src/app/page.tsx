import AllFeature from "@/components/main/AllFeature";
import ExploreSoftwareCarousel from "@/components/main/ExploreSoftwareCarousel";
import Footer from "@/components/main/Footer";
import GetHelp from "@/components/main/GetHelp";
import Hero from "@/components/main/Hero";
import MobileOptimized from "@/components/main/MobileOptimized";
import PricingTable from "@/components/main/PricingTable";
import ServiceCarousel from "@/components/main/ServiceCarousel";
import ShowResponsive from "@/components/main/ShowResponsive";
import Technology from "@/components/main/Technology";
import Testimonial from "@/components/main/Testimonial";
import TopFeature from "@/components/main/TopFeature";
import WhyChooseElite from "@/components/main/WhyChooseElite";

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <WhyChooseElite />
      <AllFeature /> */}
      <TopFeature />
      {/* <ServiceCarousel /> */}
      <PricingTable />
      <ShowResponsive />
      {/* <Technology />
      <Testimonial />
      <MobileOptimized />
      <GetHelp />
      <ExploreSoftwareCarousel /> */}
      <Footer />
    </main>
  );
}
