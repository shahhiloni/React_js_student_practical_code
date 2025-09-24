import React, { useState } from "react";
import "../CSS/Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="feedback-page container my-5">
      <h2 className="feedback-title text-center mb-4">We Value Your Feedback</h2>
      {submitted && <p className="text-success text-center">Thank you for your feedback!</p>}
      <form className="feedback-form mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Write your feedback..." 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-feedback">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
