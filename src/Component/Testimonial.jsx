import React from 'react'
import Team1 from "../assets/team1.png"
import Team2 from "../assets/team2.png"
import Team3 from "../assets/team3.png";
import LogoImg1 from "../assets/Walmart_logo.png";
import LogoImg2 from "../assets/jpMorgan.png";
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { IoAnalyticsOutline } from 'react-icons/io5';

const Testimonial = () => {

const TestimonialDetile = [
  {
    id: 1,
    img: Team1,
    title: "Shaumaya Qha",
    subtitle: "Software Engineer",
    diScriptcs:
      "Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well through outthe course.",
  },
  {
    id: 2,
    img: Team2,
    title: "Subhangi Duhan",
    subtitle: "Software Researcher",
    diScriptcs:
      "Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well through outthe course.",
  },
  {
    id: 3,
    img: Team3,
    title: "Paras Yadav",
    subtitle: "Software Tester",
    diScriptcs:
      "Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well through outthe course.",
  },
];
  return (
    <div className="bg-gray-200 py-12 px-12">
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold text-[#1B99D4]">
          A Roadmap For Sucess
        </p>
        <h2 className="text-3xl font-bold">
          Our Comprehensive curriculum, Designed for professionals
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 py-15 gap-8 ">
        {TestimonialDetile.map((testimonial, id) => (
          <div key={id} className="">
            <div className="bg-white p-6 space-y-2">
              <div className="flex justify-between items-center">
                <img src={testimonial.img} alt="" className="testimonialImg" />
                <div>
                  <button className="flex gap-3 items-center text-sm font-semibold text-[#43A55D] border border-[#43A55D] px-4 py-2 ">
                    <IoAnalyticsOutline />
                    <span>90% Hike</span>
                  </button>
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold">{testimonial.title}</h1>
                <p className="text-sm font-semibold">{testimonial.subtitle}</p>
              </div>
              <p>{testimonial.diScriptcs}</p>
              <div className="flex items-center gap-3 py-4">
                <img src={LogoImg1} alt="" className="h-5" />
                <FaArrowRight />
                <img src={LogoImg2} alt="" className="h-5" />
              </div>
              <div>
                <button className="flex items-center gap-2 text-[#0A66C2]">
                  {" "}
                  <FaLinkedin className=" size-6" />
                  <span className="text-[16px] font-semibold">
                    Read full review
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=''>
        <button className="flex gap-1 bg-[#1B99D4]  mx-auto py-2 px-4 text-white font-semibold items-center">
          Connect Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonial