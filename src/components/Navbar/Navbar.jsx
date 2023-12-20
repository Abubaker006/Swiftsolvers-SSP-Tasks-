import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`header ${isOpen ? "headerOpen" : ""}`}>
      <div className="navbar">
        <div className="NavbarBox" onClick={handleClick}>
          <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
      {isOpen ? (
        <>
          <ul className={isOpen ? "List" : ""}>
            <li className="listItems">
              <NavLink className="NavLink" to="/">
                Home
              </NavLink>
            </li>
            <li className="listItems">
              <NavLink className="NavLink" to="/features">
                Features
              </NavLink>
            </li>
            <li className="listItems">
              <NavLink className="NavLink" to="/testimonials">
                Testimonials
              </NavLink>
            </li>
            <li className="listItems">
              <NavLink className="NavLink" to="/about">
                About
              </NavLink>
            </li>
            <li className="listItems">
              <NavLink className="NavLink" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
