import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import ReactTypingEffect from "react-typing-effect"; // Import react-typing-effect

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br />

        {/* Typewriter Animation */}
        <ReactTypingEffect
          className={styles.title}
          text={[
            "Nainsy Krishnatrey",
            "Frontend Developer",
            "MERN Stack Developer",
            "Full Stack Developer",
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1500}
        /></h1>

        <p className={styles.description}>
          I'm a fresher with hands-on experience in frontend development. I love to work and am passionate about crafting web applications using technologies like React and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1gUTY5fSTvG2OwQJ8I00yJCpvZVWDeOKi/view?usp=drivesdk" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
