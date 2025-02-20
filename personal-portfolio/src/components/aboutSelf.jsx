import React from "react";
import { motion } from "framer-motion";
import "./aboutSelf.css";
import gbn from "/gbn.jpeg";
import kuk from "/kuk.jpeg";
import aarohi from "/aarohi.jpeg";
import amar from "/amar2.jpeg";
import path from "/path.jpeg";

function AboutMyself() {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="study-cycle">
        <h1 className="abouttitle">Learning Path</h1>

        {[
          {
            className: "kuk",
            text: "Currently pursuing Bachelor of Technology in Computer Science and Engineering from Kurukshetra university.",
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
            text: "Started my early education journey at Amar Jyoti Sr. Sec. School , Sanoli Khurd, Panipat.",
            url: amar,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={item.className}
            variants={itemVariants}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p>{item.text}</p>
            <motion.img src={item.url} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutMyself;
