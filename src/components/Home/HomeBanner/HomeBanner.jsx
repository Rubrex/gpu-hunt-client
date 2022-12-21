import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/others/banner.png";
import videoBanner from "../../../assets/videos/gaming_banner.mp4";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const HomeBanner = () => {
  const bannerOverlay = {
    backgroundImage: `linear-gradient(90deg, rgba(238,238,238,0.8799894957983193) 0%, rgba(242,242,242,0.5634628851540616) 100%), url(${bannerImg})`,
    height: "600px",
  };
  return (
    <div className="mb-32 relative">
      <div className="absolute w-full h-full  z-10 font-bold text-white">
        <div className="max-w-6xl mx-auto px-2 lg:px-0 h-full flex flex-col justify-center gap-8 ">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white/90">
            Welcome to GPU Hunt
          </h2>
          <p className="text-3xl text-gray-200/90">Get you dream card today.</p>
          <div>
            <Link to="/products">
              <button className="inline-block bg-primary/20 text-white ring-1 ring-primary border-4 pb-3 -skew-x-6 px-6 py-2 text-2xl border-primary/80 hover:border-primary hover:bg-primary/60 transition-all">
                Browse Now
              </button>
              {/* <PrimaryButton className="text-lg border-transparent">
              Register
            </PrimaryButton> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-orange-900/20 backdrop-blur-sm absolute top-0 left-0 w-full h-full"></div>
      <video
        src={videoBanner}
        autoPlay
        muted
        className="w-full h-screen object-cover  "
      ></video>
    </div>
  );
};

export default HomeBanner;
