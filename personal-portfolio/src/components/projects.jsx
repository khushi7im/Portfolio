import React from "react";
import "./projects.css";
import TopImg from "/home2.jpg";
import social from "/social.png";
import todo from "/todo.png";
import chess from "/chess.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="bg-img">
        <motion.img
          className="img-contain"
          src={TopImg}
          alt="top image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        />

        <motion.div
          className="projectblock"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="projectTitle">My Work</h1>
          <p>Below are a few of the projects I have worked on in the past.</p>

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
                  <h3>{project.desc}</h3>
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
    </div>
  );
};

export default Projects;
