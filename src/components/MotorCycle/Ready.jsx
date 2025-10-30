import React from "react";
import bike from "../../assets/bike-bg2.mp4";

function Ready() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bike} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
        <div className="text-center p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
            Ready For Track Day?
          </h1>
          <p className="text-gray-200 mb-5 text-sm leading-relaxed">
            Our pros will set your sag, dial in traction control, and get you
            race‑ready. Limited slots every Saturday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Book a Test Ride
            </button>
            <button className="bg-white text-red-600 px-6 py-2 rounded hover:bg-red-100 transition">
              Explore Financing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
