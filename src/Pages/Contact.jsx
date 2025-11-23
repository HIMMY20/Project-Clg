import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-wrapper">

      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        We’re here to help. Reach out anytime.
      </p>

      <div className="contact-cards">

        {/* Location */}
        <div className="contact-card">
          <div className="icon-box">
            <FaMapMarkerAlt />
          </div>
          <h3>Our Location</h3>
          <p>3rd Floor, CPC Building,<br/> Gujarat, India</p>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="icon-box">
            <FaPhoneAlt />
          </div>
          <h3>Phone Number</h3>
          <p>+91 98765 43210</p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="icon-box">
            <FaEnvelope />
          </div>
          <h3>Email Address</h3>
          <p>support@example.com</p>
        </div>

      </div>

    </div>
  );
};

export default Contact;
