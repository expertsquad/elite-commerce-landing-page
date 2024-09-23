"use client";
import React, { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

// Dummy data for testimonials
const testimonials = [
  {
    name: "John Doe",
    comment: "Great experience and support.",
    rating: 4,
    img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John Dfgsdoe",
    comment: "Amazing service and friendly staff.",
    rating: 5,
    img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John sgfsdf",
    comment: "Highly recommended!",
    rating: 3,
    img: "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smghfgith",
    comment: "Fantastic experience!",
    rating: 4,
    img: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Johhjghfgnson",
    comment: "Loved the experience!",
    rating: 5,
    img: "https://images.pexels.com/photos/27568669/pexels-photo-27568669/free-photo-of-a-person-holding-a-samsung-galaxy-s20-with-the-app-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael sfgsd",
    comment: "Will come back again.",
    rating: 4,
    img: "https://images.pexels.com/photos/15940011/pexels-photo-15940011/free-photo-of-close-up-of-a-smartphone-displaying-a-conversation-with-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael ertser",
    comment: "Excellent support!",
    rating: 3,
    img: "https://images.pexels.com/photos/12203594/pexels-photo-12203594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael dfghdf",
    comment: "Very satisfied with the service.",
    rating: 4,
    img: "https://images.pexels.com/photos/9213716/pexels-photo-9213716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Jotghdfghhnson",
    comment: "A wonderful experience!",
    rating: 5,
    img: "https://images.pexels.com/photos/28411653/pexels-photo-28411653/free-photo-of-tunisian-seaman-fixing-an-engine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [hover, setHover] = useState(false);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (!hover) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
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
      {/* Testimonial slides */}
      <div className="flex justify-center items-center space-x-4 ">
        {Array.from({ length: 9 }).map((_, i) => {
          const index =
            (currentIndex + i - 4 + totalTestimonials) % totalTestimonials;

          return (
            <div
              key={index}
              className={`w-[100px] h-[100px] flex flex-col items-center transition-transform duration-700 ease-in-out ${
                index === currentIndex
                  ? "scale-110 transition-transform duration-700 ease-in-out z-10"
                  : index === (currentIndex + 1) % totalTestimonials ||
                    index ===
                      (currentIndex - 1 + totalTestimonials) % totalTestimonials
                  ? "scale-95 transition-transform duration-700 ease-in-out opacity-60"
                  : index === (currentIndex + 2) % totalTestimonials ||
                    index ===
                      (currentIndex - 2 + totalTestimonials) % totalTestimonials
                  ? "scale-75 transition-transform duration-700 ease-in-out opacity-60"
                  : index === (currentIndex + 3) % totalTestimonials ||
                    index ===
                      (currentIndex - 3 + totalTestimonials) % totalTestimonials
                  ? "scale-50 transition-transform duration-700 ease-in-out opacity-60"
                  : index === (currentIndex + 4) % totalTestimonials ||
                    index ===
                      (currentIndex - 4 + totalTestimonials) % totalTestimonials
                  ? "scale-50 transition-transform duration-700 ease-in-out opacity-60"
                  : ""
              }`}
            >
              <div className="rounded-full w-full h-full flex items-center justify-center ">
                <div
                  className={`w-[100px] h-[100px] mx-auto relative shrink-0 my-7 ${
                    index === currentIndex
                      ? "border border-primary-light rounded-full"
                      : ""
                  }`}
                >
                  <Image
                    src={testimonials[index].img}
                    alt={testimonials[index].name}
                    className="rounded-full object-cover border-dashed border"
                    fill
                    sizes="(max-width: 100px) 5vw, 10vw"
                  />
                </div>
              </div>
              {index === currentIndex && (
                <div className="flex justify-between items-center">
                  {/* Left Arrow */}
                  <button className="hidden md:block" onClick={prevSlide}>
                    <IconChevronLeft size={32} />
                  </button>
                  {/* comments and ratings with name */}

                  <div className="text-center mt-20 text-primary md:w-1/2 w-full ">
                    <h3 className="text-lg font-bold">
                      {testimonials[index].name}
                    </h3>
                    <p className="text-sm">{testimonials[index].comment}</p>
                  </div>
                  {/* Right Arrow */}
                  <button className="hidden md:block" onClick={nextSlide}>
                    <IconChevronRight size={32} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TestimonialCarousel;
