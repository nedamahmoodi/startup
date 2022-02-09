import React from "react";
import BackgroundImg from "./BackgroundImg";

//Styles
import styles from "../assets/css/Startupsneedadvice.module.css";

const Startupsneedadvice = (props) => {
  return (
    <div className={styles.startup}>
      <div className={styles.picstartupneed}>
        <img className={styles.imgleft} src={props.image} />
      </div>
      <div className={styles.captionright}>
        <div className={styles.titeleneed}>
          <h2>{props.heading}</h2>
        </div>
        <div className={styles.paragraphneed}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default Startupsneedadvice;
