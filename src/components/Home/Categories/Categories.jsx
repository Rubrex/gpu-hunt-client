import React from "react";
import underLine from "../../../assets/images/others/under_line.png";
import rtxLogo from "../../../assets/images/brands/rtx_logo.png";
import gtxLogo from "../../../assets/images/brands/gtx_logo.png";
import radeonLogo from "../../../assets/images/brands/amd_radeon.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/categories`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-10">
        <span className="relative z-10">
          <img src={underLine} alt="" className="absolute -bottom-3  -z-10" />
          Categories
        </span>
      </h2>
      {/* Categories  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div
            key={category._id}
            className="justify-self-center hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="max-w-[220px] md:max-w-[280px]"
              src={category.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
