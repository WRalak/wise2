'use client'

import { useState } from 'react';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [userType, setUserType] = useState('individual');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    organizationName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {isRegistering ? 'Register' : 'Login'}
      </h2>

      {/* User Type Toggle */}
      <div className="flex justify-around mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${userType === 'individual' ? 'bg-blue-500 text-white' : 'bg-orange-200'}`}
          onClick={() => setUserType('individual')}
        >
          Individual
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${userType === 'companion' ? 'bg-blue-500 text-white' : 'bg-blue-700'}`}
          onClick={() => setUserType('companion')}
        >
          Companion
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${userType === 'organization' ? 'bg-blue-300 text-white' : 'bg-gray-200'}`}
          onClick={() => setUserType('organization')}
        >
          Organization
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Conditional Fields */}
        {isRegistering && userType === 'individual' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        )}

        {isRegistering && userType === 'organization' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Organization Name</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </div>
      </form>

      {/* Toggle between Login and Register */}
      <div className="text-center text-sm">
        <p>
          {isRegistering ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500 hover:underline"
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
