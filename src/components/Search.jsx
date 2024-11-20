import React from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="menu-box w-2/3 mx-auto py-10">
          <div className="inputBox w-full flex items-center border border-gray-400 py-3 px-4 rounded-s">
            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-full outline-0 border-0"
            />
            <CiSearch strokeWidth="1px" className="stroke-gray-500 text-2xl" />
          </div>
          <div className="popular my-3 p-2">
            <div className="heading py-3">
              <h2 className="font-extrabold text-gray-700 text-lg">
                Popular Cuisines
              </h2>
            </div>
            <div className="popularImages flex items-center justify-between">
              <NavLink to=""><img src="FoodDelivery/1.jpg" className="w-[75px]" alt="biryani" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/2.jpg" className="w-[75px]" alt="rolls" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/3.jpg" className="w-[75px]" alt="pizzas" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/4.jpg" className="w-[75px]" alt="burger" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/5.jpg" className="w-[75px]" alt="tea" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/6.jpg" className="w-[75px]" alt="chinese" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/7.jpg" className="w-[75px]" alt="cake" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/8.jpg" className="w-[75px]" alt="dessert" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/9.jpg" className="w-[75px]" alt="north indian" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/10.jpg" className="w-[75px]" alt="south indian" /></NavLink>
              <NavLink to=""><img src="FoodDelivery/11.jpg" className="w-[75px]" alt="sandwich" /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
