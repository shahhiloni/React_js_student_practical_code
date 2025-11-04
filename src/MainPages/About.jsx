import React from "react";
import "../CSS/About.css";

const About = () => {

  return (
    <div className="about-page container my-5">
      <div className="row align-items-center">
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="about-image">
            <img src="https://picsum.photos/1200/500?random=3" alt="About Us" className="img-fluid rounded shadow" />
          </div>
        </div>        
        <div className="col-lg-6">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Welcome to MyWebsite! We are dedicated to providing the best services to our clients.
            Our team of experts ensures high-quality solutions tailored to your needs. We value
            innovation, integrity, and customer satisfaction above everything else.
          </p>
          <p className="about-text">
            Our journey started with a vision to make a difference in the industry. We continuously
            strive to enhance our services, adopt modern technologies, and exceed our customers’
            expectations. Join us and experience excellence in every step.
          </p>
          <button className="btn btn-about mt-3">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
