import { createSlice } from "@reduxjs/toolkit";

const loadCalls = () => {
  const storedCalls = sessionStorage.getItem("calls");
  return storedCalls ? JSON.parse(storedCalls) : [];
};

const saveCall = (call) => {
  sessionStorage.setItem("calls", JSON.stringify(call));
};

const getFormattedTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${formattedMinutes} ${amOrPm}`;
};

const initialState = {
  dialNumber: "",
  recentCalls: loadCalls(),
};

const dialNumberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    addDialNumber: (state, action) => {
      state.dialNumber += action.payload;
    },
    removeLastNumber: (state) => {
      state.dialNumber = state.dialNumber.slice(0, -1);
    },
    addNumberToHistory: (state, action) => {
      const newCall = {
        number: state.dialNumber,
        time: getFormattedTime(),
      };

      state.recentCalls.unshift(newCall);
      saveCall(state.recentCalls);
      state.dialNumber = "";
    },
    deleteCall: (state, action) => {
      state.recentCalls = state.recentCalls.filter(
        (_, index) => index !== action.payload
      );
      saveCall(state.recentCalls);
    },
  },
});

export const {
  addDialNumber,
  removeLastNumber,
  addNumberToHistory,
  deleteCall,
} = dialNumberSlice.actions;

export default dialNumberSlice.reducer;
