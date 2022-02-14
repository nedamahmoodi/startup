import React from "react";
import { Strings } from "../assets/strings/strings";

//Styles
import styles from "../assets/css/StartupConsulting.module.css";

const StartupConsulting = ({ heading, lorem, btn }) => {
  return (
    <div className={styles.paragraph} dir="rtl">
      <h1>{heading}</h1>
      <p>{lorem}</p>
      {
        btn?<button className={styles.btn2}>{btn}</button>:null
      }
      
    </div>
  );
};
export default StartupConsulting;
