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
            className={`font-serif text-center text-xl md:text-4xl transition-all duration-700 transform ${textAnimationClass}`}
          >
            Mă numesc Cristina și am 20 de ani. După ce am reușit să intru la
            buget la Facultatea de Medicină, am decis să împărtășesc
            cunoștințele mele cu cei care aspiră să calce pe aceleași urme. Cred
            cu tărie că, cu dedicație și ghidarea potrivită, oricine poate
            atinge succesul.
          </div>
        </div>

        {/* Image part */}
        <div className="flex-1 p-6 sticky top-0 h-[50vh] md:h-screen w-screen md:w-[50vh]">
          <Image
            src="/hero-2.jpg"
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
