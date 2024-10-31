import React from "react";
import { Link } from "react-router-dom";

const DialedNumberScreenButton = ({ icon, label, disabled, cancel }) => {
  return (
    <div className={`flex flex-col items-center `}>
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full ${
          cancel ? "bg-red-600" : "bg-gray-700"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} `}
      >
        {cancel ? (
          <Link to={"/call-log"} className=" text-xl">
            {" "}
            {icon}{" "}
          </Link>
        ) : (
          <span className="text-xl">{icon}</span>
        )}
      </div>
      <p className="mt-2 text-sm">{label}</p>
    </div>
  );
};

export default DialedNumberScreenButton;
