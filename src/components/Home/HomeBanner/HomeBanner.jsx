import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <main className="flex flex-col xl:flex-row h-screen">
        <div className="w-full  xl:w-1/2 my-4 h-screen flex items-center justify-center">
          <div className="">
            <h1 className="tracking-tight font-light text-gray-500 text-4xl ">
              Meet the
            </h1>
            <h1 className="text-6xl md:text-8xl tracking-tight leading-none font-extrabold text-cyan-500">
              StarGazers
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              Members of an intergalactic alliance paving the way for peace and
              benevolence among all species. They are known for their enthusiasm
              for science, for their love of fun, and their dedication to
              education.
            </p>
            <a
              href="#"
              className="inline-block bg-cyan-500 hover:bg-pink-600 mt-3 px-6 py-3 rounded-md text-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-screen">
          <img
            className="object-cover w-full h-screen"
            src="https://pixelprowess.com/i/bots/i/group.svg"
            alt="Robot Group"
          />
        </div>
      </main>
    </div>
  );
};

export default HomeBanner;
