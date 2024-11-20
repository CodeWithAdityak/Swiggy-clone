import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Function to handle the click event on the input and navigate to the new route
  const handleSearchClick = () => {
    navigate("/search"); // Navigate to the '/search' route
  };

  return (
    <>
      <header className="w-full bg-[#ff5200]">
        <nav className="w-full">
          <div className="navbar w-4/5 mx-auto flex justify-between py-9 items-center">
            <div className="logo">
              <img src="/images/logo.png" className="w-40" alt="Swiggy logo" />
            </div>
            <div className="menu flex gap-6 items-center">
              <ul className="flex gap-6">
                <li className="text-white font-bold">Swiggy Corporate</li>
                <li className="text-white font-bold">Partner with us</li>
              </ul>
              <div className="navbar-button flex gap-6">
                <button className="bg-transparent font-bold text-lg px-5 py-3 flex items-center gap-1 text-white border border-white rounded-xl">
                  Get the App <MdArrowOutward />
                </button>
                <button className="bg-black font-bold text-lg px-9 py-3 flex items-center gap-1 text-white border-none  rounded-xl">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className=" w-full pt-[65px] pb-12 relative">
          <img
            src="/images/headerLeft.avif"
            className="absolute w-[250px] h-[450px] top-0"
            alt=""
          />
          <div className="middle mx-auto w-3/5">
            <div className="header-heading text-center">
              <h1 className="text-5xl font-bold text-white">
                Order food & groceries. Discover best restaurants. Swiggu it!
              </h1>
            </div>
            <div className="search-box flex items-center justify-center gap-6 mt-10">
              <div className="location-search-box relative w-2/5">
                <FaLocationDot className="absolute top-4 text-2xl left-3.5 text-[#ff5200]" />
                <input
                  type="text"
                  className="location placeholder:font-medium w-full px-11 text-[17px] outline-0 rounded-xl py-4"
                  placeholder="Enter your delivery location"
                  name="location"
                  id="location"
                />
                <IoIosArrowUp className="absolute top-4 text-xl right-4" />
              </div>
              <div className="search-item-box relative w-3/5">
                <input
                  type="text"
                  onClick={handleSearchClick}
                  className="search pl-5 text-[17px] pr-10 w-full outline-0 rounded-xl py-4"
                  placeholder="Search for restaurant, item or more"
                  name="search"
                  id="search"
                />
                <CiSearch className="absolute top-[18px] text-xl right-5" />
              </div>
            </div>
          </div>
          <img
            src="/images/headerRight.avif"
            className="absolute w-[250px] h-[450px] top-0 right-0"
            alt=""
          />
        </div>

        <div className="w-full">
          <div className="headerCard-box min-w-[80%] w-[80%] mx-auto flex ">
            <div className="card1">
              <a href="">
                <img src="/images/menu1.avif" alt="" />
              </a>
            </div>
            <div className="card2">
              <a href="">
                <img src="/images/menu2.avif" alt="" />
              </a>
            </div>
            <div className="card3">
              <a href="">
                <img src="/images/menu3.avif" alt="" />
              </a>
            </div>
            <div className="card4">
              <a href="">
                <img src="/images/menu4.avif" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
