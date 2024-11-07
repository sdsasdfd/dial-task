import React from "react";
import { useDispatch } from "react-redux";
import { addDialNumber } from "../store/dialNumberSlice";

const Button = ({ number, letters }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addDialNumber(number))}
      className=" flex items-center justify-center flex-col bg-zinc-800 rounded-full text-gray-100 text-2xl w-16 h-16 cursor-pointer pt-2 relative"
    >
      <span className={`${letters ? "mb-2" : ""}`}>{number}</span>
      {letters && (
        <p className="text-[10px] tracking-widest text-gray-400  absolute  font-bold bottom-[-1px]">
          {letters}
        </p>
      )}
    </button>
  );
};

export default Button;
