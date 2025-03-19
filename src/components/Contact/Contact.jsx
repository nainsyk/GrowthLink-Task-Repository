import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset message after 3 seconds
    setFormData({ name: "", email: "", message: "" });

  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {submitted && <p className={styles.successMessage}>Message sent successfully!</p>}
      </form>

      <div className={styles.socialIcons}>
        <a href="mailto:nainsy210@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/nainsy-krishnatrey-746845219/" target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/nainsyk" target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};
