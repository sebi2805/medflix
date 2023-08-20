"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import useChapter from "./useChapter";
import { sections } from "./utils";

const ChapterSection: React.FC = () => {
  const chapterRef = useRef(null);
  const { scrollPercentage } = useChapter(chapterRef);

  const gradientStyle = {
    background: `linear-gradient(90deg, #588577 ${scrollPercentage}%, #ececec ${scrollPercentage}%)`,
  };

  return (
    <div className="w-full flex items-center flex-col h-full" ref={chapterRef}>
      <nav className="flex justify-between mb-6 w-full max-w-[1000px] sticky top-[64px] md:top-[48px] pt-[12px] pb-[12px] z-10 bg-whiteBackground">
        <div className="absolute inset-y-1/4 mt-[8px] h-[12px] w-full px-18 flex justify-center">
          <div className="w-full h-full z-0" style={gradientStyle}></div>
        </div>
      </nav>

      <div className="flex justify-between mb-6 w-full max-w-[1000px] h-full flex-col flex-grow items-stretch overflow-x-hidden">
        {sections.map((section, index) => (
          <SectionWrapper key={index + "section"} {...section} />
        ))}
      </div>
    </div>
  );
};

export default ChapterSection;
