"use client";
import CalendarSection from "./CalendarSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <FirstSection />
      <SecondSection />
      <CalendarSection />
    </div>
  );
}
