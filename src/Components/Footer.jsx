import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="footer-brand">MyWebsite</h4>
            <p className="small text-muted">
              Delivering the best services with trust, innovation, and 
              a customer-first approach. Your success is our mission.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/service" className="footer-link">Services</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
              <li><NavLink to="/faq" className="footer-link">FAQ</NavLink></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="small mb-1"><i className="bi bi-geo-alt-fill me-2"></i> New Delhi, India</p>
            <p className="small mb-1"><i className="bi bi-telephone-fill me-2"></i> +91 9876543210</p>
            <p className="small mb-1"><i className="bi bi-envelope-fill me-2"></i> support@mywebsite.com</p>

    
            <div className="mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-4 border-top pt-3 small">
          © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
