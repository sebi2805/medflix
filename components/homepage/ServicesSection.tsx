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
    <div className="bg-whiteBackground min-h-screen flex items-center">
      <div className="container mx-auto md:px-4">
        <div className="w-screen h-screen md:hidden overflow-hidden">
          <CarouselWrapper title={"Servicii"}>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Service 1"
                price={99}
                benefits={["Benefit 1", "Benefit 2", "Benefit 3"]}
              />
            </div>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Service 2"
                price={199}
                benefits={["Benefit A", "Benefit B", "Benefit C"]}
              />
            </div>
            <div className="px-1" id="carousel-package">
              <ServiceCard
                title="Service 3"
                price={299}
                benefits={["Benefit X", "Benefit Y", "Benefit Z"]}
              />
            </div>
          </CarouselWrapper>
        </div>
        <div
          className="container mx-auto md:flex justify-center hidden"
          ref={cardsRef}
        >
          <ServiceCard
            title="Service 1"
            price={99}
            benefits={["Benefit 1", "Benefit 2", "Benefit 3"]}
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(-100%)",
              opacity: isVisible ? 1 : 0,
            }}
          />

          <ServiceCard
            title="Service 2"
            price={199}
            benefits={["Benefit A", "Benefit B", "Benefit C"]}
            bigger
            style={{
              transform: isVisible
                ? "scale(1.2) translateY(0)"
                : "scale(1) translateY(100%)",
              opacity: isVisible ? 1 : 0,
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
              zIndex: 1,
            }}
          />

          <ServiceCard
            title="Service 3"
            price={299}
            benefits={["Benefit X", "Benefit Y", "Benefit Z"]}
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(100%)",
              opacity: isVisible ? 1 : 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;