import AllFeature from "@/components/AllFeature";
import ExploreSoftwareCarousel from "@/components/ExploreSoftwareCarousel";
import Footer from "@/components/Footer";
import GetHelp from "@/components/GetHelp";
import Hero from "@/components/Hero";
import MobileOptimized from "@/components/MobileOptimized";
import PricingTable from "@/components/PricingTable";
import ServiceCarousel from "@/components/ServiceCarousel";
import ShowResponsive from "@/components/ShowResponsive";
import Technology from "@/components/Technology";
import Testimonial from "@/components/Testimonial";
import TopFeature from "@/components/TopFeature";
import WhyChooseElite from "@/components/WhyChooseElite";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseElite />
      <AllFeature />
      <TopFeature />
      <ServiceCarousel />
      <PricingTable />
      <ShowResponsive />
      <Technology />
      <Testimonial />
      <MobileOptimized />
      <GetHelp />
      <ExploreSoftwareCarousel />
      <Footer />
    </main>
  );
}
