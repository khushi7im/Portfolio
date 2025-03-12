import React, { useState } from "react";
import "./contact.css";
import { db, collection, addDoc } from "../../firebase.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowPopup(true);

    try {
      const docRef = await addDoc(collection(db, "contact_form"), formData);
      setTimeout(() => {
        setShowPopup(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" }); // Reset form after popup disappears
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message!");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-heading">Contact</h1>
        <p className="contact-description">
          Please fill out the following form and we will get back to you within
          the next 24 hours to help you become even greater at what you do.
        </p>
        <div className={`popup-message ${showPopup ? "show" : ""}`}>
          Message sent successfully!
        </div>
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="contact-form">
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
            <div className="submission">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
