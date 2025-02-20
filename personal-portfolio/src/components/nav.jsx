import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./nav.css";

const Navbar = () => {
  const location = useLocation();
  const [isClick, setIsClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleClick = () => {
    setIsClick(!isClick);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className={`header ${color ? "bg" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="heading">
        <div>
          <svg
            class="changing-color"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="30"
            height="30"
          >
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
        </div>
        <div>
          <Link className="title" to="/">
            PORTFOLIO
          </Link>
          <div>Full Stack Developer</div>
        </div>
      </h1>

      <motion.ul
        className={`nav-menu ${isClick ? "active" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/" ? "active-link" : ""}
        >
          <Link to="/" onClick={handleClick}>
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/project" ? "active-link" : ""}
        >
          <Link to="/project" onClick={handleClick}>
            <i className="fa-solid fa-list-check"></i> Project
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          <Link to="/about" onClick={handleClick}>
            <i className="fa-solid fa-user"></i> About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          <Link to="/contact" onClick={handleClick}>
            <i class="fa-solid fa-comment"></i> Contact
          </Link>
        </motion.li>
      </motion.ul>

      <motion.div
        className="menu"
        onClick={handleClick}
        whileTap={{ scale: 0.9, rotate: 90 }}
      >
        {isClick ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
