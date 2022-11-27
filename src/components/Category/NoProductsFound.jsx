import React from "react";
import emptyProduct from "../../assets/images/icons/noProducts.png";

const NoProductsFound = () => {
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <h2 className="text-2xl uppercase mb-4">No Products Found</h2>
      <img src={emptyProduct} className="mx-auto max-w-[300px]" alt="" />
    </div>
  );
};

export default NoProductsFound;
