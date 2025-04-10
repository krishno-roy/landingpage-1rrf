import React from 'react'
import LogoImg from "../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { PiMapPin } from 'react-icons/pi';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="bg-[#1B99D4] px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 py-14 gap-5 space-y-3">
        <div className="space-y-4">
          <img src={LogoImg} alt="" />
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </p>
          <div className="flex gap-5">
            <div className="p-2 bg-white/30 rounded text-white">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-white/30 rounded text-white">
              <FaLinkedinIn />
            </div>
            <div className="p-2 bg-white/30 rounded text-white">
              <SlSocialPintarest />
            </div>
            <div className="p-2 bg-white/30 rounded text-white">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-white font-bold">Explore</h2>
          <ul className="space-y-4">
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Campus Program
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                {" "}
                <MdKeyboardDoubleArrowRight />
                Become a Mentor
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Hire From us
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-white font-bold">Useful Links</h2>
          <ul className="space-y-4">
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Terms of use
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <MdKeyboardDoubleArrowRight />
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-white font-bold">Contact Info</h2>
          <ul className="space-y-4">
            <li>
              <a href="/" className="flex gap-2  text-white">
                <PiMapPin className="size-8" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <FaPhoneAlt />
                +91-9024250272
              </a>
            </li>
            <li>
              <a href="/" className="flex gap-2 items-center text-white">
                <IoMdMail />
                shubhammodi820@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer