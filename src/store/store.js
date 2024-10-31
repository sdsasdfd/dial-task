import { configureStore } from "@reduxjs/toolkit";
import dialNumberReducer from "./dialNumberSlice";
const store = configureStore({
  reducer: {
    dial: dialNumberReducer,
  },
});

export default store;
