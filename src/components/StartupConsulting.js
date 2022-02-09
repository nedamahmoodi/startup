import React from "react";
import { Strings } from "../assets/strings/strings";

//Styles
import styles from "../assets/css/StartupConsulting.module.css";

const StartupConsulting = () => {
  return (
    <div className={styles.paragraph} dir="rtl">
      <h1>{Strings.heading}</h1>
      <p>{Strings.lorem}</p>
      <button className={styles.btn2}>{Strings.btn}</button>
    </div>
  );
};
export default StartupConsulting;
