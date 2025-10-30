import React, { useState } from "react";
import cardimg1 from "../../assets/bike1.png";
import bg4 from "../../assets/bg4.png";

function Motorcycle() {
  const [maxPrice, setMaxPrice] = useState(3000000);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const bikes = [
    {
      name: "Panigale V4",
      segment: "Supersport",
      power: "215hp",
      weight: "198kg",
      price: 2150000,
      image: cardimg1,
    },
    {
      name: "Monster SP",
      segment: "Naked",
      power: "111hp",
      weight: "186kg",
      price: 1350000,
      image: cardimg1,
    },
    {
      name: "Multistrada V4",
      segment: "Adventure",
      power: "170hp",
      weight: "215kg",
      price: 2100000,
      image: cardimg1,
    },
    {
      name: "Scrambler Icon",
      segment: "Cruiser",
      power: "73hp",
      weight: "185kg",
      price: 950000,
      image: cardimg1,
    },
    {
      name: "DesertX",
      segment: "Adventure",
      power: "110hp",
      weight: "202kg",
      price: 1600000,
      image: cardimg1,
    },
  ];

  const filteredBikes = bikes.filter((bike) => {
    const segmentMatch = selectedSegment
      ? bike.segment.toLowerCase() === selectedSegment.toLowerCase()
      : true;
    const priceMatch = bike.price <= maxPrice;
    const searchMatch = bike.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return segmentMatch && priceMatch && searchMatch;
  });

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-red-900/40 z-0"></div>

      {/* Floating Ducati Tagline */}
      <div className="absolute top-6 right-6 text-white text-sm italic opacity-80 z-10">
        “Born to Race. Built to Rule.”
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-black animate-pulse drop-shadow-lg">
            🏍️ Ducati Motorcycles
          </h1>
          <p className="text-gray-500 mt-2">
            Explore Ducati's latest range. Filter by segment and budget.
          </p>
        </div>

        {/* Filter Row */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg">
          {/* Search */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-sm font-medium text-white mb-1">
              🔍 Search
            </label>
            <input
              type="text"
              placeholder="Search Models"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/80"
            />
          </div>

          {/* Segment */}
          <div className="flex flex-col w-full md:w-1/3">
            <label
              htmlFor="segment"
              className="text-sm font-medium text-white mb-1"
            >
              🧩 Segment
            </label>
            <select
              name="segment"
              id="segment"
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/80"
            >
              <option value="">All</option>
              <option value="Supersport">SuperSport</option>
              <option value="Naked">Naked</option>
              <option value="Adventure">Adventure</option>
              <option value="Cruiser">Cruiser</option>
            </select>
          </div>

          {/* Max Price */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-sm font-medium text-white mb-1">
              💰 Max Price [₹{maxPrice.toLocaleString()}]
            </label>
            <input
              type="range"
              min="100000"
              max="3000000"
              step="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Bike Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBikes.length === 0 ? (
            <p className="text-center text-white col-span-3">
              No bikes match your filters.
            </p>
          ) : (
            filteredBikes.map((bike, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-center p-4">
                  <h2 className="text-lg font-semibold text-white">
                    {bike.name}
                  </h2>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-md">
                    {bike.segment}
                  </span>
                </div>

                <div className="bg-gray-100 flex justify-center items-center h-48 rounded-md overflow-hidden bg-white/20 backdrop-blur-md">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="h-full object-contain "
                  />
                </div>

                <div className="flex justify-between px-5 py-4 text-sm text-white">
                  <div>
                    <p className="font-bold">{bike.power}</p>
                    <p>Power</p>
                  </div>
                  <div>
                    <p className="font-bold">{bike.weight}</p>
                    <p>Dry weight</p>
                  </div>
                  <div>
                    <p className="font-bold">₹{bike.price.toLocaleString()}</p>
                    <p>Price</p>
                  </div>
                </div>

                <div className="flex justify-between px-4 pb-4">
                  <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                    Test Ride
                  </button>
                  <button className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-50">
                    Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Motorcycle;
