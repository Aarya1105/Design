import React from "react";
import "../styles.css"; // Ensure this file exists

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact </h2>
      <p>We’d love to hear from you! Feel free to reach out.</p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@popx.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123, PopX Street, New York, USA</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact; // ✅ Make sure this export is present
