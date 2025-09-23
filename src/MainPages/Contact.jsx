import React from 'react'
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
    <h2>Contact Us</h2>
    <form>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"  
      />
    
      <input
        type="email"
        name="email"
        placeholder="Enter Email Address"
       
      />

      <input
        type="tel"
        name="contact"
        placeholder="Enter Contact Number"
       
      />

<textarea
          name="message"
          placeholder="Enter Your Message"
          rows="4"
        ></textarea>
    
      <button type="submit">Submit</button>
    </form>
  </div>

  )
}

export default Contact
