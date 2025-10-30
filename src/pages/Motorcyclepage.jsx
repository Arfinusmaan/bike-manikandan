import React from "react";
import Navbar from "../Navbar_Footer/Navbar";
import Footer from "../Navbar_Footer/Footer";
import Motorcycle from "../components/MotorCycle/Motorcycle";
import Compare from "../components/MotorCycle/Compare";
import Ready from "../components/MotorCycle/Ready";

function Motercyclepage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <Motorcycle />
        <Compare />
        <Ready />
      </div>
      <Footer />
    </>
  );
}

export default Motercyclepage;
