import React from "react";
import TestimonialCarousel from "../ui/TestimonialCarousel";
const Testimonial = () => {
  return (
    <section>
      <div></div>
      <div className="main-container">
        {/* section heading and description */}
        <div className=" flext items-center justify-center gap-7 text-center">
          <div>Testimonial</div>
          <h2 className="[font-size:clamp(20px,3.5vw,30px)] font-bold text-center">
            Our Customer Say About Our{" "}
            <span className="text-primary">product</span>
          </h2>
          <p>
            Choose us for dedicated customer support, regular updates and
            extended documentation.
          </p>
        </div>
        <div>
          <TestimonialCarousel />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonial;
