"use client";
import { useState, useEffect } from "react";
import Spinner from "../common/Spinner";
import Image from "next/image";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface CountdownProps {
  targetDate: Date;
}
const formatTime = (value: number): string => {
  return value.toString().padStart(2, "0");
};
const CountdownSection: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = formatTime(Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = formatTime(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      );
      const minutes = formatTime(Math.floor((difference / (1000 * 60)) % 60));
      const seconds = formatTime(Math.floor((difference / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
      setIsLoaded(true);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  if (!timeLeft) {
    return;
  }
  return (
    <section className="flex items-center justify-center space-y-4 min-h-screen flex-col relative h-full w-full">
      <Image
        src={"/hero-3.jpg"}
        alt="hero-banner"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <h1 className="text-4xl font-bold text-white text-center z-2 relative">
        Countdown to the Big Day!
      </h1>

      <div className="flex space-x-6 items-center justify-center z-2 relative">
        {!isLoaded ? (
          <Spinner />
        ) : (
          <>
            <div>
              <p className="text-5xl font-bold text-white">{timeLeft.days}</p>
              <p className="text-white">Days</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white">{timeLeft.hours}</p>
              <p className="text-white">Hours</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white">
                {timeLeft.minutes}
              </p>
              <p className="text-white">Minutes</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white">
                {timeLeft.seconds}
              </p>
              <p className="text-white">Seconds</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default CountdownSection;
