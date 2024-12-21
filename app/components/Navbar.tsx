"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import LoginForm from "../components/LoginForm";

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
    <nav className="backdrop-blur-md bg-white/80 shadow-md w-full fixed top-0 z-50">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#3B82F6] italic text-xl md:text-2xl font-bold lg:ml-60">
          WISE
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex  items-center space-x-6 lg:mr-40">
          <Link href="/">
            <p className="text-gray-600 text-sm hover:text-blue-600">Home</p>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsContainerVisible(!isContainerVisible)}
          >
            <p className="text-gray-600 text-sm cursor-pointer hover:text-blue-600">
              Services
            </p>
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
                  <p className="font-semibold text-gray-600 mb-2 flex items-center">
                    <MdArrowOutward className="text-blue-800" size={15} />
                    Assessments
                  </p>
                  <ul className="text-gray-500 text-xs space-y-1">
                    <li>Health-Related Social Needs</li>
                    <li>SDOH Needs</li>
                    <li>Routine Needs</li>
                  </ul>
                  <p className="mt-4 font-semibold text-gray-600 flex items-center">
                    <MdArrowOutward className="text-blue-800" size={15} />
                    Follow-Up Program
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link href="/resources">
            <p className="text-gray-600 text-sm hover:text-blue-600">Resources</p>
          </Link>
          <Link href="/support">
            <p className="text-gray-600 text-sm hover:text-blue-600">Support</p>
          </Link>
          <Link href="/careers">
            <p className="text-gray-600 text-sm hover:text-blue-600">Careers</p>
          </Link>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4 lg:mr-10">
          <Link href="/contact">
            <p className="text-gray-600 text-sm ">
              Contact Us
            </p>
          </Link>
          <Link href="/login">
            <button className="border-2 px-4 py-2 border-blue-500 text-blue-600 rounded-lg text-sm">
              Log In
            </button>
          </Link>
          <button
            onClick={toggleFormVisibility}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg  text-sm"
          >
            Start for Free
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
          <div className="px-4 py-2 space-y-2">
            <Link href="/">
              <p className="block text-gray-600 text-sm">Home</p>
            </Link>
            <Link href="/services">
              <p className="block text-gray-600 text-sm">Services</p>
            </Link>
            <Link href="/resources">
              <p className="block text-gray-600 text-sm">Resources</p>
            </Link>
            <Link href="/support">
              <p className="block text-gray-600 text-sm">Support</p>
            </Link>
            <Link href="/careers">
              <p className="block text-gray-600 text-sm">Careers</p>
            </Link>
            <Link href="/contact">
              <p className="block text-gray-600 text-sm">Contact Us</p>
            </Link>
            <button className="block w-full text-left border-2 bg-white border-blue-600 text-blue-600 px-4 py-2 rounded text-sm">
              Log In
            </button>
            <button className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Start for Free
            </button>
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
