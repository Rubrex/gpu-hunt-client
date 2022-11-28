import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/others/banner.png";

const HomeBanner = () => {
  const bannerOverlay = {
    backgroundImage: `linear-gradient(90deg, rgba(238,238,238,0.8799894957983193) 0%, rgba(242,242,242,0.5634628851540616) 100%), url(${bannerImg})`,
    height: "600px",
  };
  return (
    <div className="mb-32">
      <section style={bannerOverlay} className=" bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center gap-2 lg:gap-8 h-full md:ml-24">
          <h2 className="text-6xl font-bold text-gray-700">
            Welcome to <span className="text-primary">GPUHunt</span>
          </h2>
          <p className="text-3xl text-gray-700">Get you dream card today.</p>
          <Link
            to="/register"
            className="text-xl bg-orange-500 text-white w-24 rounded-md hover:bg-orange-400 transition-all "
          >
            Register
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
