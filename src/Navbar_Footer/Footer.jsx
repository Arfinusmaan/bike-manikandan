import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#fff8f0] text-[#4a4a4a] px-6 py-12 border-t border-[#e0d6c3] font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
        {/* Brand Info */}
        <div>
          <img src='/logo.png' alt="Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
            Velan Yamaha Motors — Where performance meets elegance. Discover
            your ride, your style, your story.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#a67c00] text-base font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#a67c00] transition">Home</Link></li>
            <li><Link to="/bikes" className="hover:text-[#a67c00] transition">Bike Details</Link></li>
            <li><Link to="/contact" className="hover:text-[#a67c00] transition">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:text-[#a67c00] transition">Blog / News</Link></li>
            <li><Link to="/accessories" className="hover:text-[#a67c00] transition">Accessories</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#a67c00] text-base font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#a67c00]" /> +91 98765 43210</p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-[#a67c00]" /> support@velanyamaha.com</p>
          <p>📍 Palani, Tamil Nadu</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#a67c00] text-base font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-[#a67c00] hover:text-[#4a4a4a] transition"><FaFacebookF /></a>
            <a href="#" className="text-[#a67c00] hover:text-[#4a4a4a] transition"><FaInstagram /></a>
            <a href="#" className="text-[#a67c00] hover:text-[#4a4a4a] transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#e0d6c3] pt-4 text-center text-xs text-[#777]">
        © {new Date().getFullYear()} Velan Yamaha Motors. Crafted with ❤️ in Tamil Nadu.
      </div>
    </footer>
  );
}

export default Footer;