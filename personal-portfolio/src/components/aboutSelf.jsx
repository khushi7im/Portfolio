import React from "react";
import BgImg from "../assets/home.jpg";
import ProfileImg from "../assets/profile.png";
import "./aboutSelf.css";
import Navbar from "./nav";

function AboutMyself() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={BgImg} alt="nothing" className="about-bg" />
      </div>

      <div className="about-data">
        <div className="mainInfo">
          Hello, I'm Khushi Dhiman, currently pursuing a diploma in computer
          engineering. As a frontend developer, I specialize in building
          websites using the React.js framework along with HTML and CSS. I have
          a passion for creating user-friendly interfaces that enhance the
          overall user experience. As a frontend web developer, continuously
          learning and exploring new trends in web development .
        </div>
        <img className="profile" src={ProfileImg} alt="" />
      </div>
    </>
  );
}

export default AboutMyself;
