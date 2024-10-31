import { CircleUser, Clock9, Grip, Star } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-2 flex items-center justify-between absolute bottom-1  bg-black ">
      <span className=" flex flex-col items-center justify-between text-gray-400">
        <Star size={22} />
        <span className=" text-xs">Favourites</span>
      </span>
      <NavLink
        to={"/call-log"}
        className={({ isActive }) => {
          return ` flex flex-col  items-center justify-between ${
            isActive ? "text-blue-500" : "text-gray-400"
          }`;
        }}
      >
        <Clock9 size={22} />
        <span className=" text-xs">Recents</span>
      </NavLink>
      <span className="text-gray-400 flex flex-col items-center justify-between">
        <CircleUser size={22} />
        <span className=" text-xs">Contacts</span>
      </span>
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return ` flex flex-col items-center justify-between ${
            isActive ? "text-blue-500" : "text-gray-400"
          }`;
        }}
      >
        <Grip size={22} />
        <span className=" text-xs">Keypad</span>
      </NavLink>
    </div>
  );
};

export default Footer;
