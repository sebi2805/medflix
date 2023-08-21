import ChapterSection from "./Chapter";
import CountdownSection from "./CountdownSection";
import PresentationSection from "./PresentationSection";
import ServicesSection from "./ServicesSection";

export default function HomePage() {
  const targetDate = new Date("July 19, 2024 00:00:00");

  return (
    <div className="w-full bg-whiteBackground flex justify-center items-center flex-col">
      {/* Countdown Section */}
      <CountdownSection targetDate={targetDate} />
      <PresentationSection />
      <ServicesSection />
      <ChapterSection />
    </div>
  );
}
