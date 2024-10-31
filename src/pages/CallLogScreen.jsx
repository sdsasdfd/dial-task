import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import { deleteCall } from "../store/dialNumberSlice";

const CallLogScreen = () => {
  const { recentCalls } = useSelector((state) => state.dial);

  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteCall(index));
  };
  return (
    <div className=" overflow-hidden h-screen text-gray-500 max-w-sm  mx-auto ">
      <div className=" h-full bg-black flex flex-col relative">
        <div className=" flex items-center my-4 relative pl-3">
          <span className=" text-blue-500 mt-1">Edit</span>
          <div className="absolute top-0 left-[30%] space-x-6 bg-zinc-800 py-1 rounded-md px-[2px] text-white">
            <span className="pl-2">All</span>
            <span className="bg-zinc-600 rounded-md py-[3px] px-3">Missed</span>
          </div>
        </div>
        <div className="mx-4 mt-4 border-white border-1">
          <h1 className="text-white text-3xl font-semibold">Recents</h1>
          <div className="h-[1px] my-2 bg-zinc-950" />

          {recentCalls && recentCalls.length > 0 ? (
            recentCalls.map((call, index) => (
              <div key={index} className=" flex flex-col ">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="  text-red-400 ">{call.number}</span>
                    <span className=" text-xs">Phone Call Audio</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs">
                    <span>{call.time}</span>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
                <div className="h-[1px] my-2 bg-zinc-950" />
              </div>
            ))
          ) : (
            <span className="text-white">no call</span>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CallLogScreen;
