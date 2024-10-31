import React from "react";
import { Route, Routes } from "react-router-dom";
import CallLogScreen from "./pages/CallLogScreen";
import DialedNumberScreen from "./pages/DialedNumberScreen";
import DialerScreen from "./pages/DialerScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DialerScreen />} />
      <Route path="/call-log" element={<CallLogScreen />} />
      <Route path="/dialed-number-screen" element={<DialedNumberScreen />} />
    </Routes>
  );
};

export default App;
