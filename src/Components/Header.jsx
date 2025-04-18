import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const Header = () => {
  let [menu , setmenu] = useState(false)
  let [navBar, setNavbar] = useState("translate-y-[-200%]");
 
  let handleNavbar = () => {
    setmenu(!menu)
    if(menu){
      setNavbar("translate-y-[-200%]")
    }else{

      setNavbar("translate-y-[0%]")
    }
  };

  return (
    <header className="border-primary_white/10 border-b py-5 lg:py-12">
      <div className="container">
        <div className="flex justify-between">
          <img src="images/logo.png" alt="logo" />

          {menu ? (
            <MdOutlineCloseFullscreen
              onClick={handleNavbar}
              className="text-primary_white text-3xl lg:hidden"
            />
          ) : (
            <FaBars
              onClick={handleNavbar}
              className="text-primary_white text-3xl lg:hidden"
            />
          )}

          <ul className="hidden gap-x-[50px] lg:flex">
            <li className="list after:content[''] ease-linear; relative transition after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0 after:bg-amber-500 after:duration-400 hover:text-amber-500 hover:after:w-full">
              <a href="#">Home</a>
            </li>
            <li className="list after:content[''] ease-linear; relative transition after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0 after:bg-amber-500 after:duration-400 hover:text-amber-500 hover:after:w-full">
              <a href="#">About Me</a>
            </li>
            <li className="list after:content[''] ease-linear; relative transition after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0 after:bg-amber-500 after:duration-400 hover:text-amber-500 hover:after:w-full">
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* mobile view */}
          {navBar && (
            <ul className={`bg-btn_color ${navBar} left-0 transition duration-500 absolute top-18 w-full p-3 text-center lg:hidden`}>
              <li className="list mt-3 hover:text-amber-500 hover:after:w-full">
                <a href="#">Home</a>
              </li>
              <li className="list mt-3 hover:text-amber-500 hover:after:w-full">
                <a href="#">About Me</a>
              </li>
              <li className="list mt-3 hover:text-amber-500 hover:after:w-full">
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
