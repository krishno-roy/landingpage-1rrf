import React from 'react'
import { MdDownload } from 'react-icons/md';
import HeroImg from "../assets/herobg.png";
import { FaArrowRight } from 'react-icons/fa';


const Hero = () => {
  return (
    <div className="bg-[#1B99D4] px-12 sm:px-12 pb-10">
      <div className="container mx-auto pt-18 text-white grid grid-cols-1 md:grid-cols-2">
        <div className="md:flex md:relative items-center text-center md:text-left">
          <div className="space-y-5">
            <p className=" bg-white/30 px-3 rounded inline-block  ">
              Specialization over generalization
            </p>
            <h1 className="text-4xl font-bold">
              Advanced Data Science & AI Course
            </h1>
            <p className="md:w-sm text-center md:text-left">
              Equip yourself with data science skills through live, interactive
              lectures guided by industry expert mentors
            </p>
            <h5 className="text-xl font-semibold">Live Interactive Classes</h5>
            <button className="flex items-center gap-2 py-2 px-4 bg-white rounded text-black mx-auto md:mx-0">
              <MdDownload />
              Download Brochure
            </button>
          </div>
          <img
            src={HeroImg}
            alt=""
            className="md:absolute md:translate-x-70 mt-8 md:h-164 md:w-full md:bg-cover"
          />
        </div>

        {/* contact form */}
        <div className="bg-white md:w-sm md:translate-x-70 h-xl p-7 rounded space-y-3  md:height md:mt-10 sm:py-11 ">
          <h2 className="text-3xl text-black font-bold">We’re here to help!</h2>
          <p className="text-black">Please contact us in case of any query.</p>
          <div className="space-y-5 pt-6">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Your name"
              className="text-gray-500 py-2 px-4 w-full text-xl border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="text-gray-500 py-2 px-4 w-full text-xl border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Your name"
              className="text-gray-500 py-2 px-4 w-full text-xl border border-gray-300 rounded focus:outline-none "
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Your phone number name"
              className="text-gray-500 py-2 px-4 w-full text-xl border border-gray-300 rounded focus:outline-none "
            />
            <select
              name="course"
              id="course"
              className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none text-gray-500"
            >
              <option value="">Select Your Course</option>
              <option value="sales">WordPress</option>
              <option value="support">React</option>
              <option value="marketing">Shopify</option>
              <option value="development">Wix</option>
            </select>
            <button
              type="submit"
              className="bg-[#1B99D4] py-2 px-4 rounded  text-white flex items-center gap-3"
            >
              Get in Touch
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero