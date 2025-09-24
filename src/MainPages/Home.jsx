import React from "react";
import "../CSS/Home.css";


const Home = () => {
  return (
    <>
    <div className="home-page">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/1200/500?random=1"
              className="d-block w-100"
              alt="slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Our Platform</h5>
              <p>Delivering the best services with trust and innovation.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1200/500?random=2"
              className="d-block w-100"
              alt="slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Modern & Secure</h5>
              <p>Security and speed you can always rely on.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1200/500?random=3"
              className="d-block w-100"
              alt="slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>24/7 Support</h5>
              <p>We’re here to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container content-section mt-5">
        <h2 className="text-center mb-4">About Our Platform</h2>
        <p className="text-center mb-5 text-muted w-75 mx-auto">
          We are committed to providing top-quality services with innovation,
          security, and user-friendliness at the core of everything we build.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">Fast & Secure</h5>
                <p className="card-text">
                  High performance with top-notch security for all users.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">User Friendly</h5>
                <p className="card-text">
                  Our platform is built for smooth, intuitive experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">
                  Our dedicated team is here to help you anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
