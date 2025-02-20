import "./homeContent.css";
import "./projects.css";
import React from "react";
import { motion } from "framer-motion";
import TopImg from "/home2.jpg";
import mainImg from "/kiki.png";
import social from "/social.png";
import image from "/image.png";
import todo from "/todo.png";
import chess from "/chess.png";
import screenshot from "/Screenshot from 2025-02-16 14-15-35.png";
import { Link, NavLink } from "react-router-dom";
import blue from "/blue.jpeg";

function HomeContent() {
  return (
    <div className="wrapper">
      <div className="bg-img">
        <img
          className="img-contain"
          src={TopImg}
          alt="top image"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.2 }}
        />

        <div className="content">
          <motion.div
            className="info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="typing-animation">Hello, I'm Khushi Dhiman</h1>
            <br />
            <div className="data">
              I am a full-stack developer passionate about building dynamic,
              efficient, and user-friendly web applications.
            </div>
          </motion.div>

          <motion.div
            className="self-img"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img className="inside-self" src={mainImg} alt="khushi" />
          </motion.div>
        </div>
      </div>
      <div className="projectAlbum">
        <div className="imageGallery">
          <span>
            <img src={screenshot} alt="" />
          </span>
          <span>
            <img src={social} alt="" />
          </span>
          <span>
            <img src={todo} alt="" />
          </span>
          <span>
            <img src={screenshot} alt="" />
          </span>
          <span>
            <img src={chess} alt="" />
          </span>
          <span>
            <img src={image} alt="" />
          </span>
        </div>
        <div className="imageBottom"></div>
      </div>
      <div className="projects">
        <motion.div
          className="projectblock"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="projectTitle">Latest Projects</h1>

          {[
            {
              title: "CHILLDOSE",
              tech: "REACT • NODE.JS • MONGODB",
              desc: "Offering users the ability to create profiles, share updates, interact in real-time, and much more...",
              link: "https://social-media-app-kd.netlify.app",
              img: social,
            },
            {
              title: "TO-DO BREEZE",
              tech: "REACT • CSS",
              desc: "Users can easily add new tasks, edit existing ones, delete tasks they no longer need...",
              link: "https://github.com/khushi7im/To-Do.git",
              img: todo,
            },
            {
              title: "CHESS",
              tech: "SOCKET.IO • NODE.JS • EXPRESS.JS",
              desc: "The ultimate online chess experience. Challenge friends, and engage in intense matches...",
              link: "https://chess-gb4x.onrender.com",
              img: chess,
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className="blockItem1">
                <Link to={project.link}>
                  {project.link ? (
                    <h1>{project.title}</h1>
                  ) : (
                    <h1>{project.title}</h1>
                  )}
                  <h2>{project.tech}</h2>
                  <h3>{project.desc}</h3>{" "}
                </Link>
              </span>

              <motion.span
                className="blockItem2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <img src={project.img} alt={project.title} />
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        className="contactfooter"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="contact_footer"></span>
        <div className="foot">
          <h2>Have any idea ?</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
