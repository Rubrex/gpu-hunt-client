import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import "./ExtraSection.css";

const ExtraSection = () => {
  return (
    <section className="contributions mb-32">
      <div className="blur_bg grid grid-cols-1 md:grid-cols-2">
        <div className="left_descriptions">
          <h3 className="text-xl">Get Your Card Today</h3>
          <h1 className="text-5xl font-extrabold">
            WE HAVE NEW CARDS EVERYDAY
          </h1>
          <p>
            GPU is a very essential part for you computer for better gaming
            experience, Video Rendering, Executing Complex algorithms
          </p>
          <Link to="/products">
            <PrimaryButton>Browse Now</PrimaryButton>
          </Link>
        </div>
        <div className="right_icons">
          <div className="contribute_icon">
            <img
              src="https://www.adeccousa.com/~/media/adeccogroup/brands/adecco-global-2016/usa/page-assets/employers/staffing-solutions/staffing-services/consumer-goods.svg"
              alt=""
            />
            <h1 className="text-4xl font-extrabold">532</h1>
            <h3 className="text-xl">SELLERS</h3>
          </div>
          <div className="contribute_icon">
            <img
              src="https://www.adeccousa.com/~/media/adeccogroup/brands/adecco-global-2016/usa/page-assets/employers/staffing-solutions/staffing-services/sales.svg"
              alt="VOLUNTEERS"
            />
            <h1 className="text-4xl font-extrabold">4250</h1>
            <h3 className="text-xl">BUYERS</h3>
          </div>
          <div className="contribute_icon">
            <img
              src="https://www.adeccousa.com/~/media/adeccogroup/brands/adecco-global-2016/usa/page-assets/employers/staffing-solutions/staffing-services/supply-chain-logistics.svg"
              alt="PROJECTS"
            />
            <h1 className="text-4xl font-extrabold">1024</h1>
            <h3 className="text-xl">SOLD</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
