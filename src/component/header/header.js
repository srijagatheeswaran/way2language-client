import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu function
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo-box">Logo</div>

            {/* Overlay (Click to Close Menu) */}
            <div className={isMenuOpen ? "overlay show" : "overlay"} onClick={closeMenu}></div>

            {/* Search Box (Visible on Larger Screens) */}
            <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0 search-box1">
                <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="button">
                    <i className="bi bi-search"></i>
                </button>
            </form>

            {/* Navigation Menu */}
            <nav className={isMenuOpen ? "open" : ""}>
                <i className="bi bi-x-lg close-btn" onClick={closeMenu}></i>
                
                <ul className="m-0">

                    <li onClick={closeMenu}>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Home
                        </NavLink>
                    </li>

                    <li onClick={closeMenu}>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                            About
                        </NavLink>
                    </li>

                    <li onClick={closeMenu}>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Courses
                        </NavLink>
                    </li>

                    <li onClick={closeMenu}>
                        <NavLink to="/certificate" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Certificate
                        </NavLink>
                    </li>

                    <li onClick={closeMenu}>
                        <NavLink to="/contact-us" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Menu Icon (Opens the Menu) */}
            <i className="bi bi-list me-3 menu-icon" onClick={toggleMenu}></i>
        </header>
    );
};

export default Header;
