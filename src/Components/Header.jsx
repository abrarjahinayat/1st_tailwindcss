import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className=' py-5 lg:py-12 border-b border-primary_white/10'>
      <div className="container">
        <div className="flex justify-between">
          <img src="images/logo.png" alt="logo" />
          <FaBars className="text-primary_white text-3xl lg:hidden" />
          <ul className="lg:flex gap-x-[50px] hidden">
            <li  className="list after:content[''] after:absolute after:w-0 after:h-1 after:bottom-[-5px] after:left-0  hover:text-amber-500 after:bg-amber-500 hover:after:w-full relative transition after:duration-400 ease-linear;">
              <a href="#">Home</a>
            </li>
            <li className="list after:content[''] after:absolute after:w-0 after:h-1 after:bottom-[-5px] after:left-0 hover:text-amber-500 after:bg-amber-500 hover:after:w-full relative transition after:duration-400 ease-linear;">
              <a href="#">About Me</a>
            </li>
            <li className="list after:content[''] after:absolute after:w-0 after:h-1 after:bottom-[-5px] after:left-0 hover:text-amber-500 after:bg-amber-500 hover:after:w-full relative transition after:duration-400 ease-linear;">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
