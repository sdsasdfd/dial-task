import { createSlice } from "@reduxjs/toolkit";
import { getFormattedTime } from "../utils/formatTime";

const initialState = {
  dialNumber: "",
  recentCalls: [],
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

      state.dialNumber = "";
    },
    deleteCall: (state, action) => {
      state.recentCalls = state.recentCalls.filter(
        (_, index) => index !== action.payload
      );
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
