import React, { useState } from "react";
import recent from "../assets/images/recent.png";
import recentone from "../assets/images/recentone.png";
import recenttwo from "../assets/images/recenttwo.png";
import recentthree from "../assets/images/recentthree.png";

const Recent = () => {
  let [recentActive, setRecentActive] = useState(1);
  let handleRecent = (number) => {
    setRecentActive(number);
  };
  return (
    <section className='mt-10 bg-[url("assets/images/recent.png")] bg-cover bg-center bg-no-repeat py-10 lg:mt-[132px] lg:py-[268px]'>
      <div className="container">
        <h2 className="mb-4 text-4xl font-bold text-white lg:text-[64px] lg:leading-24">
          My recent <span className="text-secondary_color">works</span>
        </h2>
        <button
          onClick={() => handleRecent(1)}
          className={` ${recentActive == 1 ? "bg-secondary_color text-primary_white btn_shadow rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
        >
          All
        </button>
        <button
          onClick={() => handleRecent(2)}
          className={` ${recentActive == 2 ? "bg-secondary_color text-primary_white btn_shadow ml-2 rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , ml-2 cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
        >
          Ul
        </button>
        <button
          onClick={() => handleRecent(3)}
          className={` ${recentActive == 3 ? "bg-secondary_color text-primary_white btn_shadow ml-2 rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , ml-2 cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
        >
          UX
        </button>
        <button
          onClick={() => handleRecent(4)}
          className={` ${recentActive == 4 ? "bg-secondary_color text-primary_white btn_shadow ml-2 rounded-full px-4 py-1.5 text-lg font-bold lg:px-8 lg:py-2.5" : "text-primary_white hover:bg-secondary_color , ml-2 cursor-pointer rounded-full bg-[#393E46BF] px-4 py-1.5 text-lg font-bold hover:duration-[0.4s] lg:px-8 lg:py-2.5"} `}
        >
          Web Design
        </button>

        <div className="mt-5 flex flex-col justify-between gap-3 lg:mt-12 lg:flex-row lg:gap-0">
          {recentActive == 1 ? (
            <div  className="mt-5 flex flex-col lg:justify-between gap-3 lg:mt-12 lg:flex-row">
              <div className="recent_box px-[52px] py-[61px]">
                <img src={recentone} alt="" />
              </div>
              <div className="recent_box">
                <img src={recenttwo} alt="" />
              </div>
              <div className="recent_box">
                <img src={recentthree} alt="" />
              </div>
            </div>
          ) : recentActive == 2 ? (
            <div className="flex gap-3">
              <div className="recent_box px-[52px] py-[61px]">
                <img src={recentone} alt="" />
              </div>
              <div className="recent_box">
                <img src={recenttwo} alt="" />
              </div>
            </div>
          ) : recentActive == 3 ? (
            <div className="flex gap-3">
              <div className="recent_box px-[52px] py-[61px]">
                <img src={recentone} alt="" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recent;
