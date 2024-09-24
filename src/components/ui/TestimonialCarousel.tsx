"use client";
import React, { useState, useEffect } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { testimonials } from "@/ulits/testimonials";
import StarRating from "./StarRating";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [hover, setHover] = useState(false);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (!hover) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
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
    <div className="relative w-full mx-auto py-10 overflow-hidden">
      {/* Testimonial slides */}
      <div className="flex justify-center items-center flex-col gap-10 w-full">
        <div className="flex justify-center items-center gap-7 w-full overflow-hidden h-[200px]">
          {Array.from({ length: 9 }).map((_, i) => {
            const index =
              (currentIndex + i - 4 + totalTestimonials) % totalTestimonials;

            return (
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                key={index}
                className={`flex flex-col items-center transition-all duration-1000 ease-in-out  ${
                  index === currentIndex
                    ? "scale-125 z-10" // Active item
                    : index === (currentIndex + 1) % totalTestimonials ||
                      index ===
                        (currentIndex - 1 + totalTestimonials) %
                          totalTestimonials
                    ? "scale-95 opacity-40" // 1st on either side
                    : index === (currentIndex + 2) % totalTestimonials ||
                      index ===
                        (currentIndex - 2 + totalTestimonials) %
                          totalTestimonials
                    ? "scale-75 opacity-40" // 2nd on either side
                    : index === (currentIndex + 3) % totalTestimonials ||
                      index ===
                        (currentIndex - 3 + totalTestimonials) %
                          totalTestimonials
                    ? "scale-50 opacity-40" // 3rd on either side
                    : index === (currentIndex + 4) % totalTestimonials ||
                      index ===
                        (currentIndex - 4 + totalTestimonials) %
                          totalTestimonials
                    ? "scale-50 opacity-40" // 4th on either side
                    : "" // Default size
                }`}
              >
                <div className="rounded-full flex items-center justify-center">
                  <div
                    className={`md:w-[100px] md:h-[100px] w-[60px] h-[60px] mx-auto relative shrink-0 my-7 ${
                      index === currentIndex
                        ? "border border-secondary rounded-full"
                        : ""
                    }`}
                  >
                    <Image
                      src={testimonials[index].img}
                      alt={testimonials[index].name}
                      className="rounded-full object-cover"
                      fill
                      sizes="(max-width: 100px) 5vw, 10vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {currentIndex + 1 && (
          <div className=" flex justify-between items-center gap-9 md:h-[300px] h-full md:w-8/12 w-full mx-auto">
            {/* Left Arrow */}
            <div className="hidden md:block animate-slide-in-left ">
              <button
                className="border border-primary hover:border-secondary rounded-full text-primary hover:text-secondary h-[45px] w-[45px] flex justify-center items-center transition-all duration-300 ease-in-out hover:animate-pulse"
                onClick={prevSlide}
              >
                <IconArrowLeft stroke={1} size={32} />
              </button>
            </div>
            {/* Comments and ratings with name */}
            <div className="text-center w-full md:w-10/12 border border-black-10 h-[300px] flex flex-col justify-center items-center p-7 rounded-2xl">
              <div className="w-full flex justify-center items-center flex-col gap-4 border-b border-black-10 mb-5 pb-5 ">
                <StarRating rating={testimonials[currentIndex]?.rating} />
                <h3 className="text-2xl ">
                  {" "}
                  {testimonials[currentIndex]?.about}
                </h3>
              </div>
              <p className="text-sm line-clamp-3 ">
                {testimonials[currentIndex]?.comment}
              </p>
              <h3 className="text-lg font-bold my-3">
                - {testimonials[currentIndex]?.name}
              </h3>
            </div>

            {/* Right Arrow */}
            <div className="hidden md:block animate-slide-in-right ">
              <button
                className="border border-primary hover:border-secondary rounded-full text-primary hover:text-secondary h-[45px] w-[45px] flex justify-center items-center transition-all duration-300 ease-in-out hover:animate-pulse"
                onClick={nextSlide}
              >
                <IconArrowRight stroke={1} size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
