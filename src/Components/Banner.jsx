import React, { useState } from "react";
import Bannerimage from "../assets/images/bannerimg.png";
const Banner = () => {
  let [active, setActive] = useState(1);
  let handleActive = (number) => {
    setActive(number);
  };
  return (
    <section className="mt-6 lg:mt-[172px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/4">
            <h1 className="text-center text-[30px] font-bold text-white lg:text-start lg:text-8xl lg:leading-24">
              CREATIVE UI <span className="text-secondary_color">DESIGNER</span>
            </h1>
            <div className="mt-4 flex justify-center lg:mt-12 lg:justify-start">
              <button
                onClick={() => handleActive(1)}
                className={` ${active == 1 ? "bg-secondary_color text-primary_white btn_shadow ml-3 rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , ml-3 cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
              >
                Hire me
              </button>
              <button
                onClick={() => handleActive(2)}
                className={` ${active == 2 ? "bg-secondary_color text-primary_white btn_shadow ml-3 rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , ml-3 cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
              >
                Download CV{" "}
                <i className="fa-solid fa-download ml-2.5 text-[24px]"></i>
              </button>
            </div>
          </div>
          <div className="lg:w-2/4">
            <img
              className="m-auto lg:ml-auto"
              src={Bannerimage}
              alt="Bannerimage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
