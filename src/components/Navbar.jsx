import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="navbar w-11/12 mx-auto flex justify-between py-3 items-center">
        <div className="leftBox flex justify-between items-center gap-10 pl-6 relative">
          <div className="logo">
            <NavLink to="/">
              <img
                src="/images/logo.svg"
                className="w-13 hover:scale-110 transition-all"
                alt="Swiggy logo"
              />
            </NavLink>
          </div>
          <div className="other flex items-center gap-4 relative group cursor-pointer">
            <p className="text-sm font-bold text-gray-700 group-hover:text-orange-500">
              Other
            </p>
            <div className="line absolute w-1/2 h-[2px] -bottom-1 bg-gray-700 group-hover:bg-orange-500"></div>
            <IoIosArrowDown className="fill-orange-500 text-xl font-extrabold" />
          </div>
        </div>
        <div className="menu">
          <ul className="flex justify-between items-center gap-14">
            <li className="text-gray-700 font-medium hover:text-orange-500">
              <NavLink to="" className="flex gap-1 items-center ">
                <span>
                  <img src="/svg/swiggy.svg" alt="" />
                </span>
                Swiggy Corporate
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                to="/"
                className="flex gap-1 items-center hover:text-orange-500"
              >
                <span>
                  <img
                    src="/svg/search.svg"
                    className="hover:fill-orange-500"
                    alt=""
                  />
                </span>
                Search
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium relative">
              <NavLink
                to="/"
                className="flex gap-1 items-center hover:text-orange-500"
              >
                <span>
                  <img src="/svg/offer.svg" alt="" />
                </span>
                Offers
                <span className="text-orange-40000 absolute -top-[3px] -right-[26px] text-[10px] font-extrabold text-[#ffa700]">
                  NEW
                </span>
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                to="/"
                className="flex gap-1 items-center hover:text-orange-500"
              >
                <span>
                  <img src="/svg/help.svg" alt="" />
                </span>
                Help
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                to="/"
                className="flex gap-1 items-center hover:text-orange-500"
              >
                <span>
                  <img src="/svg/signin.svg" alt="" />
                </span>
                Sign In
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                to="/"
                className="flex gap-1 items-center hover:text-orange-500"
              >
                <span className="relative ">
                  <svg
                    className="ppAwf vZTPh"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 0 37 32"
                    height="20"
                    width="20"
                    fill="white"
                    stroke="#282c3f"
                    strokeWidth="2"
                  >
                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                  </svg>
                  <span className="absolute text-[15px] -top-[2px] left-[6px]">
                    0
                  </span>
                </span>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
