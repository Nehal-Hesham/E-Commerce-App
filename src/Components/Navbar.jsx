import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Image4 from "./Images/image-4.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>E-Commerce</h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact-us">Contact</a>
          </li>
        </ul>
      </nav>
   
    </>
  );
}

export default Navbar;
