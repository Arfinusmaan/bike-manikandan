import React from "react";
import img1 from "../../assets/bike1.png";
import bg5 from "../../assets/bg5.png";

function Compare() {
  const bikes = [
    {
      name: "Panigale V4",
      segment: "SuperSport",
      power: "215hp",
      weight: "198kg",
      ratio: "1.09hp/kg",
      price: "$28,995",
      image: img1,
    },
    {
      name: "Monster SP",
      segment: "Naked",
      power: "111hp",
      weight: "186kg",
      ratio: "0.60hp/kg",
      price: "$15,495",
      image: img1,
    },
    {
      name: "Multistrada V4",
      segment: "Adventure",
      power: "170hp",
      weight: "215kg",
      ratio: "0.79hp/kg",
      price: "$23,295",
      image: img1,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg5})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-900/40 z-0"></div>

      {/* Floating Ducati Tagline */}
      <div className="absolute top-6 right-6 text-white text-sm italic opacity-80 z-10">
        “Precision Meets Passion.”
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-black/60 p-4 rounded-xl shadow-lg">
          <div>
            <h1 className="text-4xl font-extrabold mb-1 text-white drop-shadow-lg">
              📊 Compare Specs
            </h1>
            <p className="text-gray-300">
              Side-by-side to help you choose your bike
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow-md">
            Book a Test Ride
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black/60 backdrop-blur-md border border-white/30 rounded-xl shadow-lg text-white">
            <thead className="bg-black/40">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Model</th>
                <th className="px-4 py-2 text-left">Segment</th>
                <th className="px-4 py-2 text-left">Power</th>
                <th className="px-4 py-2 text-left">Weight</th>
                <th className="px-4 py-2 text-left">Power/Weight</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike, index) => (
                <tr
                  key={index}
                  className="border-t border-white/30 hover:bg-white/10 transition"
                >
                  <td className="px-4 py-2">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="h-16 object-contain"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-100">{bike.name}</td>
                  <td className="px-4 py-2 text-gray-100">{bike.segment}</td>
                  <td className="px-4 py-2 text-gray-100">{bike.power}</td>
                  <td className="px-4 py-2 text-gray-100">{bike.weight}</td>
                  <td className="px-4 py-2 text-gray-100">{bike.ratio}</td>
                  <td className="px-4 py-2 text-gray-100">{bike.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Compare;
