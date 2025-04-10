import React from "react";
import Microsoftr from "../assets/microSoft.png";
import Member1 from "../assets/member-11.png";
import Member2 from "../assets/member-2.png";
import Member3 from "../assets/member-3.png";
import { IoLogoLinkedin } from "react-icons/io5";

const Team = () => {
  const TeamDetile = [
    {
      id: 1,
      name: "Sachin Sharma",
      subtitle: "Managing Director",
      img: Member2,
      icon: Microsoftr,
    },
    {
      id: 2,
      name: "Santosh Kumar Mishra",
      subtitle: "Managing Director",
      img: Member3,
      icon: Microsoftr,
    },
    {
      id: 3,
      name: "Prem Kumar",
      subtitle: "Mentorship",
      img: Member1,
      icon: Microsoftr,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="font-semibold text-[#1B99D4]">DISCOVER OUR MENTORS</p>
          <h2 className="text-xl md:text-3xl font-bold max-w-4xl mx-auto">
            We have Industry Experts as Mentors who guide you with Career
            Planning & Interview Preparation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
          {TeamDetile.map((team) => (
            <div
              key={team.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={team.img}
                alt={team.name}
                className="w-full h-90 object-cover"
              />
              <div className="flex justify-between items-center p-4">
                <div>
                  <h3 className="text-lg font-bold">{team.name}</h3>
                  <p className="text-gray-600 text-sm">{team.subtitle}</p>
                </div>
                <img src={team.icon} alt="company" className="h-6 w-auto" />
              </div>
              <div className="px-4 pb-4">
                <button className="flex items-center text-[#1B99D4] gap-2 font-medium hover:underline">
                  <IoLogoLinkedin className="size-5" />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
