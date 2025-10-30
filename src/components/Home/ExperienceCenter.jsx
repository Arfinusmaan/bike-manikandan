import React from "react";
import { FaFire } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineTool, AiOutlineSafetyCertificate } from "react-icons/ai";
import background from "../../assets/bg1.png";
import img1 from "../../assets/bike1.png";
import img2 from "../../assets/bike2.png";
import img3 from "../../assets/bike3.png";
import img4 from "../../assets/bike4.png";

function ExperienceCenter() {
  const bikeCards = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-10 bg-white bg-opacity-80">
          {/* Left side */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Experience Center
            </h1>
            <p className="text-base sm:text-lg mb-6">
              Feel the throttle, study the aerodynamics up close, and learn how
              Ducati electronics keep you fast and safe. Guided demo rides and
              pro setup sessions available every weekend.
            </p>

            <div className="flex flex-wrap gap-4 gap-y-4 mb-6">
              <div className="flex items-center w-full sm:w-[48%]">
                <FaFire className="text-red-600 text-xl" />
                <h5 className="px-2 text-base">Launch Control Demo</h5>
              </div>
              <div className="flex items-center w-full sm:w-[48%]">
                <IoIosTimer className="text-red-600 text-xl" />
                <h5 className="px-2 text-base">Track Timer Insights</h5>
              </div>
              <div className="flex items-center w-full sm:w-[48%]">
                <AiOutlineTool className="text-red-600 text-xl" />
                <h5 className="px-2 text-base">Pro Setup Station</h5>
              </div>
              <div className="flex items-center w-full sm:w-[48%]">
                <AiOutlineSafetyCertificate className="text-red-600 text-xl" />
                <h5 className="px-2 text-base">Safety Tech Briefing</h5>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Reserve a Slot
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                Nearest Center
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4">
            {bikeCards.map((bike, i) => (
              <div
                key={i}
                className="bg-white border border-blue-200 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
              >
                <img
                  src={bike.img}
                  alt={bike.label}
                  className="mb-2 w-full h-auto"
                />
                
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceCenter;
