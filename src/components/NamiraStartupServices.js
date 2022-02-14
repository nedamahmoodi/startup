import React from "react";

//Components
import BackgroundImg from "./BackgroundImg";

//Styles
import styles from "../assets/css/NamiraStartupServices.module.css";

const NamiraStartupServices = ({wrap,list,heading}) => {
  return (
    <div className={styles.list3} dir="rtl">
      <BackgroundImg rightOleft="1" />
      <h2>{heading}</h2>
      <ul className={styles.listitem3}>
        {list.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <BackgroundImg rightOleft="" />
    </div>
  );
};
export default NamiraStartupServices;
