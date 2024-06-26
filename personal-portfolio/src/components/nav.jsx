import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [isclick, setisclick] = useState(false);
  const [color, setColor] = useState(false);

  let changeColor = () => {
    if (window.screenY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  let handleClick = () => {
    setisclick(!isclick);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={`header ${color ? "bg" : ""}`}>
      <h1>
        <Link className="title" to="/">
          PORTFOLIO
        </Link>
      </h1>

      <ul className={`nav-menu ${isclick ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleClick}>
            <i class="fa-solid fa-house"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/project">
            <i class="fa-solid fa-list-check"></i> Project
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fa-solid fa-user"></i> About me
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i class="fa-solid fa-address-book"></i> Contact
          </Link>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {isclick ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
