import React from "react";
import { IoAnalyticsOutline, IoBagHandleSharp } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";

const JobSuccess = () => {
  return (
    <div className="bg-gray-200 py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 items-start md:items-center max-w-7xl mx-auto">
        {/* 1st Stat */}
        <div className="flex gap-4 items-center w-full md:w-auto">
          <div className="p-3 bg-gray-300 rounded-full">
            <IoAnalyticsOutline className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl text-[#27B94E] font-bold">126%</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              170% Average Salary Hike
            </p>
          </div>
        </div>

        {/* 2nd Stat */}
        <div className="flex gap-4 items-center w-full md:w-auto">
          <div className="p-3 bg-gray-300 rounded-full">
            <IoBagHandleSharp className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl text-[#FFA41B] font-bold">100%</h2>
            <p className="text-gray-700 text-sm sm:text-base">Job Placements</p>
          </div>
        </div>

        {/* 3rd Stat */}
        <div className="flex gap-4 items-center w-full md:w-auto">
          <div className="p-3 bg-gray-300 rounded-full">
            <PiIdentificationCard className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl text-red-600 font-bold">126%</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Interactive Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSuccess;
