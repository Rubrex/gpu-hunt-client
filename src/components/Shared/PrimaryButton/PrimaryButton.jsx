import React from "react";

const PrimaryButton = ({ children, type, onClick, disabled = false }) => {
  return (
    <button
      type={type ? type : ""}
      onClick={onClick}
      disabled={disabled}
      className={` active:bg-orange-600 transition-all text-white py-1 px-3 rounded-md border-2 border-white
      ${!disabled && "hover:ring-2"}
      ${disabled ? "bg-gray-200" : "bg-primary"}


      ring-primary font-medium`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
