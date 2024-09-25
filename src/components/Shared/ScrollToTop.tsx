"use client";
import { IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

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
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gradient-primary text-white p-3 rounded-full shadow-lg border border-black-10 transition duration-300 animate-bounce"
        >
          <IconChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
