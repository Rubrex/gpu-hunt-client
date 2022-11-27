import React from "react";

const PrimaryButton = ({
  children,
  type,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      type={type ? type : ""}
      onClick={onClick}
      disabled={disabled}
      className={`
      ${disabled ? "bg-gray-200" : "bg-primary"}
      ${!disabled && "hover:ring-2"}
       active:bg-orange-600 ring-primary transition-all text-white py-1 px-3 rounded-md border-2 border-white
       font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
