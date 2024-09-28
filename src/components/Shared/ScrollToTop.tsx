"use client";
import { IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect, Fragment } from "react";
import Button from "./Button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true); // Show the button after scrolling down 200px
    } else {
      setIsVisible(false); // Hide the button if scrolled up
    }
  };

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return (
    <Fragment>
      {isVisible && (
        <div onClick={scrollToTop} className="fixed bottom-10 right-10 z-50">
          <Button
            mainClass="font-medium text-white border border-black-10  p-3 bg-gradient-primary w-full md:w-auto"
            stripHoverEffect={true}
            animatationThree={true}
            animatationThreeClss="bg-gradient-secondary"
            iconFourTrue={true}
            iconFour={
              <div className="">
                <IconChevronUp />
              </div>
            }
          />
        </div>
      )}
    </Fragment>
  );
};

export default ScrollToTopButton;
