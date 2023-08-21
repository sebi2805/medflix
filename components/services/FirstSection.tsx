import React from "react";
import Image from "next/image";
const FirstSection: React.FC = () => {
  return (
    <div className="w-screen flex items-center justify-center flex-col h-[500px] text-center relative">
      <h2
        className="text-3xl relative z-2 font-extrabold tracking-tight text-white sm:text-4xl"
        style={{ zIndex: 10 }}
      >
        Servicii
      </h2>
      <p
        className="mt-4 text-xl px-4 relative z-2 text-white"
        style={{ zIndex: 10 }}
      >
        Oferim servicii de pregătire pentru examenul de admitere la facultatea
        de medicină.
      </p>
      <Image
        src="/hero-4.jpeg"
        alt="hero"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
export default FirstSection;
