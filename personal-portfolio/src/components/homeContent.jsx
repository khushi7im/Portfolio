import "./homeContent.css";
import React from "react";
import TopImg from "../assets/home2.jpg";
import mainImg from "../assets/kiki.png";

function HomeContent() {
  return (
    <div className="wrapper">
      <div className="bg-img">
        <img className="img-contain" src={TopImg} alt="top image" />

        <div className="content">
          <div className="info-section">
            <h1 className="typing-animation">Hello, I'm Khushi Dhiman</h1>
            <br />
            <div className="data">
              I am a web designer and developer passionate about creating
              beautiful and functional websites.
            </div>
          </div>

          <div className="self-img">
            <img className="inside-self" src={mainImg} alt="khushi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
