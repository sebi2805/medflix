"use client";
import CalendarSection from "./CalendarSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <FirstSection />
      <SecondSection />
      <CalendarSection />
    </div>
  );
}
