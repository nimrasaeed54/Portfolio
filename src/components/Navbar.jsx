// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#432E54] p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl italic">Nimra Saeed</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300 ${
              isActive("/") ? "font-bold text-[#FF7A8A]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300 ${
              isActive("/about") ? "font-bold text-[#FF7A8A]" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300 ${
              isActive("/skills") ? "font-bold text-[#FF7A8A]" : ""
            }`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300 ${
              isActive("/projects") ? "font-bold text-[#FF7A8A]" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300 ${
              isActive("/contact") ? "font-bold text-[#FF7A8A]" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            {/* Hamburger Bars */}
            <div
              className={`w-full h-1 bg-[#f3f3f3] rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <div
              className={`w-full h-1 bg-[#f3f3f3] rounded transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-full h-1 bg-[#f3f3f3] rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[20px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#432E54] py-4`}
      >
        <Link
          to="/"
          className={`block text-[#f3f3f3] hover:text-[#FF7A8A] py-2 px-4 transition duration-300 ${
            isActive("/") ? "font-bold text-[#FF7A8A]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block text-[#f3f3f3] hover:text-[#FF7A8A] py-2 px-4 transition duration-300 ${
            isActive("/about") ? "font-bold text-[#FF7A8A]" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`block text-[#f3f3f3] hover:text-[#FF7A8A] py-2 px-4 transition duration-300 ${
            isActive("/skills") ? "font-bold text-[#FF7A8A]" : ""
          }`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={`block text-[#f3f3f3] hover:text-[#FF7A8A] py-2 px-4 transition duration-300 ${
            isActive("/projects") ? "font-bold text-[#FF7A8A]" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`block text-[#f3f3f3] hover:text-[#FF7A8A] py-2 px-4 transition duration-300 ${
            isActive("/contact") ? "font-bold text-[#FF7A8A]" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
