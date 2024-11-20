// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#432E54] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="text-white text-2xl italic">
          Nimra Saeed
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300">
            About
          </Link>
          <Link to="/skills" className="text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300">
            Skills
          </Link>
          <Link to="/projects" className="text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="text-[#f3f3f3] hover:text-[#FF7A8A] transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className=" text-[#f3f3f3] focus:outline-none">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggle visibility) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#f3f3f3] py-4`}>
        <Link to="/" className="block text-[#432E54] hover:text-[#FF7A8A] py-2 px-4 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="block text-[#432E54] hover:text-[#FF7A8A] py-2 px-4 transition duration-300">
          About
        </Link>
        <Link to="/skills" className="block text-[#432E54] hover:text-[#FF7A8A] py-2 px-4 transition duration-300">
          Skills
        </Link>
        <Link to="/projects" className="block text-[#432E54] hover:text-[#FF7A8A] py-2 px-4 transition duration-300">
          Projects
        </Link>
        <Link to="/contact" className="block text-[#432E54] hover:text-[#FF7A8A] py-2 px-4 transition duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
