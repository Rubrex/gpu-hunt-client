import React from "react";
import underLine from "../../../assets/images/others/under_line.png";
import "react-photo-view/dist/react-photo-view.css";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import Loading from "../../Shared/Loading/Loading";

const Advertised = () => {
  // Load data for products [Allow only advertised products]
  const { data: productDetails, isLoading } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await fetch("products.json");
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mb-32">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-12">
          <span className="relative z-10">
            <img src={underLine} alt="" className="absolute -bottom-3  -z-10" />
            Advertised
          </span>{" "}
          Products
        </h2>
        <div>
          <PrimaryButton>Show All</PrimaryButton>
        </div>
      </div>

      {/* Categories  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
        {productDetails &&
          productDetails.map((eachProduct) => (
            <ProductCard key={eachProduct._id} productDetails={eachProduct} />
          ))}
      </div>
    </section>
  );
};

export default Advertised;
