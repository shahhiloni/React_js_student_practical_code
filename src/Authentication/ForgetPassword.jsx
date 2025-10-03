import React from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

const handleReset = () => {
  navigate("/login")
}

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Reset Password
      </h2>
      
      <label 
        htmlFor="password" 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        New Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 
                   rounded-md shadow-sm placeholder-gray-400 
                   focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter new password"
        required
      />

      <button 
      onClick={handleReset}
        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgetPassword;
