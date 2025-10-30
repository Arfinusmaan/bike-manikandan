import React from "react";
import cart1 from "../../assets/Helmet.png";
import cart2 from "../../assets/Carbon.png";
import cart3 from "../../assets/jacket.png";
import cart4 from "../../assets/tyre.png";

const bikeModels = [
  {
    image: cart1,
    description: "Racing Helmet",
  },
  {
    image: cart2,
    description: "Carbon Exhaust",
  },
  {
    image: cart3,
    description: "Rider Jacket",
  },
  {
    image: cart4,
    description: "Performance Tyres",
  },
];

function Accessories() {
  return (
    <div className="bg-gradient-to-r from-[#fae7e7] via-[#fae7e7] to-[#fae7e7] px-6 py-12 sm:px-16 sm:py-20 lg:px-24 lg:py-28 font-[Poppins] rounded-[10px] text-white">
      {/* Header */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <div className="pb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Accessories & Merch
          </h1>
          <p className="text-lg sm:text-xl font-medium mt-3 text-[#555] leading-relaxed">
            Complete your build with performance parts and protective gear.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="text-[#d32f2f] font-semibold hover:text-[#b71c1c] transition-colors duration-300 text-lg"
          >
            Shop now →
          </a>
        </div>
      </section>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bikeModels.map((bike, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="mb-4 w-full h-40 flex items-center justify-center border-4">
              <img
                src={bike.image}
                alt={bike.description}
                className="h-full object-contain"
              />
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-black mb-4">
              {bike.description}
            </h2>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
