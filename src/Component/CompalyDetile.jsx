import React from 'react'
import { GiTimeTrap } from 'react-icons/gi';

const CompalyDetile = () => {
    const CompanyJobDetile = [
      {
        id: 1,
        icon: <GiTimeTrap className="mx-auto size-8" />,
        title: "Real Work Experience",
        discriptions:
          "Work with companies directly on software development projects to master your skills and build a strong project portfolio to get your.",
      },
      {
        id: 2,
        icon: <GiTimeTrap className="mx-auto size-8" />,
        title: "Guaranteed job referral",
        discriptions:
          "Our program seeks to eliminate financial risk in the upskilling journey with our guaranteed Job referrals option",
      },
      {
        id: 3,
        icon: <GiTimeTrap className="mx-auto size-8" />,
        title: "Crack FAANG Interview",
        discriptions:
          "Interact and Learn from mentors working in top product based companies to crack interviews for your dream role.",
      },
    ];
  return (
    <div className="bg-gray-200">
      <div className="py-12 container mx-auto">
        <div className="text-center space-y-4 ">
          <p className="text-sm font-semibold uppercase text-[#1B99D4]">
            RELATED COURSES
          </p>
          <h2 className="text-3xl font-bold">Why Join this Program ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 text-center">
          {CompanyJobDetile.map((job, index) => (
            <div key={index} className=" bg-white p-5 space-y-4 rounded-2xl py-8">
              <div className="text-center mx-auto bg-[#1B99D4] inline-block p-4 rounded-full text-white">{job.icon}</div>
              <h2 className='text-xl font-bold'>{job.title}</h2>
              <p>{job.discriptions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompalyDetile