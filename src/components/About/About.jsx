import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Rajkiya Engineering College Sonbhadra</h3>
              <p>
              B.tech in Electronics Engineering <br />
              CGPA : 8.04 (Dec 2020 - Jun 2024)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Shiksha Niketan Intermediate College</h3>
              <p>
              PCM (Intermediate), UP Board <br/>
              Percentage: 83.2% (Apr 2018 - Jun 2020)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Prakash Genius English Public School</h3>
              <p>
              Matriculation, CBSE Board <br/>
              Percentage: 80.4% (Apr 2016 - Mar 2018)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
