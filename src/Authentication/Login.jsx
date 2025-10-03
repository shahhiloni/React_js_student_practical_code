import React from "react";
import "../CSS/Register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
navigate("/");

  }
  return (
    <div className="card">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
      <form id="loginForm" className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block input-field"
            required
          />
        </div>

        <button type="submit" className="btn">Login</button>
      </form>

      <div className="message-box">
        <button 
         onClick={() => navigate("/forget-password")}
          style={{ color: "#6c5ce7", background: "none", border: "none", cursor: "pointer", fontWeight: "500" }}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;
