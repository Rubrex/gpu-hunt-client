import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary active:bg-orange-600 transition-all text-white py-1 px-3 rounded-md border-2 border-white hover:ring-2 ring-primary font-medium">
      {children}
    </button>
  );
};

export default PrimaryButton;
