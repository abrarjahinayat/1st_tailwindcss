import React from "react";
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className=" pt-10 lg:pt-[100px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-x-12 items-center lg:justify-center pb-5 lg:pb-[38px]">
          <div className="flex items-center gap-2 group">
            <span className="footer_icon group-hover:text-red-500 " >
              <FiHome />
            </span>
            <p className="footer_text group-hover:text-red-500">
              Home
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="footer_icon" >
            <IoPersonOutline />
            </span>
            <p className="footer_text">
                About me
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="footer_icon" >
            <IoCallOutline />
            </span>
            <p className="footer_text">
            Contact
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 justify-center pb-10 lg:pb-[92px]">
            <div className="w-12 h-12 bg-btn_color text-2xl rounded-full text-primary_white items-center flex justify-center  hover:bg-secondary_color"><LuFacebook /></div>
            <div className="w-12 h-12 bg-btn_color text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color"><IoLogoInstagram /></div>
            <div className="w-12 h-12 bg-btn_color text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color"><FiTwitter /></div>
            <div className="w-12 h-12 bg-btn_color text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color"><FiYoutube /></div>
        </div>
        <h3 className="text-primary_white font-normal text-lg leading-[100%] text-center lg:text-end pb-12">Terms of Service - Privacy Policy</h3>
      </div>
    </footer>
  );
};

export default Footer;
