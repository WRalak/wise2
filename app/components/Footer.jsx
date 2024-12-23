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
      <div className="bg-gray-800 text-white py-10 px-6">
        <div className="max-w-screen-xl mx-auto lg:ml-[330px]">
          <p className="mb-6 text-xs sm:text-xs text-center sm:text-left">
            Our network of therapists and psychiatric providers have <br />
            specialization in 150+ conditions, treatment approaches, and <br />
            mental health needs.
          </p>

          {/* Conditions List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-xs text-center sm:text-left">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center">
                <span className="text-red-600 mx-2">|</span>
                {condition}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto lg:ml-[330px]">
          {/* GET IN TOUCH Section */}
          <h1 className="text-sm text-gray-400 mb-4 text-center sm:text-left">GET IN TOUCH</h1>

          <div className="border-t-2 border-gray-100 mb-4"></div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-10 mb-6">
            <a href="tel:+254718964762" className="text-black text-xs flex items-center">
              +254718964762 <MdArrowOutward size={15} className="ml-2 text-red-600" />
            </a>
            <a href="mailto:contact@wisehealth.com" className="text-black text-xs flex items-center">
              helpme@mentality.com <MdArrowOutward size={15} className="ml-2 text-red-600" />
            </a>
            <a href="https://linkedin.com" className="text-black flex text-xs items-center">
              LinkedIn <MdArrowOutward size={15} className="ml-2 text-red-600" />
            </a>
          </div>

          <div className="border-t-2 border-gray-100 mt-4"></div>

          {/* WISE Section */}
          <div className="mt-6 mb-10  text-center sm:text-left">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#3B82F6] text-xl font-bold italic">
              WISE
            </div>
            <p className="text-sm text-gray-800">
              Our network of therapists and <br /> psychiatric providers specialize in 150+ conditions.
            </p>
          </div>

          {/* LOCATION, NAVIGATION, PARTNERS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">LOCATION</h3>
              <p className="text-sm text-black">
                2578 Broadway #607<br />
                New York, NY 10025
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm mb-2">NAVIGATION</h3>
              <p className="text-sm">
                <span className="block"><span className="text-red-600">|</span> Home</span>
                <span className="block"><span className="text-red-600">|</span> Services</span>
                <span className="block"><span className="text-red-600">|</span> For Therapists</span>
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm mb-2">PARTNERS</h3>
              <p className="text-sm">
                <span className="block"><span className="text-red-600">|</span> Cigna</span>
                <span className="block"><span className="text-red-600">|</span> Optum</span>
                <span className="block"><span className="text-red-600">|</span> Anthem</span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className=" mt-10 text-gray-950 text-xs">
            &copy; {currentYear} 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

