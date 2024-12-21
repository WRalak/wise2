import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const conditions = [
    'Depression', 'Relationships', 'Anxiety', 'LGBTQIA',
    'Parenting', 'Chronic Illness', 'Eating Disorder', 'Anger Management',
    'Child Abuse', 'OCD', 'Mood Disorders', 'Trauma and Grief',
    'Loneliness', 'Family Conflict'
  ];

  return (
    <footer className="flex flex-col">
      {/* Dark Section */}
      <div className="bg-gray-800 text-white py-8 px-4">
        <div className="ml-0 md:ml-[330px]">
          <p className="mb-6 text-sm font-semibold">
            Our network of therapists and psychiatric providers have <br />
            specialization in 150+ conditions, treatment approaches, and <br />
            mental health needs.
          </p>

          {/* Conditions List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:text-xs justify-items-start text-white">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="text-red-600 mx-2">|</span>
                {condition}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white text-sm text-gray-800 py-16">
        <div className="ml-0 md:ml-[330px]">
          {/* GET IN TOUCH Section */}
          <h1 className="text-sm font-semibold text-gray-400 mb-4">GET IN TOUCH</h1>

          {/* Top Horizontal Line */}
          <div className="w-full border-t-2 border-gray-100 mb-4"></div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-10">
            <a href="tel:+254718964762" className="text-gray-500 text-sm flex items-center">
              +254718964762 <MdArrowOutward size={20} className="ml-2 text-red-600" />
            </a>
            <a href="mailto:contact@wisehealth.com" className="text-gray-500 flex items-center">
              helpme@mentality.com <MdArrowOutward size={20} className="ml-2 text-red-600" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 flex items-center">
              LinkedIn <MdArrowOutward size={20} className="ml-2 text-red-600" />
            </a>
          </div>

          {/* Bottom Horizontal Line */}
          <div className="w-full border-t-2 border-gray-100 mt-4"></div>

          {/* WISE Section */}
          <div className="  mb-2 mt-4">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#3B82F6] text-sm italic font-bold">
              WISE
            </div>
            <p className="text-sm text-gray-500">
              Our network of therapists and <br /> psychiatric providers <br /> specialize in 150+ conditions.
            </p>
          </div>

          {/* LOCATION, NAVIGATION, PARTNERS */}
          <div className="flex flex-col sm:flex-row justify-around text-center mb-10 px-4">
            <div className="flex flex-col items-center mb-6 sm:mb-0">
              <h3 className="text-gray-500 mb-2 mr-8 text-sm">LOCATION</h3>
              <p className="text-sm text-black">
                2578 Broadway #607<br />
                New York, NY 10025
              </p>
            </div>
            <div className="flex flex-col items-center mb-6 sm:mb-0">
              <h3 className="text-gray-500 mb-2 text-sm">NAVIGATION</h3>
              <p className="text-sm flex flex-col items-center">
                <span><span className="text-red-600">|</span> Home</span>
                <span><span className="text-red-600">|</span> Services</span>
                <span><span className="text-red-600">|</span> For Therapists</span>
              </p>
            </div>
            <div className="flex flex-col items-center mb-6 sm:mb-0">
              <h3 className="text-gray-500 text-sm">PARTNERS</h3>
              <p className="text-sm flex flex-col items-center">
                <span><span className="text-red-600">|</span> Cigna</span>
                <span><span className="text-red-600">|</span> Optum</span>
                <span><span className="text-red-600">|</span> Anthem</span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm mt-8 ">
            &copy; {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




