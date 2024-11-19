import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center dark:bg-black">
        <section
          className="w-[95%] h-[600px] bg-cover bg-center rounded-xl px-10 lg:px-28 flex flex-col justify-center items-start gap-7 m-auto"
          style={{
            backgroundImage:
              "url('https://realestatereacttailwind.netlify.app/assets/hero1-CiouO6zv.webp')",
          }}
        >
          <h1 className="text-6xl text-white font-semibold lg:pr-[500px]">
            Find your next Home in Las Vegas
          </h1>
          <p className="text-white text-xl lg:pr-[500px]">
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </section>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-6 uppercase font-semibold bg-white p-8 rounded-xl lg:absolute lg:z-10 lg:-bottom-13">
          <div className="uppercase">
            <h1>location</h1>
            <input
              className="p-2 border-b-2 border-black-300 w-full"
              type="text"
              placeholder="Enter an address, state, city, country"
            />
          </div>
          <div>
            <h1>type</h1>
            <input
              className="p-2 border-b-2 border-black-300 w-full"
              type="text"
              placeholder="Select Property"
            />
          </div>
          <div>
            <h1>category</h1>
            <input
              className="p-2 border-b-2 border-black-300 w-full"
              type="text"
              placeholder="Property Category"
            />
          </div>
          <div>
            <button className="rounded-xl text-white bg-red-600 w-full py-4 font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
