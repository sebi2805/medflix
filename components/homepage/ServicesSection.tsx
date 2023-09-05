"use client";
import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import CarouselWrapper from "../common/CarouselWrapper";

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-whiteBackground md:min-h-screen flex items-center">
      <div className="container mx-auto md:px-4">
        <div className="w-screen md:h-screen md:hidden overflow-hidden">
          <CarouselWrapper title={"Servicii"}>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Parcurgerea materialelor, grup"
                price={40}
                benefits={[
                  "Parcurgerea celor 11 capitole",
                  "Libertatea de a alege capitolele",
                ]}
              />
            </div>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Rezolvare testelor, particular"
                price={60}
                benefits={[
                  "Rezolvarea testelor si examenelor din anii trecuti",
                  "Explicarea raspunsurilor",
                ]}
              />
            </div>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Parcurgerea materialelor, particular"
                price={50}
                benefits={[
                  "Consolidarea cunostintelor pentru grile",
                  "Access materiale",
                ]}
              />
            </div>
          </CarouselWrapper>
        </div>
        <div
          className="container mx-auto md:flex justify-center hidden"
          ref={cardsRef}
        >
          <ServiceCard
            title="Parcurgerea materialelor, grup"
            price={50}
            benefits={[
              "Parcurgerea celor 11 capitole",
              "Libertatea de a alege capitolele",
            ]}
          />

          <ServiceCard
            title="Rezolvare testelor, particular"
            price={70}
            benefits={[
              "Rezolvarea testelor si examenelor din anii trecuti",
              "Explicarea raspunsurilor",
            ]}
          />

          <ServiceCard
            title="Parcurgerea materialelor, particular"
            price={60}
            benefits={[
              "Consolidarea cunostintelor pentru grile",
              "Access materiale",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
