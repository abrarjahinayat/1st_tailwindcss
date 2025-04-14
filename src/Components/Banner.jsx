import React from "react";
import Bannerimage from "../assets/images/bannerimg.png";
const Banner = () => {
  return (
    <section className="mt-6 lg:mt-[172px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/4">
            <h1 className=" text-center lg:text-start text-[30px] lg:leading-24 font-bold text-white lg:text-8xl">
              CREATIVE UI <span className="text-secondary_color">DESIGNER</span>
            </h1>
            <div className=" mt-4 lg:mt-12 flex justify-center lg:justify-start">
              <button className="bg-secondary_color text-primary_white btn_shadow rounded-full px-4 lg:px-8 py-1.5 lg:py-2.5 text-lg font-bold">
                Hire me
              </button>
              <button className="text-primary_white hover:bg-secondary_color hover: ml-3 lg:ml-6 cursor-pointer rounded-full bg-[#393E46BF] , px-4 lg:px-8 py-1.5 lg:py-2.5 text-lg font-bold hover:duration-[0.4s]">
                Download CV{" "}
                <i className="fa-solid fa-download ml-2.5 text-[24px]"></i>
              </button>
            </div>
          </div>
          <div className="lg:w-2/4">
            <img className=" m-auto lg:ml-auto" src={Bannerimage} alt="Bannerimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
