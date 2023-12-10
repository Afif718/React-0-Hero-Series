import React from "react";
import { getImageUrl } from "../utils";
import styles from "./CoverSection.module.css";

export const CoverSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Afif</h1>
        <p className={styles.description}>
          I'm a full-stack developer with nearly 2 years of experience using
          Mern Stack and various other technologies and tools.
        </p>
        <a className={styles.contactBtn} href="mailto:afifahmad718@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("cover-section/me.png")}
        alt="cover-image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
