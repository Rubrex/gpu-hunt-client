import React from "react";
import underLine from "../../../assets/images/others/under_line.png";
import rtxLogo from "../../../assets/images/brands/rtx_logo.png";
import gtxLogo from "../../../assets/images/brands/gtx_logo.png";
import radeonLogo from "../../../assets/images/brands/amd_radeon.png";
import demoProfile from "../../../assets/images/icons/profile.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Advertised = () => {
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
          <button className="py-1 px-3 border bg-blue-700 text-white rounded-md">
            Show All
          </button>
        </div>
      </div>

      {/* Categories  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Card */}
        <div className="justify-self-center">
          <div className="border p-2 rounded-md min-w-[270px]">
            <PhotoProvider>
              <PhotoView src={rtxLogo}>
                <img
                  className="max-h-[150px] w-full object-cover mb-5 rounded-md"
                  src={rtxLogo}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>

            {/* Descriptions */}
            <div className="">
              {/* Profile image, name, added on */}
              <div className="flex items-center gap-4">
                <img
                  src={demoProfile}
                  className="max-w-[50px] rounded-md"
                  alt="user image"
                />
                <div>
                  <p className="font-medium">Rashed Ahmed</p>
                  <span className="text-slate-600">
                    <small>Added on: 13 May, 2022</small>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium my-2">Asus RTX 3060 non OC</h3>
              <p>Market Price: $399</p>
              <p>Used: 2 Years</p>
              <p>Location: Rasulbad, North Badda</p>

              {/* Booking , wishlist, report admin */}
              <div className="flex justify-between mt-5">
                <button className="btn ">Book Now</button>
                {/* Add to wishlist */}
                <button className="btn">Love</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="justify-self-center">
          <div className="border p-2 rounded-md min-w-[270px]">
            <PhotoProvider>
              <PhotoView src={rtxLogo}>
                <img
                  className="max-h-[150px] w-full object-cover mb-5 rounded-md"
                  src={rtxLogo}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>

            {/* Descriptions */}
            <div className="">
              {/* Profile image, name, added on */}
              <div className="flex items-center gap-4">
                <img
                  src={demoProfile}
                  className="max-w-[50px] rounded-md"
                  alt="user image"
                />
                <div>
                  <p className="font-medium">Rashed Ahmed</p>
                  <span className="text-slate-600">
                    <small>Added on: 13 May, 2022</small>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium my-2">Asus RTX 3060 non OC</h3>
              <p>Market Price: $399</p>
              <p>Used: 2 Years</p>
              <p>Location: Rasulbad, North Badda</p>

              {/* Booking , wishlist, report admin */}
              <div className="flex justify-between mt-5">
                <button className="btn ">Book Now</button>
                {/* Add to wishlist */}
                <button className="btn">Love</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="justify-self-center">
          <div className="border p-2 rounded-md min-w-[270px]">
            <PhotoProvider>
              <PhotoView src={rtxLogo}>
                <img
                  className="max-h-[150px] w-full object-cover mb-5 rounded-md"
                  src={rtxLogo}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>

            {/* Descriptions */}
            <div className="">
              {/* Profile image, name, added on */}
              <div className="flex items-center gap-4">
                <img
                  src={demoProfile}
                  className="max-w-[50px] rounded-md"
                  alt="user image"
                />
                <div>
                  <p className="font-medium">Rashed Ahmed</p>
                  <span className="text-slate-600">
                    <small>Added on: 13 May, 2022</small>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium my-2">Asus RTX 3060 non OC</h3>
              <p>Market Price: $399</p>
              <p>Used: 2 Years</p>
              <p>Location: Rasulbad, North Badda</p>

              {/* Booking , wishlist, report admin */}
              <div className="flex justify-between mt-5">
                <button className="btn ">Book Now</button>
                {/* Add to wishlist */}
                <button className="btn">Love</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="justify-self-center">
          <div className="border p-2 rounded-md min-w-[270px]">
            <PhotoProvider>
              <PhotoView src={rtxLogo}>
                <img
                  className="max-h-[150px] w-full object-cover mb-5 rounded-md"
                  src={rtxLogo}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>

            {/* Descriptions */}
            <div className="">
              {/* Profile image, name, added on */}
              <div className="flex items-center gap-4">
                <img
                  src={demoProfile}
                  className="max-w-[50px] rounded-md"
                  alt="user image"
                />
                <div>
                  <p className="font-medium">Rashed Ahmed</p>
                  <span className="text-slate-600">
                    <small>Added on: 13 May, 2022</small>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium my-2">Asus RTX 3060 non OC</h3>
              <p>Market Price: $399</p>
              <p>Used: 2 Years</p>
              <p>Location: Rasulbad, North Badda</p>

              {/* Booking , wishlist, report admin */}
              <div className="flex justify-between mt-5">
                <button className="btn ">Book Now</button>
                {/* Add to wishlist */}
                <button className="btn">Love</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="justify-self-center">
          <div className="border p-2 rounded-md min-w-[270px]">
            <PhotoProvider>
              <PhotoView src={rtxLogo}>
                <img
                  className="max-h-[150px] w-full object-cover mb-5 rounded-md"
                  src={rtxLogo}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>

            {/* Descriptions */}
            <div className="">
              {/* Profile image, name, added on */}
              <div className="flex items-center gap-4">
                <img
                  src={demoProfile}
                  className="max-w-[50px] rounded-md"
                  alt="user image"
                />
                <div>
                  <p className="font-medium">Rashed Ahmed</p>
                  <span className="text-slate-600">
                    <small>Added on: 13 May, 2022</small>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium my-2">Asus RTX 3060 non OC</h3>
              <p>Market Price: $399</p>
              <p>Used: 2 Years</p>
              <p>Location: Rasulbad, North Badda</p>

              {/* Booking , wishlist, report admin */}
              <div className="flex justify-between mt-5">
                <button className="btn ">Book Now</button>
                {/* Add to wishlist */}
                <button className="btn">Love</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertised;
