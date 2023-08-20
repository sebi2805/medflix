import { useEffect, useRef } from "react";

interface SectionProps {
  position?: "left" | "right";
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description, position }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={
        "flex my-8 items-center justify-between h-1/2 w-full " +
        (position === "left"
          ? " flex-col md:flex-row "
          : " flex-col md:flex-row-reverse ")
      }
    >
      {/* <div className="relative w-full md:w-1/2 h-[200px] rounded-[16px]"> */}
      {/* <Image
          src={imageSrc}
          alt="section-image"
          fill
          style={{ objectFit: "cover", borderRadius: "16px" }}
          className={`section-image-${position} mr-0 md:mr-4 absolute top-0`}
        /> */}
      {/* </div> */}
      <div className={`section-text-${position} w-full md:w-1/2 px-4`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
