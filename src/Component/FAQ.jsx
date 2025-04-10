import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "How to enroll for a Course?",
    answer:
      "The course duration is 6 months including live classes, assignments, and project work.",
  },
  {
    question: "Can I get the recordings of my previous lectures?",
    answer:
      "Yes, the course starts with the basics and gradually moves to advanced topics.",
  },
  {
    question: "Who would be the instructor for enrolled course?",
    answer:
      "Yes, a certificate will be provided after successfully completing the course.",
  },
  {
    question:
      "What kind of placement support will be given post completion of program?",
    answer:
      "Absolutely! We provide dedicated placement support and interview preparation.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4 md:px-12">
        <div className="md:w-3xl mx-auto text-center w-full mb-8">
          <p className="text-[#1B99D4] font-semibold">ASK YOUR QUESTIONS</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border border-gray-200  rounded-lg p-3 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-3 ">
                <div className="text-xl text-[#1B99D4]">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
