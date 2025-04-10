import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "Unit 0 - Foundation Of Programming",
    answer:
      "The course duration is 6 months including live classes, assignments, and project work.",
  },
  {
    question: "Unit 1 - Data Structures and Algorithms",
    answer:
      "Yes, the course starts with the basics and gradually moves to advanced topics.",
  },
  {
    question: "Unit 2 - System Design in Depth",
    answer:
      "Yes, a certificate will be provided after successfully completing the course.",
  },
  {
    question: "Unit 3 - Advance Data Structures & Algorithms",
    answer:
      "Absolutely! We provide dedicated placement support and interview preparation.",
  },
  {
    question: "Unit 4 -Electives & Specialization",
    answer:
      "Absolutely! We provide dedicated placement support and interview preparation.",
  },
  {
    question:
      "Unit 5 -Work on End to End Projects in Partnership With Startups",
    answer:
      "Absolutely! We provide dedicated placement support and interview preparation.",
  },
];

const Readmap = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="bg-gray-100 px-6 ">
      <div className="container mx-auto py-12">
        <div className="text-xl md:w-6xl mx-auto w-full text-center">
          <p className="text-[#1B99D4]">A Readmap For Sucess</p>
          <h2 className="text-3xl font-bold">
            Our Comprehensive curriculum, Designed for professionals
          </h2>
        </div>

        {/* faq section  */}
        <div className="md:flex gap-3 pt-20 space-y-3">
          <div className="space-y-3 md:w-8/12 w-full">
            <div className="space-y-3 pb-5">
              <h2 className="text-xl font-bold">Course Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300  rounded-lg cursor-pointer transition-all duration-300 pb-4"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between p-1 items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <div className="text-xl text-black">
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* contact form */}

          <div className="bg-white h-xl p-7 rounded space-y-3  md:height md:mt-10 sm:py-11  md:w-4/12 w-full border-b-4  border-[#1B99D4]">
            <p className="text-black">Make Your Design Professional</p>
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
              <p>
                By submitting the form, you agree to our Terms and Conditions
                and our Privacy Policy.
              </p>
              <button className="bg-[#1B99D4] py-2 px-4 rounded w-full text-white">
                Apply for Counselling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmap;
