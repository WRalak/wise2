'use client'

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register forms
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", formData);
    } else {
      console.log("Registering with", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md w-full sm:w-96 lg:w-1/3">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Login or Register Form */}
        <form onSubmit={handleSubmit}>
          {/* Common Fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Register Fields */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch between Login and Register */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-blue-700"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
