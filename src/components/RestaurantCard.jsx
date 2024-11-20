import React from "react";
import { MdStars } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { NavLink } from "react-router-dom";


const RestaurantCard = (props) => {
  return (
    <div>
      <NavLink to="" className="">
        <div className="card  w-[330px]">
          <div className="image-box relative w-full h-48">
            <img
              src={props.imageUrl}
              className="w-full h-48 object-cover rounded-t-3xl"
              alt=""
            />
            <div className="res-name text-white w-full px-3 flex justify-between items-center absolute bottom-3">
              <div className="heading-box">
                <h2 className="text-xl font-bold">{props.heading}</h2>
              </div>
              <div className="rating-box flex items-center gap-1">
                <MdStars className="text-green-700 bg-white rounded-full" />
                <span className="font-bold">{props.rating}</span>
              </div>
            </div>
          </div>
          <div className="res-info p-2">
            <div className="first-info-box flex justify-between items-center text-sm text-gray-500 my-0.5">
              <p>Continental North Indian</p>
              <p>2400 for two</p>
            </div>
            <div className="second-info-box flex justify-between items-center text-sm text-gray-500 my-0.5">
              <p>Karol Bagh, Delhi</p>
              <p>2.9 km</p>
            </div>
            <div className="tags my-1 flex items-center gap-2 px-2 py-1">
              <div className="booking flex items-center gap-0.5  justify-center p-1 px-3 text-gray-400 bg-slate-100 text-xs rounded-full">
                <SiTicktick />
                <span className="">Table booking</span>
              </div>
              <div className="dessert flex items-center gap-0.5  justify-center p-1 px-3 text-gray-400 bg-slate-100 text-xs rounded-full">
                <LuCakeSlice />
                <span className="">Free Dessert</span>
              </div>
            </div>
            <div className="button px-2 py-1">
              <button className="w-full flex justify-around items-center rounded-md font-extrabold text-[13px] py-2 bg-emerald-500 text-white">
                <span className="flex gap-2 items-center">
                  <RiDiscountPercentFill /> Flat 40%off on pre-booking
                </span>
                <span>+6 more</span>
              </button>
              <button className="w-full rounded-md text-[13px] text-start pl-3 py-2 bg-emerald-100 text-emerald-600 font-bold my-3">
                Up to 15% off with bank offers{" "}
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default RestaurantCard;
