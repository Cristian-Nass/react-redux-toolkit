import React, { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import "../styles/navigation-bar.css";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`nav-links ${width > 600 || isOpen ? "show" : "hide"}`}>
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Contact</button>
        <button className="nav-button">News</button>
      </div>
      <h1 className="navbar-logo">Logo</h1>
      <div
        className={`hamburger ${width <= 600 ? "visible" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavigationBar;
