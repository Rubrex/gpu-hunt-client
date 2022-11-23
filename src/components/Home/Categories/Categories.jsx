import React from "react";
import underLine from "../../../assets/images/others/under_line.png";
import rtxLogo from "../../../assets/images/brands/rtx_logo.png";
import gtxLogo from "../../../assets/images/brands/gtx_logo.png";
import radeonLogo from "../../../assets/images/brands/amd_radeon.png";

const Categories = () => {
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
        <div className="justify-self-center hover:-translate-y-2 transition-all duration-300">
          <img
            className="max-w-[220px] md:max-w-[280px]"
            src={rtxLogo}
            alt=""
          />
        </div>
        <div className="justify-self-center hover:-translate-y-2 transition-all duration-300">
          <img
            className="max-w-[220px] md:max-w-[280px]"
            src={gtxLogo}
            alt=""
          />
        </div>
        <div className="justify-self-center hover:-translate-y-2 transition-all duration-300">
          <img
            className="max-w-[220px] md:max-w-[280px]"
            src={radeonLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
