import React from 'react'
import LogoImg from "../assets/heraderlogo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between container mx-auto py-2">
        {/* logo */}
        <div>
          <img src={LogoImg} alt="" />
        </div>
        {/* desktop menu */}
        <div className="flex gap-4 justify-end items-center">
          <div className="text-left">
            <ul className="flex gap-6">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#1B99D4] py-2 px-4 text-white text-xl]">
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar