import React from "react";
import { NavLink } from "react-router-dom";

const DeliveryCard = (props) => {
  return (
    <div>
      <NavLink to="">
        <div className="border border-gray-400 px-6 py-4 rounded-xl text-center">
          <h2 className="w-40 text-sm font-bold text-gray-500">
            Order {props.option} online in {props.location}
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default DeliveryCard;
