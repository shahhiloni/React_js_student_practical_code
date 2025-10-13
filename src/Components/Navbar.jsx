import React, {useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../CSS/Navbar.css";

const Navbar = () => {
        let location = useLocation();
        useEffect(() => {
            console.log(location.pathname);
        }, [location])
return (
<div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                    </li>
                    
                </ul>
                <form className="d-flex">
                  <button className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </button>
                <button className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </button>
                </form>
            </div>
        </div>
    </nav>
</div>


)
}

export default Navbar 