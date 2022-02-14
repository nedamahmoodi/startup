import React from "react";

//Styles
import styles from "../assets/css/Problematic.module.css";

const Problematic = ({ heading, list, paragraph,wrap }) => {
  return (
    <div className={styles.list} dir="rtl">
      <h2>{heading}</h2>
      <div className={[styles.listproblematic,{"flex-wrap":wrap}]}>
        <ul className={styles.listitem}>
          {list.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      </div>
      <p>{paragraph}</p>
    </div>
  );
};
export default Problematic;
