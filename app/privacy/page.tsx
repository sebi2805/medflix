"use client";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission here...
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="prose prose-darkGreen mx-auto w-full max-w-3xl p-8 rounded-lg bg-white shadow text-left">
        <h1 className="text-3xl text-center font-bold mb-8">Privacy Policy</h1>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            Your privacy is important to us. It is our policy to respect your
            privacy and comply with any applicable law and regulation regarding
            any personal information we may collect about you, including across
            our website, [insert website name], and other sites we own and
            operate.
          </p>
        </div>

        <h2 className="text-2xl mt-6 mb-4">Information We Collect</h2>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            Information we collect includes both information you knowingly and
            actively provide us when using or participating in any of our
            services and promotions, and any information automatically sent by
            your devices in the course of accessing our products and services.
          </p>
        </div>

        <h3 className="text-xl mt-4 mb-2">Log Data</h3>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            When you visit our website, our servers may automatically log the
            standard data provided by your web browser. It may include your
            device’s Internet Protocol (IP) address, your browser type and
            version, the pages you visit, the time and date of your visit, the
            time spent on each page, other details about your visit, and
            technical details that occur in conjunction with any errors you may
            encounter.
          </p>
        </div>

        <h3 className="text-xl mt-4 mb-2">Personal Information</h3>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            We may ask for personal information which may include one or more of
            the following:
          </p>

          <ul className="list-disc pl-5">
            <li>Name</li>
            <li>Email</li>
            <li>Profile picture</li>
          </ul>
        </div>

        <h2 className="text-2xl mt-6 mb-4">Use of Your Personal Information</h2>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">We may use your personal information to:</p>

          <ul className="list-disc pl-5">
            <li>Enable user-to-user communications</li>
            <li>Send marketing and promotional communications</li>
            <li>Personalize our website for you</li>
          </ul>
        </div>

        <h2 className="text-2xl mt-6 mb-4">
          Your Rights and Controlling Your Personal Information
        </h2>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            You always retain the right to withhold personal information from
            us, with the understanding that your experience of our website may
            be affected. We will not discriminate against you for exercising any
            of your rights over your personal information.
          </p>
        </div>

        <h2 className="text-2xl mt-6 mb-4">Changes to This Policy</h2>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            We may update our privacy policy from time to time to reflect
            changes to our information practices. We encourage you to
            periodically review this page for the latest information on our
            privacy practices.
          </p>
        </div>

        <h2 className="text-2xl mt-6 mb-4">Contact Us</h2>

        <div className="pl-5 border-l-4 border-darkGreen-400">
          <p className="mb-4">
            For any questions or concerns regarding your privacy, you may
            contact us using the following details:
          </p>
        </div>
        <h2 className="text-2xl mt-6 mb-4">Contact Form</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Numele tau..."
            onChange={handleChange}
            value={formData.name}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Emailul tau..."
            onChange={handleChange}
            value={formData.email}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Mesajul tau..."
            //@ts-ignore
            onChange={handleChange}
            value={formData.message}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <a
            href={`mailto:admin@tantor-cards.com?subject=${
              "I need help, " + formData.name
            }&body=${formData.message}%20goes%20here`}
          >
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-darkGreen-600 hover:bg-darkGreen-700"
            >
              Send Message
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
