import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LogoImg from "../assets/heraderlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center container mx-auto py-3 px-4">
        {/* Logo */}
        <div>
          <img src={LogoImg} alt="Logo" className="h-10" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#1B99D4]">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          <ul className="flex gap-6">
            <li>
              <a href="/" className="hover:text-[#1B99D4]">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#1B99D4]">
                Courses
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#1B99D4]">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#1B99D4]">
                Blogs
              </a>
            </li>
          </ul>
          <button className="bg-[#1B99D4] py-2 px-4 text-white rounded-lg">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/" className="block hover:text-[#1B99D4]">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-[#1B99D4]">
                Courses
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-[#1B99D4]">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-[#1B99D4]">
                Blogs
              </a>
            </li>
          </ul>
          <button className="w-full bg-[#1B99D4] py-2 text-white rounded-sm">
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
