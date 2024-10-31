import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DialedNumberScreenButton from "../components/DialedNumberScreenButton";
import {
  Grip,
  MicOff,
  PhoneOff,
  UserRoundPlus,
  Video,
  Volume2,
} from "lucide-react";

const DialedNumberScreen = () => {
  const number = useSelector((state) => state.dial.recentCalls[0].number || "");

  const navigate = useNavigate();
  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/call-log");
    }, 10000);

    return () => clearTimeout(time);
  }, [navigate]);
  return (
    <div className="flex justify-center items-center  max-w-sm  mx-auto px-4">
      <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8">
        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-gray-400">calling mobile...</p>
          <h1 className="text-2xl font-semibold mt-2"> {number} </h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <DialedNumberScreenButton icon={<Volume2 />} label="Speaker" />
          <DialedNumberScreenButton
            icon={<Video />}
            label="FaceTime"
            disabled
          />
          <DialedNumberScreenButton icon={<MicOff />} label="Mute" />
          <DialedNumberScreenButton
            icon={<UserRoundPlus />}
            label="Add"
            disabled
          />
          <DialedNumberScreenButton icon={<PhoneOff />} cancel label="End" />
          <DialedNumberScreenButton icon={<Grip />} label="Keypad" />
        </div>
      </div>
    </div>
  );
};

export default DialedNumberScreen;
