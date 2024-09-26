"use client";
import React, { useEffect, useState } from "react";

const words = ["Loading", "Loading.", "Loading..", "Loading..."];

const Typewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentWordIndex];

      if (isDeleting) {
        // Deleting mode
        setCurrentText(word.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
        }
      } else {
        // Typing mode
        setCurrentText(word.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentWordIndex, isDeleting]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">
        {currentText}
      </h1>
    </div>
  );
};

export default Typewriter;
