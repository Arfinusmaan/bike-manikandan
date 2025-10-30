import React from "react";
import Hero from "../components/Home/Hero";
import Footer from "../Navbar_Footer/Footer";
import Navbar from "../Navbar_Footer/Navbar";
import Models from "../components/Home/Models";
import ExperienceCenter from "../components/Home/ExperienceCenter";
import Racing from "../components/Home/Racing";
import Accessories from "../components/Home/Accessories";
import Family from "../components/Home/Family";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Hero />
        <Models />
        <ExperienceCenter />
        <Racing />
        <Accessories />
        <Family />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
