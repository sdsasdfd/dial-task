import React from "react";
import { useDispatch } from "react-redux";
import { addDialNumber } from "../store/dialNumberSlice";

const Button = ({ number, letters, one }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addDialNumber(number))}
      className="flex items-center justify-center  bg-zinc-800 rounded-full text-gray-100 text-2xl w-16 h-16 cursor-pointer pt-2 relative"
    >
      <span
        className={` absolute ${letters ? "top-3" : one ? "top-3" : "top-5"}`}
      >
        {number}
      </span>
      {letters && (
        <p className="text-[10px] tracking-widest text-gray-400 absolute bottom-1 font-bold ">
          {letters}
        </p>
      )}
    </button>
  );
};

export default Button;
