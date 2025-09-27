import React from 'react';
import "../CSS/Service.css";
import { NavLink } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'UI / UX Design',
      description: 'User-centered interfaces, wireframes & prototypes that convert.',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Fast, accessible and SEO-friendly websites using modern stacks.',
    },
    {
      id: 3,
      title: 'Product Strategy',
      description: 'Roadmaps, metrics and growth experiments to scale your product.',
    },
   
  ];

  return (
    <div className="container-fluid pt-1 py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4" >
            <div className="card h-100 shadow-md">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;