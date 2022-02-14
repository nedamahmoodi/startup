import React from "react";
import BackgroundImg from "./BackgroundImg";

//Styles
import styles from "../assets/css/Startupsneedadvice.module.css";

const Startupsneedadvice = ({ image, heading, paragraph , dir }) => {
  return (
    <div className={styles.startup} dir={dir}>
      <div className={styles.picstartupneed}>
        <img className={styles.imgleft} src={image} />
      </div>
      <div className={styles.captionright}>
        <div className={styles.titeleneed}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.paragraphneed}>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
export default Startupsneedadvice;
