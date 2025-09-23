import React from 'react'
import "../CSS/Register.css"

const Register = () => {
  return (
    <>
    <div className="card">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
        <form id="registrationForm" className="space-y-4">
            <div>
                <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" className="mt-1 block input-field" required />
            </div>
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block input-field" required />
            </div>
            <div>
                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 block input-field" required />
            </div>
            <div>
                <label for="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block input-field" required />
            </div>
            <button type="submit" className="btn">Register</button>
        </form>
        <div id="messageBox" className="message-box"></div>
    </div>
    </>
  )
}

export default Register
