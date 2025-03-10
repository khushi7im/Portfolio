import React, { useState } from "react";
import "./contact.css";
import TopImg from "/home2.jpg";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-heading">Contact</h1>
        <p className="contact-description">
          Please fill out the following form and we will get back to you within
          the next 24 hours to help you become even greater at what you do.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">
              What's your name? <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">
              What is your email address? <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">
              Write your message here <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </form>{" "}
        <div className="submission">
          {" "}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
