"use client";
import React from "react";
import { MFButton } from "../common/MFButton";
import Image from "next/image";
const ContactMe: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleContactSubmit = () => {
    window.location.href = `mailto:youremail@example.com?subject=Contact from ${email}&body=${message}`;
  };

  return (
    <div className="flex h-[calc(100vh-4em)] w-screen flex-col md:flex-row">
      {/* Left side with image */}
      <div className="w-full md:w-1/2 flex h-1/2 md:h-full relative justify-center items-center bg-gray-100">
        <Image
          src="/hero.jpg"
          alt="Descriptive Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full  flex flex-col justify-center px-12 md:p-12">
        <h1 className="text-2xl mb-6 font-bold">Contacteaza-ma</h1>

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          placeholder="Emailul tau..."
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message:
        </label>
        <textarea
          placeholder="Mesajul tau.."
          id="message"
          name="message"
          rows={4}
          className="mt-1 p-2 w-full border rounded-md mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="flex justify-between items-center mt-4">
          <a
            href="https://wa.me/yourPhoneNumber"
            className="text-green-500 hover:underline"
          >
            Chat on WhatsApp
          </a>
          <MFButton onClick={handleContactSubmit}>Trimite Email</MFButton>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
