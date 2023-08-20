"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PresentationSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // New state

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 300) {
      setIsVisible(true);
    }
  }, [scrollPosition]);

  const textAnimationClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <section className="h-screen bg-darkGreen-200 w-full flex justify-center">
      <div className="flex max-w-5xl w-full flex-col md:flex-row h-full">
        {/* Text part */}
        <div className="flex-1 p-6">
          <div
            className={`font-serif text-xl md:text-4xl transition-all duration-700 transform ${textAnimationClass}`}
          >
            Cristina, 22 years old... intrat la buget la facultate... tutoring
            others...
          </div>
        </div>

        {/* Image part */}
        <div className="flex-1 p-6 sticky top-0 h-[50vh] md:h-screen w-screen md:w-[50vh]">
          <Image
            src="/placeholder.jpg"
            alt="Cristina's Picture"
            style={{ objectFit: "cover" }}
            fill
            className="rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
