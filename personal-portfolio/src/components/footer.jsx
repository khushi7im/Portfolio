import "./footer.css";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.ul
          className="footer-box"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              href: "https://www.instagram.com/khushi7im",
              icon: "fa-brands fa-instagram",
            },
            {
              href: "mailto:khushidhiman7im@gmail.com",
              icon: "fa-solid fa-envelope",
            },
            {
              href: "https://github.com/Khushi7im",
              icon: "fa-brands fa-github",
            },
            {
              href: "https://t.me/Khushi7im",
              icon: "fa-brands fa-telegram",
            },
            {
              href: "https://www.linkedin.com/in/khushi-dhiman-549b98269",
              icon: "fa-brands fa-linkedin-in",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a href={item.href}>
                <motion.i
                  className={item.icon}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.i>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Footer;
