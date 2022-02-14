import React from "react";

//Styles
import styles from "../assets/css/Beststartupconsulting.module.css";

const Beststartupconsulting = ({ heading, list }) => {
  return (
    <div className={styles.list2} dir="rtl">
      <h2>خدماتی که بهترین مرکز مشاوره استارت آپ ارائه می کند</h2>
      <div className={styles.listproblematic}>
        <ul className={styles.listitem2}>
          {list.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Beststartupconsulting;
