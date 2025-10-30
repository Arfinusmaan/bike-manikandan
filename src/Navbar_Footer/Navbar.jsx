import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src='/logo.png' alt="Logo" className="h-12" />
          <div className="text-xl font-bold text-[#333]">
            Velan Yamaha Motors
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <input
            type="text"
            placeholder="Search bikes..."
            className="px-4 py-2 rounded-full border border-gray-300 w-[70%] max-w-[300px] text-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <FaRegHeart className="text-[#a67c00] text-lg" />
          <button className="px-3 py-1 rounded-full bg-[#a67c00] text-white font-medium text-sm">
            Book Test Ride
          </button>
          <button className="px-3 py-1 rounded-full bg-[#333] text-white font-medium text-sm">
            Login
          </button>
          <button className="px-3 py-1 rounded-full bg-[#333] text-white font-medium text-sm">
            Register
          </button>

          {/* Toggle Icon (Mobile Only) */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-[#333] cursor-pointer md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex justify-center gap-6 py-3 bg-white text-sm font-medium text-[#333]">
        <Link to="/" className="hover:text-[#a67c00] transition">
          Home
        </Link>
        <Link to="/Motorcycle" className="hover:text-[#a67c00] transition">
          Motorcycle
        </Link>
        <Link to="/Services" className="hover:text-[#a67c00] transition">
          Services
        </Link>
        <Link to="/Showroom" className="hover:text-[#a67c00] transition">
          Showroom
        </Link>
        <Link to="/Heritage" className="hover:text-[#a67c00] transition">
          Heritage
        </Link>
        <Link to="/Gallery" className="hover:text-[#a67c00] transition">
          Gallery
        </Link>
      </div>

      {/* Toggle Menu (Mobile Only) */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-[#333]">
            <li>
              <Link to="/" className="hover:text-[#a67c00] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Motorcycle" className="hover:text-[#a67c00] transition">
                Motorcycle
              </Link>
            </li>
            <li>
              <Link to="/Services" className="hover:text-[#a67c00] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Showroom" className="hover:text-[#a67c00] transition">
                Showroom
              </Link>
            </li>
            <li>
              <Link to="/Heritage" className="hover:text-[#a67c00] transition">
                Heritage
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                className="hover:text-[#a67c00] transition"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
