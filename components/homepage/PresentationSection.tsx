"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CristinaSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [typeText, setTypeText] = useState("");

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
      // Adjust as per your needs
      const text =
        "Cristina, 20 years old... intrat la buget la facultate... tutoring others..."; // Update your text here
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setTypeText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [scrollPosition]);

  return (
    <section className="min-h-[calc(100vh-4em)] whiteBackground flex flex-col-reverse md:flex-row items-start  ">
      <div className="flex max-w-5xl w-full">
        {/* Text part */}
        <div className="flex-1 p-6">
          <div className="text-3xl w-72">{typeText}</div>
        </div>

        {/* Image part */}
        <div className="flex-1 p-6 sticky top-0">
          <Image
            src="/placeholder.jpg"
            alt="Cristina's Picture"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CristinaSection;
