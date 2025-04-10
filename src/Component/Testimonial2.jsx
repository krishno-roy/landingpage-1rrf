import React from "react";
import Comma from "../assets/comma.png";
import TeamImg from "../assets/team1.png";
import Star from "../assets/star.png";
import { IoLogoLinkedin } from "react-icons/io5";
const Testimonial2 = () => {
  return (
    <div className="bg-gray-100 px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-12 space-y-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:w-sm w-full text-center md:text-left">Thousands of stories of growth</h1>
          <p className="md:w-sm w-full text-center md:text-left">
            Find out how our Learners transformed their careers after learning
            witH us.
          </p>
        </div>
        <div className="space-y-4 shadow-2xl p-4 rounded bg-white">
          <img src={Comma} alt="" />
          <p>
            “As a senior engineer I have specially reviewed the System Design
            content and live classes of My_Tutor and I found it more on the
            implementation side instead of theoretical concepts which helps to
            work in real-time environment in the organization. I would recommend
            My_Tutor course to get expertise in System Design.”
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src={TeamImg} alt="" className="h-14" />
              <h1 className="font-bold">
                Prem Kumar <br />
                <span>
                  <img src={Star} alt="" className=""/>
                </span>
              </h1>
            </div>
            <div className="px-4 pb-4">
              <button className="flex items-center text-[#1B99D4] gap-2 font-medium hover:underline">
                <IoLogoLinkedin className="size-5" />
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
