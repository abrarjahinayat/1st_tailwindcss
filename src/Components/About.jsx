import React, { useState } from "react";
import aboutimg from "../assets/images/aboutimg.png";
const About = () => {
  let [toggle, setToggle] = useState(false);
  let handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <section className="border-primary_white/10 border-b pb-10 lg:pt-[230px] lg:pb-[70px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="mt-7 lg:w-2/4">
            <h2 className="text-4xl font-bold text-white lg:text-[64px] lg:leading-24">
              About <span className="text-secondary_color">me</span>{" "}
            </h2>
            <p className="leading-100% text-primary_white/75 w-auto pb-3 font-normal lg:w-[420px] lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis....
              <span
                onClick={handletoggle}
                className="text-primary_white font-bold"
              >
                {!toggle && "Read more"}
              </span>
              {toggle && (
                <p className="leading-100% text-primary_white/75 w-auto pb-3 font-normal lg:w-[420px] lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, odio? Eos, ipsam quaerat, delectus hic dicta
                  voluptatibus facere cum, commodi sequi dolores laudantium
                  totam ad modi asperiores ex quis odio!
                </p>
              )}
              <span
                onClick={handletoggle}
                className="text-primary_white font-bold"
              >
                {toggle && "Read less"}
              </span>
            </p>
          </div>
          <div className="lg:w-2/4">
            <img className="ml-auto" src={aboutimg} alt="aboutimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
