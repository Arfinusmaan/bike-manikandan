import Background from "../../assets/bg3.png";

function Family() {
  return (
    <div
      className="min-h-[300px] bg-cover bg-center flex items-center justify-center px-6 py-12 sm:px-16 lg:px-24"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Join the Family
          </h1>
          <p className="text-base sm:text-lg text-[#555] leading-relaxed">
            Get launch alerts, trackday invites, and exclusive showroom events.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button className="px-6 py-3 bg-[#d32f2f] text-white font-semibold rounded-full hover:bg-[#b71c1c] transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Family;
