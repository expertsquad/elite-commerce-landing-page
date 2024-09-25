import React from "react";

const ServiceCarousel = () => {
  const allServices = [
    "Digital Solutions",
    "Full-Stack Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Development",
    "Native App Development",
    "Web Accessibility Solutions",
    "Online Business Development",
    "Web Application",
    "iOS Development",
    "Web Development Agency",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-secondary text-white">
      {/* First scrolling container */}
      <div className="flex space-x-16 animate-serviceloop-scroll w-full py-4 text-[clamp(20px,3vw,36px)]">
        {allServices.map((service, index) => (
          <div key={index} className="whitespace-nowrap">
            <h1>{service}</h1>
          </div>
        ))}
      </div>

      {/* Duplicate for infinite scroll effect */}
      <div
        className="absolute top-0 flex space-x-16 animate-serviceloop-scroll w-full py-4 text-[clamp(20px,3vw,36px)] left-[200%]"
        // style={{ left: "100%" }} // Start from the right for left scroll
      >
        {allServices.map((service, index) => (
          <div key={index} className="whitespace-nowrap">
            <h1>{service}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
