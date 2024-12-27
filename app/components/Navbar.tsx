'use client'

import React, { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

import LoginForm from "./LoginForm";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleContainerClose = () => {
    setIsContainerVisible(false);
    setIsHovered(false);
  };

  return (
    <nav className="backdrop-blur-md bg-white/70  w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#3B82F6] font-sans  italic text-sm md:text-xl font-bold lg:ml-60">
          WISE
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-6 lg:mr-52">
          <Link href="/">
            <p className="text-black text-sm">Home</p>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsContainerVisible(!isContainerVisible)}
          >
            <Link href="/services">
            <p className="text-black text-xs cursor-pointer">
              Services
            </p>
            </Link>
           


            {(isHovered || isContainerVisible) && (
              <div className="absolute top-full left-0 mt-2 w-[240px] md:w-[320px] bg-white p-3 shadow-lg rounded-lg z-50">
                {/* Close button */}
                <button
                  onClick={handleContainerClose}
                  className="absolute top-2 right-2 text-gray-500"
                >
                  <IoIosClose size={20} />
                </button>
                <div>
                  <p className="font-semibold text-gray-950 mb-2 flex items-center text-xs">
                    <MdArrowOutward className="text-blue-800" size={13} />
                    Assessments
                  </p>
                  <ul className="text-gray-950 text-xs p-4 space-y-1">
                  <p className="text-gray-950 text-xs">• Health-Related Social Needs</p>
                  <p className="text-gray-950 text-xs">• SDOH Needs</p>
                  <p className="text-gray-950 text-xs">• Routine Needs</p>
                  </ul>
                  <p className="mt-4 font-semibold text-gray-800 flex items-center text-xs">
                    <MdArrowOutward className="text-blue-800 " size={13} />
                    Follow Up – Follow Along Program
                        (CBO partnership & grant funded)
                  </p>
                  <p className="mt-4 font-semibold text-gray-800 flex items-center text-xs">
                    <MdArrowOutward className="text-blue-800 " size={13} />
                    Companion Care
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link href="/resources">
            <p className="text-black text-xs">Resources</p>
          </Link>
          <Link href="/support">
            <p className="text-black text-xs">Support</p>
          </Link>
          <Link href="/careers">
            <p className="text-black text-xs">Careers</p>
          </Link>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4 lg:mr-9">
          <Link href="/contact">
            <p className="text-black text-xs">Contact Us</p>
          </Link>
          <Link href="/login">
            <button className="border px-4 py-2 border-blue-500 text-blue-600 rounded-lg text-xs">
              Log In
            </button>
          </Link>
          <button
            onClick={toggleFormVisibility}
            className="bg-blue-500 text-white flex px-4 py-2 rounded-lg text-xs"
          >
            Start for Free
            <IoIosArrowDown className="ml-2 text-xs items-center" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoIosClose size={24} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2 font-inter">
            <Link href="/">
              <p className="block text-blue-500  text-xs mb-2">Home</p>
            </Link>
            <Link href="/services">
              <p className="block  text-blue-500  text-xs mb-2">Services</p>
            </Link>
            <Link href="/resources">
              <p className="block  text-blue-500  text-xs mb-2">Resources</p>
            </Link>
            <Link href="/support">
              <p className="block  text-blue-500  text-xs mb-2">Support</p>
            </Link>
            <Link href="/careers">
              <p className="block  text-blue-500  text-xs mb-2">Careers</p>
            </Link>
            <Link href="/contact">
              <p className="block  text-blue-500  text-xs mb-2">Contact Us</p>
            </Link>
            <Link href='/login'><button className="block  text-left border bg-white border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">
              Log In
            </button></Link>
            <Link href='/login'>
            <button className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm mt-2">
              Start for Free
            </button></Link>
           
          </div>
        </div>
      )}

      {/* Login form */}
      {isFormVisible && (
        <div className="fixed top-[70px] right-4 w-[288px] bg-white rounded-lg shadow-lg z-50">
          <LoginForm closeForm={() => setIsFormVisible(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
