import React from "react";
import { FaUser, FaHandHoldingHeart } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import Link from "next/link";

const LoginForm = ({ closeForm }) => {
  return (
    <div className="relative p-4 w-[288px] h-[200px] bg-white rounded-lg shadow-lg">
      <button 
        onClick={closeForm} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="text-center mb-3">
        <h3 className="text-xl font-semibold">Login/Register</h3>
      </div>

      <p className="text-sm text-center mb-4">Would you like to continue?</p>

      {/* Buttons with icons */}
      <div className="flex justify-between mb-4">
        <Link href='/login' className="flex items-center justify-center w-[45%] py-2 px-4 border border-orange-300 rounded-xl text-orange-700 bg-orange-100">
          <FaUser className="mr-2 text-xl" /> Individual
        </Link>

        <Link href='/login' className="flex items-center justify-center w-[45%] py-2 px-4 border border-blue-300 rounded-xl text-blue-700 hover:bg-blue-100">
          <GoOrganization className="mr-2 text-xl" /> Organisation  
        </Link>
      </div>

      {/* Main Action Button */}
      <Link href='/login' className="w-full py-2 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center justify-center">
        <FaHandHoldingHeart className="mr-2 text-xl" /> Companion
      </Link>
    </div>
  );
};

export default LoginForm;
