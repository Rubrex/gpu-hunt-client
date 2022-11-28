import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/logo.png";

const GpuHuntFooter = () => {
  return (
    <Footer container={true} className="max-w-6xl mx-auto">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link className="flex items-center" to="/">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="GPU Hunts" />
              <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-700 dark:text-white">
                GPUHunts
              </span>
            </Link>
            <p className="text-md ml-4 font-medium flex items-center max-w-md">
              We have the biggest collections of used graphics cards of Gegorce
              GTX, Geforce RTX and AMD Radeon series Graphics cards
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">GPUHunt</Footer.Link>

                <Link to="/products">Products</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="GPUHunt" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default GpuHuntFooter;
