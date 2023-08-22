import React from "react";
const SecondSection: React.FC = () => {
  return (
    <div className="mt-12 max-w-3xl mx-auto grid gap-5 lg:grid-cols-2">
      {/* Service 1 */}
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              Meditații Grup
            </h3>
            <p className="mt-3 text-base text-gray-500">
              Alatura-te altor studenti pentru a face meditatii.
            </p>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              Parcurgerea Materialelor
            </h3>
            <p className="mt-3 text-base text-gray-500">
              Impreuna putem parcurge capitole necesare examenului.
            </p>
          </div>
        </div>
      </div>

      {/* ... Repeat similar blocks for other services */}
    </div>
  );
};
export default SecondSection;
