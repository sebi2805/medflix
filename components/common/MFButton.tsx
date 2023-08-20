import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Spinner from "./Spinner";

interface MFButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  isLoading?: boolean;
}

export const MFButton: React.FC<MFButtonProps> = ({
  children,
  onClick,
  className,
  isLoading,
  ...others
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "transition flex items-center justify-center p-2 hover:bg-darkGreen-500 rounded-md duration-200 ease-in-out transform bg-darkGreen-400 dark:bg-darkGreen-500 text-white text-sm sm:text-base hover:scale-101 active:scale-90 " +
        className
      }
      {...others}
    >
      {isLoading ? <Spinner /> : <>{children}</>}
    </button>
  );
};
