import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "/aboutportion.jpeg";
import "./aboutSelf.css";

function AboutMyself() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="study-cycle">
        {[
          {
            className: "kuk",
            text: "Currently pursuing Bachelor of Technology in Computer Science and Engineering from KUK.",
          },
          {
            className: "nlk",
            text: "Completed Higher Secondary Education from NLK Academy.",
          },
          {
            className: "aarohi",
            text: "Completed Secondary Education from Aarohi School.",
          },
          {
            className: "amar",
            text: "Started my early education journey at Amar School.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={item.className}
            variants={itemVariants}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <span className="dot"></span>
            <p>{item.text}</p>
            <motion.img
              src="https://images.shiksha.com/mediadata/images/1571381883phpJFqSc4.png"
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutMyself;
