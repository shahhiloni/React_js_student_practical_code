import React from "react";
import "../CSS/Home.css";

const Home = () => {
return (
<>
  <div class="home-page">
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/1200/500?random=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1200/500?random=2" className="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1200/500?random=3" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
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