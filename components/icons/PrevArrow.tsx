import React from "react";
import NextArrow from "./NextArrow";

const PrevArrow: React.FC = () => {
  return (
    <div className="-rotate-180">
      <NextArrow />
    </div>
  );
};
export default PrevArrow;
