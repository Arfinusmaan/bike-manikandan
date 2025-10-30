import React from "react";
import Homepage from "./pages/Homepage.jsx";
import Motorcyclepage from "./pages/Motorcyclepage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Motorcycle" element={<Motorcyclepage />} />
      </Routes>
    </>
  );
}

export default App;
