import React from "react";
import { motion } from "framer-motion";
import "./aboutSelf.css";
import gbn from "/gbn.jpeg";
import kuk from "/kuk.jpeg";
import aarohi from "/aarohi.jpeg";
import amar from "/amar2.jpeg";
import logo from "/logo2.png";

function AboutMyself() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="study-cycle">
        <h1 className="abouttitle">From Passion to a Developer</h1>

        {[
          {
            className: "intro",
            text: "Name's Khushi Dhiman, a passionate Full-Stack Web Developer from Panipat. I love building things and believe that the best things are often invisible.",
            url: logo,
          },
          {
            className: "kuk",
            text: "Currently pursuing Bachelor of Technology in Computer Science and Engineering from Kurukshetra University.",
            url: kuk,
          },
          {
            className: "nlk",
            text: "Completed Diploma in Computer Science from GBN College (Nilokheri).",
            url: gbn,
          },
          {
            className: "aarohi",
            text: "Completed Senior Secondary Education from Aarohi Model School.",
            url: aarohi,
          },
          {
            className: "amar",
            text: "Started my early education journey at Amar Jyoti Sr. Sec. School, Sanoli Khurd, Panipat.",
            url: amar,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={item.className}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p>{item.text}</p>
            <motion.img src={item.url} alt="" transition={{ duration: 0.3 }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default AboutMyself;
