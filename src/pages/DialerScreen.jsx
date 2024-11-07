import React from "react";
import Footer from "../components/Footer";
import { Delete, Phone } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberToHistory, removeLastNumber } from "../store/dialNumberSlice";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const DialerScreen = () => {
  const { dialNumber } = useSelector((state) => state.dial);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" h-screen text-gray-500 max-w-sm overflow-hidden  mx-auto  ">
      <div className=" min-h-screen bg-black relative flex flex-col justify-center items-center">
        <span className=" text-gray-100  text-2xl mb-3">
          {dialNumber || "Enter Number"}
        </span>

        <span className=" text-blue-600">Add Number</span>
        <div className=" mt-8 mb-5 grid grid-cols-3 gap-5">
          <Button number={1} />
          <Button number={2} letters={"ABC"} />
          <Button number={3} letters={"DEF"} />
          <Button number={4} letters={"GHI"} />
          <Button number={5} letters={"JKL"} />
          <Button number={6} letters={"MNO"} />
          <Button number={7} letters={"PQRS"} />
          <Button number={8} letters={"TUV"} />
          <Button number={9} letters={"WXYZ"} />
          <Button number={"*"} />
          <Button number={0} letters={"+"} />
          <Button number={"#"} />
        </div>
        <div className="flex w-full items-center justify-center relative mb-4">
          <button
            disabled={dialNumber.length < 3}
            onClick={() => {
              dispatch(addNumberToHistory(dialNumber));

              navigate("/dialed-number-screen");
            }}
            className=" bg-green-500 rounded-full flex items-center justify-center  text-gray-100 w-16 h-16  "
          >
            <Phone fill="white" size={24} />
          </button>

          <button
            className=" absolute top-5 right-[22%]"
            onClick={() => dispatch(removeLastNumber())}
          >
            <Delete size={26} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DialerScreen;
