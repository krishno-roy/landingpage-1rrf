import React from 'react'
import Logo from "../assets/logo8.png";
import Time from "../assets/number.png";
import { FaDatabase, FaLaptop, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { SiNodedotjs } from 'react-icons/si';
import { FiTv } from 'react-icons/fi';
import { LuLaptopMinimalCheck } from 'react-icons/lu';


const Project = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 space-y-6 px-12">
        <div className="space-y-3">
          <h2 className="md:text-5xl font-bold text-2xl ">Hands-on Projects</h2>
          <p className="text-lg w-sm">
            Find out how our Mentor transformed their careers by giving
          </p>
          <div className="space-x-4">
            <button className="bg-[#20AD96] text-white py-1 px-10 rounded space-y-0">
              {" "}
              <span className="text-lg font-bold">10+</span> <br />
              Projects
            </button>
            <button className="bg-[#9747FF] text-white py-1 px-10 rounded space-y-0">
              {" "}
              <span className="text-lg font-bold">06+</span> <br />
              Domains
            </button>
          </div>
        </div>
        <div className="items-center bg-white p-6 space-y-4 rounded">
          <h4 className="text-gray-400 font-semibold text-lg">
            Authentication
          </h4>
          <img src={Logo} alt="" />
          <p className="text-sm text-black md:w-lg">
            Create authentication technology to give access, Correspond to those
            stored in a database of authorized users.
          </p>
          <div className="flex items-center gap-5 ">
            <span className="text-lg font-semibold">Tools:</span>
            <FaReact className="size-9 text-" />
            <FaDatabase className="size-9 text-" />
            <BsDatabase className="size-9 text-" />
            <SiNodedotjs className="size-9 text-" />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="container mx-auto py-12 md:flex gap-6 px-12 space-y-5">
        <div className="md:w-4/12 border border-gray-300 p-6 rounded w-full">
          <h4 className="text-xl font-bold pb-4">Course Highlights</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FiTv className="text-[#1B99D4] size-6" />
              <span className="text-lg font-semibold">350+ Live sessions</span>
            </li>
            <li className="flex items-center gap-2">
              <FiTv className="text-[#1B99D4] size-6" />
              <span className="text-lg font-semibold">
                15+ Industry Projects
              </span>
            </li>
            <li className="flex items-center gap-2">
              <LuLaptopMinimalCheck className="text-[#1B99D4] size-6" />
              <span className="text-lg font-semibold">
                Life time accessibility
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaLaptop className="text-[#1B99D4] size-6" />
              <span className="text-lg font-semibold">
                Live project experience
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-8/12 border border-gray-300 p-6 rounded items-center w-full">
          <div className="space-y-4 pt-8">
            <p className="md:w-lg">
              We are driven by the idea of program affordability. So, we give
              you several financial options to manage and budget the expenses of
              your course.
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Starting at ₹ 120,000 + GST <br />
                <span className="text-sm font-normal">
                  EMI starting from: ₹ 5,900/month
                </span>
              </h2>
              <button className="bg-[#1B99D4] px-4 py-2 rounded text-white">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="md:w-4xl mx-auto container py-12 px-12 ">
        <div>
          <h2 className="text-center text-2xl font-bold pb-8">
            Next Cohort Details
          </h2>
          <div className="border border-gray-300 p-7 rounded">
            <div className="flex justify-between border-dotted border-b-3 border-gray-300 pb-4 items-center">
              <img src={Time} alt="" className='h-6' />
              <h2 className="md:text-xl font-bold text-[12px] text-center">Weekend Batch [Sat - Sun]</h2>
              <button className="bg-[#1B99D4] text-white py-2 px-4 rounded">
                Enroll Now
              </button>
            </div>
            <div className="pt-4 flex justify-between">
              <h2 className="font-bold">
                Batch <br />{" "}
                <span className="font-normal text-sm">Morning</span>
              </h2>
              <h2 className="font-bold">
                Time <br />
                <span className="font-normal text-sm">09:00 am-12:00 pm</span>
              </h2>
              <h2 className="font-bold">
                Seat <br />
                <span className="font-normal text-sm">Available</span>
              </h2>
              <h2 className="font-bold">
                Venue <br />
                <span className="font-normal text-sm">Virtual Hall</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project