"use client";
import React, { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

// Dummy data for testimonials
const testimonials = [
  {
    name: "John Doe",
    comment: "Great experience and support.",
    img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John Dfgsdoe",
    comment: "Amazing service and friendly staff.",
    img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John sgfsdf",
    comment: "Highly recommended!",
    img: "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smghfgith",
    comment: "Fantastic experience!",
    img: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Johhjghfgnson",
    comment: "Loved the experience!",
    img: "https://images.pexels.com/photos/27568669/pexels-photo-27568669/free-photo-of-a-person-holding-a-samsung-galaxy-s20-with-the-app-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael sfgsd",
    comment: "Will come back again.",
    img: "https://images.pexels.com/photos/15940011/pexels-photo-15940011/free-photo-of-close-up-of-a-smartphone-displaying-a-conversation-with-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael ertser",
    comment: "Excellent support!",
    img: "https://images.pexels.com/photos/12203594/pexels-photo-12203594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael dfghdf",
    comment: "Very satisfied with the service.",
    img: "https://images.pexels.com/photos/9213716/pexels-photo-9213716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Jotghdfghhnson",
    comment: "A wonderful experience!",
    img: "https://images.pexels.com/photos/28411653/pexels-photo-28411653/free-photo-of-tunisian-seaman-fixing-an-engine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(4); // Start with the middle testimonial (index 4)
  const [hover, setHover] = useState(false);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (!hover) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount or hover
    }
  }, [hover]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full mx-auto py-10"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Left Arrow */}
      <button
        className="absolute transform -translate-y-1/2 left-4 z-10 text-primary"
        onClick={prevSlide}
      >
        <IconChevronLeft size={32} />
      </button>

      {/* Testimonial slides */}
      <div className="flex justify-center items-center space-x-4 ">
        {Array.from({ length: 9 }).map((_, i) => {
          const index =
            (currentIndex + i - 4 + totalTestimonials) % totalTestimonials; // Wrap around the index

          return (
            <div
              key={index}
              className={`flex flex-col items-center transition-transform duration-700 ease-in-out ${
                index === currentIndex
                  ? "scale-110 z-10"
                  : "scale-80 opacity-60"
              }`}
              style={{
                width: "100px",
                height: "100px",
              }}
            >
              <div className="rounded-full w-full h-full border-2 border-primary flex items-center justify-center">
                <Image
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="rounded-full object-cover indent-0"
                  width={150}
                  height={150}
                />
              </div>
              {index === currentIndex && (
                <div className="text-center mt-20 text-primary ">
                  <h3 className="text-lg font-bold">
                    {testimonials[index].name}
                  </h3>
                  <p className="text-sm">{testimonials[index].comment}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 text-primary"
        onClick={nextSlide}
      >
        <IconChevronRight size={32} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
