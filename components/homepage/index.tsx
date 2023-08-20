import CountdownSection from "./CountdownSection";
import PresentationSection from "./PresentationSection";

export default function HomePage() {
  const targetDate = new Date("December 25, 2023 00:00:00"); // Placeholder for Christmas

  return (
    <div className="w-full bg-whiteBackground flex justify-center items-center flex-col">
      {/* Countdown Section */}
      <CountdownSection targetDate={targetDate} />
      <PresentationSection />
    </div>
  );
}
