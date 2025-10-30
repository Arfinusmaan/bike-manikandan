import React, { useState } from "react";
import cart1 from "../../assets/bike1.png";
import cart2 from "../../assets/bike2.png";
import cart3 from "../../assets/bike3.png";

const bikeModels = [
  {
    name: "Panigale V4",
    image: cart1,
    description: "The pinnacle of SuperSport performance.",
  },
  {
    name: "Streetfighter V4",
    image: cart2,
    description: "Born to rule the streets.",
  },
  {
    name: "Multistrada V4",
    image: cart3,
    description: "Tour the world with authority.",
  },
];

function Models() {
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const resetTransform = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div className="bg-gradient-to-r from-[#fae7e7] via-[#fae7e7] to-[#fae7e7] px-6 py-12 sm:px-16 sm:py-20 lg:px-24 lg:py-28 font-[Poppins] rounded-[10px] text-white">
      {/* Header */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <div className="pb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Featured Models
          </h1>
          <p className="text-lg sm:text-xl font-medium mt-3 text-[#555] leading-relaxed">
            Handpicked icons representing Ducati performance DNA
          </p>
        </div>
        <div>
          <a
            href="#"
            className="text-[#d32f2f] font-semibold hover:text-[#b71c1c] transition-colors duration-300 text-lg"
          >
            View all →
          </a>
        </div>
      </section>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bikeModels.map((bike, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">
              {bike.name}
            </h2>

            <div
              className="mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-white"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTransform}
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease",
                transform: transformStyle,
                width: "100%",
                height: "250px",
              }}
            >
              <img
                src={bike.image}
                alt={bike.name}
                className="max-h-full max-w-full object-contain blur-sm group-hover:blur-0 transition-all duration-500 ease-in-out"
                style={{ width: "auto", height: "100%" }}
              />
            </div>

            <p className="text-sm sm:text-base text-[#666] mb-4 leading-relaxed">
              {bike.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <button className="border-2 border-[#d32f2f] text-[#d32f2f] px-6 py-2 rounded-full font-semibold hover:bg-[#d32f2f] hover:text-white transition-all duration-300 transform hover:scale-105">
                Test Ride
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Models;
