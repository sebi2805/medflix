import React from "react";
import { MFButton } from "../common/MFButton";
import Medal from "../icons/Medal";
import ContactModal from "./ContactModal";

interface ServiceCardProps {
  title: string;
  price: number;
  benefits: string[];
  bigger?: boolean;

  style?: React.CSSProperties;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  benefits,
  bigger = false,
  style,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const cardBaseClasses =
    "border rounded-lg p-8 m-4 shadow-lg transition-all duration-500 transform bg-gradient-to-tr from-darkGreen-100 to-darkGreen-300 hover:scale-105";
  const cardSizeClasses = bigger
    ? "w-96 h-120 md:w-96 md:h-140"
    : "w-80 h-96 md:w-80 md:h-120";

  const combinedClasses = `${cardBaseClasses} ${cardSizeClasses}`;

  return (
    <div className={combinedClasses} style={style}>
      {/* Display icon if provided */}
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <p className="text-4xl font-semibold mb-4">${price}</p>
          <hr className="mb-4 border-t-2 border-purple-400 w-2/3 mx-auto" />{" "}
        </div>
        <div className="mb-4">
          <Medal />
        </div>
      </div>
      {/* Divider */}
      <ul className="mb-4 flex-1">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="mb-2 text-lg font-medium">
            {benefit}
          </li>
        ))}
      </ul>
      <MFButton onClick={() => setIsModalOpen(true)}>Choose Plan</MFButton>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Full width button */}
    </div>
  );
};
