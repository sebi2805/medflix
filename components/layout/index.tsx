import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LayoutWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-start w-full justify-start p-0">
      <div className="w-full flex-grow flex flex-col items-start justify-start">
        <Navbar />
        <div className="flex w-full min-w-0 items-start mb-2 pr-0 flex-col">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default LayoutWrapper;
